import React, { useState, useEffect, useRef } from "react";

const ZenModeTimer = ({ task, onComplete, onGiveUp }) => {
    const initialSecondsRef = useRef(task?.durationSeconds ?? 25 * 60);
    const [secondsLeft, setSecondsLeft] = useState(initialSecondsRef.current);
    const [brainDump, setBrainDump] = useState("");
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSecondsLeft((s) => {
                if (s <= 1) {
                    clearInterval(intervalRef.current);
                    onComplete(initialSecondsRef.current);
                    return 0;
                }
                return s - 1;
            });
        }, 1000);
        return () => clearInterval(intervalRef.current);
    }, [onComplete]);

    const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
    const seconds = String(secondsLeft % 60).padStart(2, "0");

    return (
        <div className="fixed inset-0 z-50 bg-vector-bg flex flex-col overflow-hidden">
            <div className="scanline" />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(125,249,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(125,249,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Top HUD */}
            <div className="relative z-10 flex justify-between items-start px-8 pt-6">
                <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-vector-blue animate-pulse" />
                    <span className="text-[8px] text-vector-blue tracking-widest uppercase font-mono">
                        ZEN_MODE_ENGAGED
                    </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-[8px] text-vector-blue/60 tracking-widest uppercase font-mono">
                        CURRENT_OBJECTIVE
                    </span>
                    <h1 className="text-sm text-vector-white tracking-[0.2em] uppercase font-bold terminal-text border-b border-vector-blue/40 pb-1">
                        {task?.title ?? "FOCUS_SESSION"}
                    </h1>
                </div>
                <span className="text-[8px] text-vector-white/30 tracking-widest uppercase font-mono">
                    NO_DISTRACTIONS
                </span>
            </div>

            {/* Timer display */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
                {/* Corner brackets */}
                <div className="relative flex items-center justify-center">
                    <div className="absolute -left-8 top-1/2 -translate-y-1/2 h-24 w-6 border-l-2 border-t-2 border-b-2 border-vector-blue/40" />
                    <div className="absolute -right-8 top-1/2 -translate-y-1/2 h-24 w-6 border-r-2 border-t-2 border-b-2 border-vector-blue/40" />

                    <div
                        className="text-[10rem] font-mono leading-none tracking-widest terminal-text text-vector-white"
                        style={{
                            fontVariantNumeric: "tabular-nums",
                            textShadow: "0 0 40px rgba(125,249,255,0.6), 0 0 80px rgba(125,249,255,0.2)",
                        }}
                    >
                        {minutes}
                        <span className="text-vector-blue/60 animate-pulse mx-2">:</span>
                        {seconds}
                    </div>
                </div>

                {/* Progress dots */}
                <div className="flex gap-6">
                    {[0, 1, 2].map((i) => (
                        <div key={i} className="h-0.5 w-12 bg-vector-blue/60" />
                    ))}
                </div>
            </div>

            {/* Brain dump + buttons */}
            <div className="relative z-10 flex flex-col items-center gap-6 px-8 pb-10">
                {/* Brain dump */}
                <div className="w-full max-w-2xl border border-vector-blue/30 bg-vector-bg/60 p-4 font-mono">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-vector-blue text-xs">&gt;</span>
                    </div>
                    <textarea
                        value={brainDump}
                        onChange={(e) => setBrainDump(e.target.value)}
                        placeholder="BRAIN DUMP: type thought here to clear mind..."
                        className="w-full bg-transparent text-vector-white/70 placeholder:text-vector-white/20 text-xs font-mono resize-none outline-none"
                        rows={2}
                    />
                    <div className="text-vector-blue/40 text-xs mt-1">_</div>
                </div>

                {/* Buttons */}
                <div className="flex gap-6">
                    <button
                        onClick={onGiveUp}
                        className="flex flex-col items-center gap-1 px-10 py-3 border border-vector-white/20 bg-vector-bg text-vector-white/50 hover:border-vector-white/50 hover:text-vector-white transition-all"
                    >
                        <span className="material-symbols-outlined text-lg">logout</span>
                        <span className="text-[9px] tracking-widest uppercase font-mono">GIVE UP</span>
                    </button>
                    <button
                        onClick={() => onComplete(initialSecondsRef.current - secondsLeft)}
                        className="flex flex-col items-center gap-1 px-10 py-3 border-2 border-vector-blue bg-vector-blue/10 text-vector-blue hover:bg-vector-blue/20 transition-all shadow-[0_0_20px_rgba(125,249,255,0.3)]"
                    >
                        <span className="material-symbols-outlined text-lg">check_circle</span>
                        <span className="text-[9px] tracking-widest uppercase font-bold font-mono">COMPLETE</span>
                    </button>
                </div>
            </div>

            {/* Bottom HUD */}
            <div className="relative z-10 flex justify-between items-center px-8 pb-4 text-[8px] text-vector-white/20 font-mono tracking-widest">
                <span>X: 04.09 | Y: 12.02 &nbsp;&nbsp; GRID_LOCK: ACTIVE</span>
                <span>MEM_USAGE: 54% &nbsp;&nbsp; FOCUS_LEVEL: MAX</span>
            </div>
        </div>
    );
};

export default ZenModeTimer;
