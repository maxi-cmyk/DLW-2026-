import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNode } from "../nodeStore";

const MissionCompleteScreen = ({ task, timeSpentSeconds = 25 * 60, onReEnter, onReturnToBase }) => {
    const navigate = useNavigate();
    const [connected, setConnected] = useState("core");

    const minutes = String(Math.floor(timeSpentSeconds / 60)).padStart(2, "0");
    const seconds = String(timeSpentSeconds % 60).padStart(2, "0");
    const timeString = `${minutes}:${seconds}`;

    // Simple SVG XP growth line
    const points = [
        { x: 60, y: 160 },
        { x: 160, y: 130 },
        { x: 260, y: 110 },
        { x: 360, y: 80 },
        { x: 460, y: 45 },
    ];
    const polyline = points.map((p) => `${p.x},${p.y}`).join(" ");

    return (
        <div className="fixed inset-0 z-50 bg-vector-bg overflow-y-auto">
            <div className="min-h-full flex items-center justify-center py-8 px-4">
                <div className="scanline" />
                {/* Centered card */}
                <div
                    className="relative w-full max-w-xl mx-4 border-2 border-vector-blue/60 bg-[#080214] flex flex-col"
                    style={{ boxShadow: "0 0 60px rgba(125,249,255,0.15), inset 0 0 40px rgba(125,249,255,0.03)" }}
                >
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-vector-blue" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-vector-blue" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-vector-blue" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-vector-blue" />

                    <div className="p-8 flex flex-col gap-6">
                        {/* Header */}
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center gap-2 text-vector-blue/50 text-[8px] font-mono tracking-widest mb-1">
                                <span className="material-symbols-outlined text-sm">terminal</span>
                                <span>SYSTEM_LOG: {new Date().toISOString().slice(0, 10)}</span>
                            </div>
                            <h1
                                className="text-3xl font-bold tracking-widest text-vector-white uppercase terminal-text"
                                style={{ textShadow: "0 0 30px rgba(125,249,255,0.5)" }}
                            >
                                MISSION_COMPLETE
                            </h1>
                            <p className="text-vector-blue text-xs tracking-wider mt-1">Protocol successfully executed.</p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { icon: "timer", label: "TIME_IN_FOCUS", value: timeString },
                                { icon: "military_tech", label: "XP_EARNED", value: "+50" },
                                { icon: "local_fire_department", label: "STREAK", value: "5_DAYS" },
                            ].map(({ icon, label, value }) => (
                                <div key={label} className="flex flex-col items-center gap-2 p-4 border border-vector-blue/20 bg-vector-blue/5">
                                    <span className="material-symbols-outlined text-vector-blue text-xl">{icon}</span>
                                    <span className="text-[7px] text-vector-blue/50 uppercase tracking-widest font-mono">{label}</span>
                                    <span className="text-lg font-bold text-vector-white font-mono terminal-text">{value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Task connection panel */}
                        <div className="border border-vector-blue/30 bg-black/30 p-5 flex flex-col gap-4">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-vector-blue text-base">check_circle</span>
                                    <span className="text-xs text-vector-white font-bold uppercase tracking-wider">TASK COMPLETE!</span>
                                </div>
                                <span className="material-symbols-outlined text-vector-blue/30 text-2xl">hub</span>
                            </div>
                            <p className="text-xs text-vector-white/70 font-mono">
                                Before saving <span className="text-vector-blue font-bold">"{task?.title ?? "session"}"</span>, connect it to an existing concept:
                            </p>
                            <div>
                                <p className="text-[8px] text-vector-blue/50 uppercase tracking-widest font-mono mb-2">CONNECTED TO:</p>
                                <select
                                    value={connected}
                                    onChange={(e) => setConnected(e.target.value)}
                                    className="w-full bg-vector-bg border border-vector-blue/30 text-vector-white text-xs font-mono p-3 outline-none focus:border-vector-blue appearance-none cursor-pointer"
                                >
                                    <option value="core">ME (Core Memory)</option>
                                    <option value="physics">Physics — Wave Mechanics</option>
                                    <option value="biology">Biology — Cell Division</option>
                                    <option value="history">History — Cold War Era</option>
                                </select>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={onReturnToBase}
                                    className="flex-1 py-3 border border-vector-white/20 text-vector-white/50 text-[9px] uppercase tracking-widest font-mono hover:border-vector-white/40 hover:text-vector-white/70 transition-all"
                                >
                                    CANCEL
                                </button>
                                <button
                                    onClick={() => {
                                        const newNode = addNode({
                                            label: task?.title ?? "SESSION",
                                            data: task?.description ?? "",
                                            connectedToId: connected,
                                        });
                                        navigate("/knowledge-tree", { state: { newNodeId: newNode.id } });
                                    }}
                                    className="flex-[2] py-3 bg-vector-blue text-vector-bg text-[9px] uppercase tracking-widest font-bold font-mono hover:brightness-110 transition-all flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-sm">save</span>
                                    SAVE &amp; CONNECT
                                </button>
                            </div>
                        </div>

                        {/* XP Growth chart */}
                        <div className="border border-vector-blue/20 bg-black/20 p-4 flex flex-col gap-2">
                            <div className="flex justify-between items-center mb-2">
                                <div>
                                    <p className="text-[8px] text-vector-blue/50 uppercase tracking-widest font-mono">XP_GROWTH_VECTOR</p>
                                    <p className="text-sm text-vector-white font-bold tracking-widest">
                                        RISING <span className="text-green-400">↗</span>
                                    </p>
                                </div>
                                <span className="text-[7px] text-vector-blue/30 font-mono tracking-widest">GROWTH_MATRIX_V.01</span>
                            </div>
                            <svg className="w-full" height="180" viewBox="0 60 520 130" preserveAspectRatio="none">
                                {/* Grid lines */}
                                {[0, 1, 2, 3].map((i) => (
                                    <line key={i} x1="60" y1={60 + i * 35} x2="480" y2={60 + i * 35} stroke="rgba(125,249,255,0.07)" strokeWidth="1" />
                                ))}
                                {/* Filled area */}
                                <polygon
                                    points={`${polyline} 460,185 60,185`}
                                    fill="rgba(0,255,128,0.06)"
                                />
                                {/* Line */}
                                <polyline points={polyline} fill="none" stroke="#00ff80" strokeWidth="2" />
                                {/* Dots */}
                                {points.map((p, i) => (
                                    <circle key={i} cx={p.x} cy={p.y} r="4" fill="#080214" stroke="#00ff80" strokeWidth="2" />
                                ))}
                                {/* X labels */}
                                {["START", "LVL_1", "LVL_2", "LVL_3", "NOW"].map((label, i) => (
                                    <text key={label} x={points[i].x} y={180} textAnchor="middle" fill="rgba(125,249,255,0.3)" fontSize="7" fontFamily="monospace">
                                        {label}
                                    </text>
                                ))}
                            </svg>
                        </div>

                        {/* Action buttons */}
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={onReEnter}
                                className="flex items-center justify-center gap-2 py-4 border border-vector-white/20 text-vector-white/70 text-[9px] uppercase tracking-widest font-mono hover:border-vector-blue hover:text-vector-blue transition-all"
                            >
                                <span className="material-symbols-outlined text-sm">replay</span>
                                RE-ENTER_TUNNEL
                            </button>
                            <button
                                onClick={onReturnToBase}
                                className="flex items-center justify-center gap-2 py-4 bg-vector-blue/10 border border-vector-blue text-vector-blue text-[9px] uppercase tracking-widest font-bold font-mono hover:bg-vector-blue/20 transition-all"
                            >
                                <span className="material-symbols-outlined text-sm">home</span>
                                RETURN_TO_BASE
                            </button>
                        </div>
                    </div>

                    {/* Bottom status bar */}
                    <div className="border-t border-vector-blue/20 px-8 py-3 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[8px] text-vector-white/40 font-mono tracking-widest uppercase">SYSTEM ONLINE</span>
                        </div>
                        <span className="text-[8px] text-vector-blue/30 font-mono tracking-widest">ID: UGT_8842_XC</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionCompleteScreen;
