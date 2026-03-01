import React from "react";

interface MissionBriefingProps {
  onClose?: () => void;
  onEngage?: () => void;
}

const MissionBriefingScreen: React.FC<MissionBriefingProps> = ({
  onClose,
  onEngage,
}) => {
  return (
    <div className="bg-[#0D0221] min-h-screen font-sans overflow-hidden flex flex-col relative text-slate-300">
      {/* Background decorative elements */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(128, 249, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 249, 255, 0.05) 1px, transparent 1px)",
        }}
      ></div>
      <div
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-10 opacity-30"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1))",
          backgroundSize: "100% 4px",
        }}
      ></div>

      {/* Subtle rotating wireframe abstraction */}
      <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] border border-[#7DF9FF]/5 rounded-full z-0 opacity-20 pointer-events-none"></div>
      <div className="absolute right-[-5%] top-[15%] w-[500px] h-[500px] border border-[#7DF9FF]/10 rounded-full z-0 opacity-20 pointer-events-none"></div>
      <div className="absolute left-[-10%] bottom-[-10%] w-[800px] h-[800px] border border-[#7DF9FF]/5 rounded-full z-0 opacity-10 pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#7DF9FF]/20 bg-[#0D0221]/90 backdrop-blur-sm px-6 py-4">
        <div className="flex items-center gap-4 text-[#7DF9FF]">
          <div className="size-6 text-[#7DF9FF] animate-pulse">
            <span className="material-symbols-outlined text-2xl">radar</span>
          </div>
          <h2 className="text-slate-100 text-lg font-bold leading-tight tracking-wider uppercase font-[Space Grotesk]">
            ugtafocusman // MISSION_BRIEFING [OP_CODE: 0x77A]
          </h2>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center justify-center rounded border border-[#7DF9FF]/30 hover:border-[#7DF9FF]/80 hover:bg-[#7DF9FF]/10 transition-colors h-10 w-10 text-[#7DF9FF]">
            <span className="material-symbols-outlined">terminal</span>
          </button>
          <button className="flex items-center justify-center rounded border border-[#7DF9FF]/30 hover:border-[#7DF9FF]/80 hover:bg-[#7DF9FF]/10 transition-colors h-10 w-10 text-[#7DF9FF]">
            <span className="material-symbols-outlined">settings</span>
          </button>

          <div className="h-10 w-px bg-[#7DF9FF]/20 mx-1"></div>

          <div className="flex items-center gap-2 px-3 h-10 rounded bg-[#7DF9FF]/10 border border-[#7DF9FF]/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-bold text-[#7DF9FF] tracking-widest uppercase">
              SYSTEM_ONLINE
            </span>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="ml-2 flex items-center justify-center rounded border border-red-500/30 hover:border-red-500/80 hover:bg-red-500/10 transition-colors h-10 w-10 text-red-500"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 sm:p-12 overflow-y-auto w-full">
        {/* Central Card */}
        <div
          className="w-full max-w-5xl flex flex-col border-2 border-[#7DF9FF] bg-[#0D0221]/95 relative overflow-hidden"
          style={{
            boxShadow:
              "0 0 10px rgba(128, 249, 255, 0.2), inset 0 0 10px rgba(128, 249, 255, 0.05)",
          }}
        >
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[#7DF9FF] z-20"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-[#7DF9FF] z-20"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-[#7DF9FF] z-20"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-[#7DF9FF] z-20"></div>

          {/* Card Header */}
          <div className="bg-[#7DF9FF]/10 border-b border-[#7DF9FF]/30 p-4 flex justify-between items-center">
            <h1 className="text-[#7DF9FF] tracking-widest text-2xl font-bold uppercase font-[Space Grotesk]">
              Mission Briefing
            </h1>

            <div className="flex gap-2 text-xs font-mono text-[#7DF9FF]/70">
              <span>SECURE_CONN_ESTABLISHED</span>
              <span>::</span>
              <span>LATENCY: 12ms</span>
            </div>
          </div>

          {/* Card Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:divide-x divide-[#7DF9FF]/30 min-h-[400px]">
            {/* Left Column: Objective Overview */}
            <div className="lg:col-span-7 p-8 flex flex-col gap-8 relative">
              {/* Background accent */}
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#7DF9FF]/5 to-transparent pointer-events-none"></div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-[#7DF9FF] text-sm">
                    label_important
                  </span>
                  <p className="text-[#7DF9FF]/60 text-xs font-bold tracking-[0.2em] uppercase font-[Space Grotesk]">
                    OBJECTIVE_OVERVIEW
                  </p>
                </div>

                <h3 className="text-white text-3xl font-bold leading-tight mb-2 font-[Space Grotesk]">
                  History Essay: Industrial Revolution
                </h3>
                <p className="text-slate-300 text-lg font-light leading-relaxed max-w-xl font-sans">
                  Analyze the primary socio-economic causes of the Industrial
                  Revolution in 18th century Britain. Focus on technological
                  innovations and labor shifts.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-auto">
                <div className="border-l-2 border-[#7DF9FF]/40 pl-4 py-1">
                  <p className="text-[#7DF9FF]/60 text-xs font-bold tracking-widest uppercase mb-1 font-[Space Grotesk]">
                    DIFFICULTY_LEVEL
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 font-bold text-xl font-[Space Grotesk]">
                      HARD
                    </span>
                    <div className="flex gap-0.5">
                      <div className="w-1.5 h-3 bg-red-400"></div>
                      <div className="w-1.5 h-3 bg-red-400"></div>
                      <div className="w-1.5 h-3 bg-red-400"></div>
                      <div className="w-1.5 h-3 bg-red-400/30"></div>
                      <div className="w-1.5 h-3 bg-red-400/30"></div>
                    </div>
                  </div>
                </div>

                <div className="border-l-2 border-[#7DF9FF]/40 pl-4 py-1">
                  <p className="text-[#7DF9FF]/60 text-xs font-bold tracking-widest uppercase mb-1 font-[Space Grotesk]">
                    FOCUS_TYPE
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#7DF9FF]">
                      psychology
                    </span>
                    <span className="text-white font-bold text-lg font-[Space Grotesk]">
                      Deep Work
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Intelligence Report (Graph) */}
            <div className="lg:col-span-5 p-8 flex flex-col bg-black/20 relative group">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#7DF9FF] text-sm">
                    hub
                  </span>
                  <p className="text-[#7DF9FF]/60 text-xs font-bold tracking-[0.2em] uppercase font-[Space Grotesk]">
                    INTELLIGENCE_REPORT
                  </p>
                </div>
                <span className="text-[10px] text-[#7DF9FF]/40 font-mono">
                  NODE_ID: 8821a
                </span>
              </div>

              {/* Vector Graph Visualization Placeholder */}
              <div className="flex-1 border border-[#7DF9FF]/20 bg-[#0D0221]/50 rounded relative overflow-hidden flex items-center justify-center p-4">
                {/* Abstract Vector Graph */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(#7DF9FF 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>

                <div
                  className="relative w-full h-full min-h-[200px]"
                  data-alt="Abstract vector node graph showing connected concepts"
                >
                  {/* SVG Graph simulation */}
                  <svg
                    className="w-full h-full drop-shadow-[0_0_8px_rgba(128,249,255,0.3)]"
                    fill="none"
                    height="100%"
                    viewBox="0 0 300 200"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Lines */}
                    <path
                      d="M150 100 L 80 60"
                      stroke="#7DF9FF"
                      strokeOpacity="0.6"
                      strokeWidth="1"
                    ></path>
                    <path
                      d="M150 100 L 220 70"
                      stroke="#7DF9FF"
                      strokeOpacity="0.6"
                      strokeWidth="1"
                    ></path>
                    <path
                      d="M150 100 L 120 160"
                      stroke="#7DF9FF"
                      strokeOpacity="0.6"
                      strokeWidth="1"
                    ></path>
                    <path
                      d="M80 60 L 60 120"
                      stroke="#7DF9FF"
                      strokeDasharray="4 2"
                      strokeOpacity="0.4"
                      strokeWidth="0.5"
                    ></path>

                    {/* Nodes */}
                    <circle
                      cx="150"
                      cy="100"
                      fill="#0D0221"
                      r="6"
                      stroke="#7DF9FF"
                      strokeWidth="2"
                    ></circle>
                    <circle
                      className="animate-ping"
                      cx="150"
                      cy="100"
                      r="12"
                      stroke="#7DF9FF"
                      strokeOpacity="0.3"
                      strokeWidth="1"
                      style={{ animationDuration: "3s" }}
                    ></circle>
                    <circle
                      cx="80"
                      cy="60"
                      fill="#0D0221"
                      r="4"
                      stroke="#7DF9FF"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      cx="220"
                      cy="70"
                      fill="#0D0221"
                      r="4"
                      stroke="#7DF9FF"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      cx="120"
                      cy="160"
                      fill="#0D0221"
                      r="4"
                      stroke="#7DF9FF"
                      strokeWidth="1.5"
                    ></circle>
                    <circle
                      cx="60"
                      cy="120"
                      fill="#0D0221"
                      opacity="0.7"
                      r="3"
                      stroke="#7DF9FF"
                      strokeWidth="1"
                    ></circle>

                    {/* Labels (Simulated text) */}
                    <text
                      fill="#7DF9FF"
                      fontFamily="monospace"
                      fontSize="8"
                      opacity="0.8"
                      x="160"
                      y="95"
                    >
                      CURRENT_TASK
                    </text>
                    <text
                      fill="#7DF9FF"
                      fontFamily="monospace"
                      fontSize="6"
                      opacity="0.6"
                      x="85"
                      y="55"
                    >
                      Eco.Factors
                    </text>
                    <text
                      fill="#7DF9FF"
                      fontFamily="monospace"
                      fontSize="6"
                      opacity="0.6"
                      x="225"
                      y="65"
                    >
                      Steam_Pwr
                    </text>
                    <text
                      fill="#7DF9FF"
                      fontFamily="monospace"
                      fontSize="6"
                      opacity="0.6"
                      x="125"
                      y="165"
                    >
                      Labor_Laws
                    </text>
                  </svg>
                </div>

                {/* Overlay info */}
                <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm border border-[#7DF9FF]/20 p-2 text-xs text-slate-300 font-mono">
                  <span className="text-[#7DF9FF]">&gt;</span> LINKED: '18th
                  Century Economics', 'Steam Power'
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="border-t border-[#7DF9FF]/30 bg-[#7DF9FF]/5 p-6 grid grid-cols-2 gap-4">
            {/* XP Block */}
            <div className="flex flex-col items-center justify-center border border-[#7DF9FF]/20 bg-[#0D0221]/40 p-4 relative overflow-hidden group hover:border-[#7DF9FF]/50 transition-colors">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#7DF9FF] to-transparent opacity-50"></div>
              <p className="text-[#7DF9FF]/60 text-xs font-bold tracking-[0.2em] mb-1 font-[Space Grotesk]">
                PROJECTED_XP
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-[Space Grotesk] font-bold text-white tracking-tighter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                  250
                </span>
                <span className="text-sm text-[#7DF9FF] font-bold font-[Space Grotesk]">
                  XP
                </span>
              </div>
            </div>

            {/* Time Block */}
            <div className="flex flex-col items-center justify-center border border-[#7DF9FF]/20 bg-[#0D0221]/40 p-4 relative overflow-hidden group hover:border-[#7DF9FF]/50 transition-colors">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#7DF9FF] to-transparent opacity-50"></div>
              <p className="text-[#7DF9FF]/60 text-xs font-bold tracking-[0.2em] mb-1 font-[Space Grotesk]">
                ESTIMATED_TIME
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-[Space Grotesk] font-bold text-white tracking-tighter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                  25:00
                </span>
                <span className="text-sm text-[#7DF9FF] font-bold font-[Space Grotesk]">
                  MIN
                </span>
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-8 bg-[#0D0221] border-t border-[#7DF9FF]/30 flex justify-center relative overflow-hidden">
            {/* Button Glow Background */}
            <div
              className="absolute inset-0 bg-[#7DF9FF]/5 opacity-0 hover:opacity-100 transition-opacity duration-500"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(128,249,255,0.1) 0%, transparent 70%)",
              }}
            ></div>
            <button
              onClick={onEngage}
              className="relative group cursor-pointer w-full max-w-md"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#7DF9FF] via-blue-400 to-[#7DF9FF] rounded blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex items-center justify-center bg-[#7DF9FF] hover:bg-[#00dbe6] text-[#0D0221] h-16 px-8 rounded text-lg font-bold tracking-[0.1em] uppercase transition-all shadow-[0_0_15px_rgba(128,249,255,0.4)] hover:shadow-[0_0_25px_rgba(128,249,255,0.6)] font-[Space Grotesk]">
                <span className="material-symbols-outlined mr-3 animate-[spin_3s_linear_infinite]">
                  api
                </span>
                <span className="truncate">ENGAGE_ZEN_MODE</span>
                <span className="material-symbols-outlined ml-2 opacity-0 group-hover:opacity-100 transition-opacity -mr-6 group-hover:mr-0">
                  arrow_forward
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Context Info */}
        <div className="mt-8 text-[#7DF9FF]/40 text-xs font-mono text-center">
          <p>UGTA_SYSTEM_V.4.2.1 // READY_FOR_DEPLOYMENT</p>
          {onClose && <p className="mt-1">PRESS 'ESC' TO ABORT MISSION</p>}
        </div>
      </main>
    </div>
  );
};

export default MissionBriefingScreen;
