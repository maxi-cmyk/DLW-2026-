// Lightweight reactive node store — no React context needed.
// Components subscribe to get re-renders when nodes change.

const DEFAULT_NODES = [
    {
        id: "core",
        label: "CORE_ID",
        icon: "hub",
        x: 50,   // percent of canvas
        y: 50,
        isPrimary: true,
        status: "ACTIVE",
        data: "Central knowledge node.",
        connectedTo: [],
    },
    {
        id: "biology",
        label: "BIOLOGY_ROOT",
        icon: "biotech",
        x: 30,
        y: 40,
        isPrimary: false,
        status: "ACTIVE",
        data: "Biology knowledge cluster.",
        connectedTo: ["core"],
    },
    {
        id: "physics",
        label: "PHYSICS_101",
        icon: "science",
        x: 70,
        y: 30,
        isPrimary: false,
        status: "ACTIVE",
        data: "Physics fundamentals.",
        connectedTo: ["core"],
    },
    {
        id: "history",
        label: "HISTORY_ARCHIVE",
        icon: "history_edu",
        x: 35,
        y: 65,
        isPrimary: false,
        status: "ACTIVE",
        data: "Historical records.",
        connectedTo: ["core"],
    },
];

let nodes = [...DEFAULT_NODES];
let listeners = [];

export const getNodes = () => nodes;

export const addNode = ({ label, data, connectedToId }) => {
    // Place new node in a ring around the canvas centre
    const angle = Math.random() * 2 * Math.PI;
    const radius = 18 + Math.random() * 10;
    const x = 50 + Math.cos(angle) * radius;
    const y = 50 + Math.sin(angle) * radius;

    const newNode = {
        id: `node_${Date.now()}`,
        label: label.toUpperCase().replace(/\s+/g, "_").slice(0, 20),
        icon: "description",
        x,
        y,
        isPrimary: false,
        status: "ACTIVE",
        data: data || "",
        connectedTo: connectedToId ? [connectedToId] : ["core"],
    };

    nodes = [...nodes, newNode];
    listeners.forEach((fn) => fn(nodes));
    return newNode;
};

export const subscribe = (fn) => {
    listeners.push(fn);
    return () => {
        listeners = listeners.filter((l) => l !== fn);
    };
};
