import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const QuizScreen = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-vector-bg text-vector-white font-terminal relative">
      <div className="scanline"></div>

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-14 border-b border-vector-blue flex items-center justify-between px-6 backdrop-blur-md bg-vector-bg/40 z-10 w-full shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-vector-white/60 font-mono tracking-wider">SYSTEM_PROCESS</span>
            <span className="text-[10px] text-vector-blue font-bold">&gt;&gt;</span>
            <span className="text-[10px] text-vector-blue font-mono tracking-wider terminal-text">
              NODE_VALIDATION: [Quantum_Mechanics]
            </span>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center justify-center border border-vector-blue/30 hover:border-vector-blue bg-vector-blue/10 hover:bg-vector-blue/20 text-vector-blue text-[9px] tracking-widest uppercase h-8 px-4 transition-all gap-2">
              <span className="truncate">EXIT_QUIZ</span>
              <span className="material-symbols-outlined text-base">logout</span>
            </button>
            <button className="flex size-8 items-center justify-center border border-vector-blue/30 hover:border-vector-blue bg-vector-bg text-vector-white hover:text-vector-blue transition-colors">
              <span className="material-symbols-outlined text-base">terminal</span>
            </button>
            <button className="flex size-8 items-center justify-center border border-vector-blue/30 hover:border-vector-blue bg-vector-bg text-vector-white hover:text-vector-blue transition-colors">
              <span className="material-symbols-outlined text-base">settings</span>
            </button>
          </div>
        </header>

        {/* Main scrollable content */}
        <main className="flex-1 overflow-y-auto custom-scrollbar py-6 px-6">
          <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">

            {/* Breadcrumb & Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-vector-bg border border-vector-blue/20">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-vector-blue/50 text-xl">hub</span>
                <span className="text-vector-blue/70 hover:text-vector-blue transition-colors text-[9px] font-mono tracking-widest uppercase cursor-pointer">
                  SYSTEM_PROCESS
                </span>
                <span className="text-vector-blue/40 text-[9px] font-mono">&gt;&gt;</span>
                <span className="text-vector-white text-[9px] font-mono tracking-widest uppercase">
                  NODE_VALIDATION: [Quantum_Mechanics]
                </span>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-vector-blue text-base">bolt</span>
                  <span className="text-[8px] text-vector-blue/70 uppercase tracking-widest">Latency: 12ms</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-400 text-base">wifi</span>
                  <span className="text-[8px] text-green-400 uppercase tracking-widest">ONLINE</span>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: Quiz Interface */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                {/* Question Card */}
                <div className="relative border border-vector-blue bg-vector-bg shadow-card-glow overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-vector-blue"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-vector-blue"></div>
                  <div className="absolute absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-vector-blue"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-vector-blue"></div>

                  <div className="px-6 py-4 border-b border-vector-blue/20 flex justify-between items-center bg-vector-blue/5">
                    <h3 className="text-vector-blue font-bold tracking-widest text-[9px] flex items-center gap-2 uppercase">
                      <span className="material-symbols-outlined text-base">psychology</span>
                      NODE_QUERY_001 // PRIMARY_FUNCTION
                    </h3>
                    <button className="text-[8px] font-mono text-vector-blue/60 hover:text-vector-blue flex items-center gap-1 border border-vector-blue/20 px-2 py-1 hover:bg-vector-blue/10 transition-colors">
                      <span className="material-symbols-outlined text-sm">code</span>
                      view_source
                    </button>
                  </div>

                  <div className="p-8">
                    <div className="mb-6">
                      <p className="text-vector-white text-sm font-mono leading-relaxed">
                        Identify the core principle defining the{" "}
                        <span className="text-vector-blue border-b border-vector-blue/40">
                          Heisenberg Uncertainty Principle
                        </span>{" "}
                        within this context.
                      </p>
                    </div>

                    <div className="w-full h-40 bg-black/40 border border-vector-blue/10 flex items-center justify-center overflow-hidden relative mb-2">
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage: "radial-gradient(#7DF9FF 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      ></div>
                      <div className="text-vector-blue/40 font-mono text-[9px] p-4 w-full h-full overflow-hidden z-10">
                        &gt; QUANTUM_STATE_ANALYZING...<br />
                        &gt; DELTA_X * DELTA_P &gt;= H_BAR / 2<br />
                        &gt; OBSERVATION_EFFECT_DETECTED<br />
                        &gt; CALCULATING PROBABILITY WAVES...<br />
                        <span className="animate-pulse">_</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Answer Options */}
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { letter: "A", text: "Position and momentum cannot be simultaneously determined with precision." },
                    { letter: "B", text: "Energy is conserved in isolated systems regardless of observation." },
                    { letter: "C", text: "Particles exhibit wave-like properties only when not observed." },
                    { letter: "D", text: "Time is relative to the observer's velocity through space." },
                  ].map(({ letter, text }) => (
                    <button
                      key={letter}
                      className="group relative flex items-center w-full p-4 bg-vector-bg border border-vector-blue/20 hover:border-vector-blue hover:bg-vector-blue/5 transition-all text-left"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-vector-blue/20 group-hover:bg-vector-blue transition-colors"></div>
                      <span className="flex items-center justify-center size-8 bg-vector-blue/10 text-vector-blue font-bold mr-4 group-hover:bg-vector-blue group-hover:text-vector-bg transition-colors shrink-0 text-[9px]">
                        {letter}
                      </span>
                      <span className="text-vector-white/70 font-mono group-hover:text-vector-white text-xs">
                        {text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Stats & Context */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1 p-4 bg-vector-bg border border-vector-blue/30 relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 text-vector-blue/5 group-hover:text-vector-blue/10 transition-colors">
                      <span className="material-symbols-outlined text-[80px]">local_fire_department</span>
                    </div>
                    <p className="text-vector-blue/70 text-[8px] font-bold tracking-widest uppercase z-10">
                      Current Streak
                    </p>
                    <p className="text-vector-white text-3xl font-bold leading-tight z-10 font-mono">12</p>
                  </div>
                  <div className="flex flex-col gap-1 p-4 bg-vector-bg border border-vector-blue/30 relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 text-vector-blue/5 group-hover:text-vector-blue/10 transition-colors">
                      <span className="material-symbols-outlined text-[80px]">military_tech</span>
                    </div>
                    <p className="text-vector-blue/70 text-[8px] font-bold tracking-widest uppercase z-10">
                      XP Reward
                    </p>
                    <p className="text-vector-blue text-3xl font-bold leading-tight z-10 shadow-card-glow font-mono">+250</p>
                  </div>
                </div>

                {/* Context Preview */}
                <div className="flex flex-col grow bg-vector-bg border border-vector-blue/20 overflow-hidden">
                  <div className="px-4 py-3 border-b border-vector-blue/20 bg-vector-blue/5 flex justify-between items-center">
                    <h4 className="text-vector-white font-bold text-[9px] tracking-widest uppercase">
                      Node_Context
                    </h4>
                    <span className="material-symbols-outlined text-vector-blue/50 text-sm">share</span>
                  </div>

                  <div className="relative h-40 bg-black/60 w-full flex items-center justify-center overflow-hidden border-b border-vector-blue/20">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#7DF9FF 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="size-16 border-2 border-vector-blue bg-black/80 flex items-center justify-center shadow-card-glow mb-2">
                        <span className="material-symbols-outlined text-vector-blue text-3xl">science</span>
                      </div>
                      <div className="bg-black/80 px-3 py-1 text-vector-blue text-[9px] font-mono border border-vector-blue/30">
                        ID: QUANT_MECH
                      </div>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col gap-3">
                    <div>
                      <p className="text-vector-blue/60 text-[8px] font-bold uppercase tracking-widest mb-1">Parent Node</p>
                      <div className="flex items-center gap-2 text-vector-white text-xs font-mono">
                        <span className="material-symbols-outlined text-base">arrow_upward</span>
                        Physics_Standard_Model
                      </div>
                    </div>

                    <div className="h-px bg-vector-blue/20 w-full"></div>

                    <div>
                      <p className="text-vector-blue/60 text-[8px] font-bold uppercase tracking-widest mb-1">Connected Nodes</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {["Wave_Function", "Schrödinger", "Planck_Constant"].map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-vector-blue/5 text-vector-white/60 text-[9px] border border-vector-blue/20 hover:border-vector-blue/50 transition-colors cursor-default font-mono">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto p-4 bg-black/20">
                    <button className="w-full py-2 border border-vector-blue/30 text-vector-blue text-[9px] font-bold uppercase tracking-widest hover:bg-vector-blue hover:text-vector-bg transition-all">
                      EXPLORE FULL GRAPH
                    </button>
                  </div>
                </div>

                {/* Mini Tools */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex flex-col items-center justify-center gap-2 p-3 bg-vector-bg border border-vector-blue/20 hover:border-vector-blue/50 group transition-all">
                    <span className="material-symbols-outlined text-vector-white/50 group-hover:text-vector-blue transition-colors">lightbulb</span>
                    <span className="text-[8px] text-vector-white/50 font-bold uppercase tracking-widest group-hover:text-vector-white">Hint (-50XP)</span>
                  </button>
                  <button className="flex flex-col items-center justify-center gap-2 p-3 bg-vector-bg border border-vector-blue/20 hover:border-vector-blue/50 group transition-all">
                    <span className="material-symbols-outlined text-vector-white/50 group-hover:text-vector-blue transition-colors">bookmark</span>
                    <span className="text-[8px] text-vector-white/50 font-bold uppercase tracking-widest group-hover:text-vector-white">Save for Later</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Status Line */}
        <footer className="border-t border-vector-blue/20 bg-vector-bg py-2 px-6 shrink-0">
          <div className="flex justify-between items-center text-[8px] uppercase font-mono tracking-widest text-vector-blue/40">
            <span>System_Status: OPERATIONAL</span>
            <span>Session_ID: 0x4F92A1</span>
            <span>Focus_Mode: ACTIVE</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default QuizScreen;
