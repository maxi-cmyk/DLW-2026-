import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import MissionBriefingScreen from "./MissionBriefingScreen";

const VectorGraphScreen = () => {
  const [showBriefing, setShowBriefing] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="h-screen flex overflow-hidden bg-vector-bg text-vector-white font-terminal relative">
      <div className="scanline"></div>

      <Sidebar />

      {/* Directory Explorer Panel */}
      <aside className="w-60 border-r border-vector-blue/20 flex flex-col z-40 bg-vector-bg/50 backdrop-blur-sm shrink-0">
        <div className="h-14 border-b border-vector-blue/20 flex items-center px-4">
          <h3 className="text-[9px] font-bold tracking-widest uppercase text-vector-blue">
            DIRECTORY_EXPLORER
          </h3>
        </div>
        <div className="p-3 border-b border-vector-blue/20">
          <button className="w-full border border-vector-blue/30 hover:border-vector-blue bg-vector-blue/5 hover:bg-vector-blue/10 text-[9px] tracking-widest uppercase py-2 px-3 text-vector-blue transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">
              create_new_folder
            </span>
            NEW_FOLDER
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-vector-blue/10 cursor-pointer text-[9px] text-vector-white/70 hover:text-vector-blue transition-colors border-l border-vector-blue/10 hover:border-vector-blue/50 ml-2">
            <span className="material-symbols-outlined text-sm">folder_open</span>
            <span>ROOT</span>
          </div>

          <div className="pl-4 border-l border-vector-blue/10 ml-2 mt-1">
            <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-vector-blue/10 cursor-pointer text-[9px] text-vector-white/70 hover:text-vector-blue transition-colors border-l border-vector-blue/10 hover:border-vector-blue/50 ml-2">
              <span className="material-symbols-outlined text-sm">folder</span>
              <span>PHYSICS_101</span>
            </div>

            <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-vector-blue/10 cursor-pointer text-[9px] text-vector-white/70 hover:text-vector-blue transition-colors border-l border-vector-blue/10 hover:border-vector-blue/50 ml-2">
              <span className="material-symbols-outlined text-sm">folder_open</span>
              <span>BIOLOGY_ROOT</span>
            </div>

            <div className="pl-4 border-l border-vector-blue/10 ml-2 mt-1">
              <div className="flex items-center gap-2 py-1.5 px-2 cursor-pointer text-[9px] ml-2 text-vector-blue bg-vector-blue/10 border-l border-vector-blue/50 font-bold">
                <span className="material-symbols-outlined text-sm">folder_open</span>
                <span>CELL_STRUCTURE</span>
              </div>

              <div className="pl-4 border-l border-vector-blue/10 ml-2 mt-1">
                <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-vector-blue/10 cursor-pointer text-[9px] text-vector-white/50 hover:text-vector-blue transition-colors border-l border-vector-blue/10 hover:border-vector-blue/50 ml-2">
                  <span className="material-symbols-outlined text-sm">description</span>
                  <span>mitochondria.vec</span>
                </div>
                <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-vector-blue/10 cursor-pointer text-[9px] text-vector-white/50 hover:text-vector-blue transition-colors border-l border-vector-blue/10 hover:border-vector-blue/50 ml-2">
                  <span className="material-symbols-outlined text-sm">description</span>
                  <span>nucleus_data.json</span>
                </div>
              </div>

              <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-vector-blue/10 cursor-pointer text-[9px] text-vector-white/70 hover:text-vector-blue transition-colors border-l border-vector-blue/10 hover:border-vector-blue/50 ml-2">
                <span className="material-symbols-outlined text-sm">folder</span>
                <span>GENETICS</span>
              </div>
            </div>

            <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-vector-blue/10 cursor-pointer text-[9px] text-vector-white/70 hover:text-vector-blue transition-colors border-l border-vector-blue/10 hover:border-vector-blue/50 ml-2">
              <span className="material-symbols-outlined text-sm">folder</span>
              <span>HISTORY_ARCHIVE</span>
            </div>

            <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-vector-blue/10 cursor-pointer text-[9px] text-vector-white/70 hover:text-vector-blue transition-colors border-l border-vector-blue/10 hover:border-vector-blue/50 ml-2">
              <span className="material-symbols-outlined text-sm">folder</span>
              <span>CALCULUS_II</span>
            </div>
          </div>

          <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-vector-blue/10 cursor-pointer text-[9px] text-vector-white/70 hover:text-vector-blue transition-colors border-l border-vector-blue/10 hover:border-vector-blue/50 ml-2 mt-2 pt-2 border-t border-vector-blue/10">
            <span className="material-symbols-outlined text-sm">cloud</span>
            <span>CLOUD_BACKUP</span>
          </div>
        </div>

        <div className="p-3 border-t border-vector-blue/20 text-[8px] tracking-widest uppercase text-vector-blue/40 text-center">
          4 DIRS / 12 FILES
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        <header className="h-14 border-b border-vector-blue flex items-center justify-between px-6 backdrop-blur-md bg-vector-bg/40 z-10">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-vector-white/60 font-mono tracking-wider">
              KNOWLEDGE_BASE
            </span>
            <span className="text-[10px] text-vector-blue font-bold">&gt;&gt;</span>
            <span className="text-[10px] text-vector-white/60 font-mono tracking-wider">BIOLOGY_ROOT</span>
            <span className="text-[10px] text-vector-blue font-bold">&gt;&gt;</span>
            <span className="text-[10px] text-vector-blue font-mono tracking-wider terminal-text">CELL_STRUCTURE</span>
          </div>
          <div className="relative w-72">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
              <span className="material-symbols-outlined text-vector-blue/50 text-[18px]">adjust</span>
            </div>
            <input
              className="w-full bg-vector-bg border border-vector-blue/30 px-10 py-1.5 text-[9px] tracking-widest uppercase focus:border-vector-blue focus:ring-1 focus:ring-vector-blue placeholder:text-vector-blue/30 text-vector-blue transition-all font-mono"
              placeholder="SCAN COORDINATES..."
              type="text"
            />
          </div>
        </header>

        {/* Grid background */}
        <div
          className="absolute inset-0 z-0 opacity-40 pointer-events-none"
          style={{
            backgroundSize: "32px 32px",
            backgroundImage:
              "linear-gradient(to right, rgba(125, 249, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(125, 249, 255, 0.05) 1px, transparent 1px)",
          }}
        ></div>

        <main className="flex-1 relative flex flex-col overflow-hidden">
          <div className="flex-1 relative">
            {/* Stats */}
            <div className="absolute top-6 left-8 z-20 space-y-1 text-[9px] tracking-widest uppercase text-vector-blue/60">
              <div className="text-vector-blue/90">NODES: 12</div>
              <div>LINKS: 34</div>
              <div>ZOOM: 100%</div>
              <div>
                ENCRYPTED_LINK: <span className="text-vector-blue">ACTIVE</span>
              </div>
            </div>

            {/* Connection notification */}
            <div className="absolute top-6 right-8 w-80 z-20">
              <div className="bg-vector-bg/90 border border-vector-blue p-4 shadow-card-glow backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-vector-blue"></div>
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-1 bg-vector-blue/20 border border-vector-blue/50 text-vector-blue">
                    <span className="material-symbols-outlined text-[18px]">link</span>
                  </div>
                  <div>
                    <h3 className="text-vector-blue font-bold text-[9px] tracking-widest uppercase">
                      CONNECTION_ESTABLISHED
                    </h3>
                    <p className="text-vector-white/70 text-[9px] mt-1 leading-relaxed font-mono">
                      Successfully linked node{" "}
                      <span className="text-vector-white">[yeehaw]</span> to Knowledge
                      Graph via{" "}
                      <span className="text-vector-white">[ME (Core Memory)]</span>.
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex justify-end">
                  <button className="text-[9px] tracking-widest uppercase text-vector-blue hover:text-vector-white transition-colors flex items-center gap-1">
                    DISMISS{" "}
                    <span className="material-symbols-outlined text-[12px]">close</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Graph SVG + nodes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="glowGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "rgba(125, 249, 255, 0)" }}></stop>
                    <stop offset="50%" style={{ stopColor: "rgba(125, 249, 255, 1)" }}></stop>
                    <stop offset="100%" style={{ stopColor: "rgba(125, 249, 255, 0)" }}></stop>
                  </linearGradient>
                  <filter id="vectorGlow">
                    <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
                    <feMerge>
                      <feMergeNode in="blur"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                  </filter>
                </defs>
                <line filter="url(#vectorGlow)" stroke="url(#glowGrad)" strokeWidth="2" x1="50%" x2="70%" y1="50%" y2="30%"></line>
                <line opacity="0.3" stroke="#7DF9FF" strokeDasharray="4" strokeWidth="1" x1="50%" x2="30%" y1="50%" y2="40%"></line>
                <line opacity="0.3" stroke="#7DF9FF" strokeDasharray="4" strokeWidth="1" x1="70%" x2="80%" y1="30%" y2="50%"></line>
              </svg>

              {/* Primary node — click to quiz */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center cursor-pointer hover:scale-110 transition-transform"
                onClick={() => navigate("/quiz")}
              >
                <div className="relative">
                  <div className="size-14 bg-vector-bg border-2 border-vector-blue shadow-card-glow flex items-center justify-center z-10">
                    <span className="material-symbols-outlined text-vector-blue text-2xl">check_circle</span>
                  </div>
                  <div className="absolute inset-0 border border-vector-blue animate-ping opacity-50"></div>
                </div>
                <div className="mt-4 bg-vector-bg/90 px-3 py-1 border border-vector-blue/50 text-vector-blue text-[9px] tracking-widest uppercase shadow-card-glow">
                  [yeehaw]
                </div>
              </div>

              {/* Secondary node */}
              <div
                className="absolute top-[30%] left-[70%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center opacity-80 cursor-pointer hover:opacity-100 hover:scale-110 transition-transform"
                onClick={() => navigate("/quiz")}
              >
                <div className="size-10 bg-vector-bg border border-vector-blue/40 flex items-center justify-center">
                  <span className="material-symbols-outlined text-vector-blue/60 text-xl">neurology</span>
                </div>
                <div className="mt-2 text-vector-blue/60 text-[8px] tracking-widest uppercase">
                  ME (CORE MEMORY)
                </div>
              </div>

              {/* XP float */}
              <div
                className="absolute top-[42%] left-[58%] -translate-y-12 z-20 animate-bounce cursor-pointer"
                onClick={() => navigate("/quiz")}
              >
                <div
                  className="text-vector-white text-2xl tracking-widest uppercase font-mono"
                  style={{ textShadow: "0 0 10px rgba(125, 249, 255, 0.6)" }}
                >
                  +100 XP
                </div>
              </div>
            </div>
          </div>

          {/* Bottom toolbar */}
          <div className="px-8 pb-8 flex items-center justify-between z-30">
            <div className="flex items-center gap-4">
              <button className="border border-vector-blue/50 bg-vector-blue/5 px-6 py-2 flex items-center gap-2 hover:bg-vector-blue/20 transition-all text-vector-white">
                <span className="material-symbols-outlined text-[18px]">magic_button</span>
                <span className="tracking-widest uppercase text-[9px]">AUTO_SORT</span>
              </button>
              <button className="border border-vector-blue bg-vector-blue/10 px-6 py-2 flex items-center gap-2 hover:bg-vector-blue/30 transition-all text-vector-white">
                <span className="material-symbols-outlined text-[18px]">add_circle</span>
                <span className="tracking-widest uppercase text-[9px]">ADD_EDGE</span>
              </button>
              <button className="border border-red-500/50 bg-red-500/5 px-6 py-2 flex items-center gap-2 text-red-400 hover:bg-red-500/20 transition-all">
                <span className="material-symbols-outlined text-[18px]">delete</span>
                <span className="tracking-widest uppercase text-[9px]">DEL_EDGE</span>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button className="border border-vector-blue/50 bg-vector-blue/5 px-6 py-2 flex items-center gap-2 hover:bg-vector-blue/20 transition-all text-vector-white">
                <span className="material-symbols-outlined text-[18px]">filter_center_focus</span>
                <span className="tracking-widest uppercase text-[9px]">RECENTER</span>
              </button>
              <div className="flex flex-col border border-vector-blue/30 divide-y divide-vector-blue/30">
                <button className="p-1 hover:bg-vector-blue/10 text-vector-blue/70 hover:text-vector-blue transition-colors">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                </button>
                <button className="p-1 hover:bg-vector-blue/10 text-vector-blue/70 hover:text-vector-blue transition-colors">
                  <span className="material-symbols-outlined text-[20px]">remove</span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer status */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[8px] tracking-widest uppercase opacity-30 flex gap-8 whitespace-nowrap text-vector-blue">
            <span>UGTAFOCUSMAN_V2.0.4.BUILD</span>
            <span>MEMORY_USAGE: 42% // CPU: STABLE</span>
          </div>
        </main>
      </div>

      {showBriefing && (
        <div className="absolute inset-0 z-50 bg-vector-bg/80 backdrop-blur-sm overflow-y-auto">
          <MissionBriefingScreen
            onClose={() => setShowBriefing(false)}
            onEngage={() => setShowBriefing(false)}
          />
        </div>
      )}
    </div>
  );
};

export default VectorGraphScreen;
