const fs = require('fs');
const path = require('path');

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walk(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            const newPath = fullPath.replace(/\.tsx$/, '.jsx');
            fs.renameSync(fullPath, newPath);
            console.log(`Renamed ${fullPath} to ${newPath}`);
        }
    }
}

walk(path.resolve(__dirname, 'src/renderer'));

// Rename tsconfig.json to jsconfig.json
try {
    fs.renameSync(path.resolve(__dirname, 'tsconfig.json'), path.resolve(__dirname, 'jsconfig.json'));
} catch (e) {
    console.log('tsconfig.json not found or already renamed');
}

// Remove tsconfig.node.json if exists
try {
    fs.unlinkSync(path.resolve(__dirname, 'tsconfig.node.json'));
} catch (e) {
    console.log('tsconfig.node.json not found');
}
