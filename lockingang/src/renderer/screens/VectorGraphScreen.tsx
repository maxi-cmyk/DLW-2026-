import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import MissionBriefingScreen from "./MissionBriefingScreen";

const VectorGraphScreen: React.FC = () => {
  const [showBriefing, setShowBriefing] = useState(false);

  return (
    <div className="bg-[#0D0221] font-mono text-[#7DF9FF]/90 min-h-screen flex overflow-hidden">
      <Sidebar />

      <aside className="w-60 border-r border-[#7DF9FF]/20 flex flex-col z-40 bg-[#0D0221]/50 backdrop-blur-sm shrink-0">
        <div className="p-4 border-b border-[#7DF9FF]/20 flex items-center justify-between">
          <h3 className="text-xs font-bold tracking-widest uppercase text-[#7DF9FF]">
            DIRECTORY_EXPLORER
          </h3>
        </div>
        <div className="p-3 border-b border-[#7DF9FF]/20">
          <button className="w-full border border-[#7DF9FF]/30 hover:border-[#7DF9FF] bg-[#7DF9FF]/5 hover:bg-[#7DF9FF]/10 text-[10px] tracking-widest uppercase py-2 px-3 text-[#7DF9FF] transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">
              create_new_folder
            </span>
            NEW_FOLDER
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-2 scrollbar-hide">
          <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-[#7DF9FF]/10 cursor-pointer text-xs text-[#7DF9FF]/70 hover:text-[#7DF9FF] transition-colors border-l border-[#7DF9FF]/10 hover:border-[#7DF9FF]/50 ml-2">
            <span className="material-symbols-outlined text-sm">
              folder_open
            </span>
            <span>ROOT</span>
          </div>

          <div className="pl-4 border-l border-[#7DF9FF]/10 ml-2 mt-1">
            <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-[#7DF9FF]/10 cursor-pointer text-xs text-[#7DF9FF]/70 hover:text-[#7DF9FF] transition-colors border-l border-[#7DF9FF]/10 hover:border-[#7DF9FF]/50 ml-2">
              <span className="material-symbols-outlined text-sm">folder</span>
              <span>PHYSICS_101</span>
            </div>

            <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-[#7DF9FF]/10 cursor-pointer text-xs text-[#7DF9FF]/70 hover:text-[#7DF9FF] transition-colors border-l border-[#7DF9FF]/10 hover:border-[#7DF9FF]/50 ml-2">
              <span className="material-symbols-outlined text-sm">
                folder_open
              </span>
              <span>BIOLOGY_ROOT</span>
            </div>

            <div className="pl-4 border-l border-[#7DF9FF]/10 ml-2 mt-1">
              <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-[#7DF9FF]/10 cursor-pointer text-xs transition-colors ml-2 text-[#7DF9FF] bg-[#7DF9FF]/10 border-l border-[#7DF9FF]/50 font-bold">
                <span className="material-symbols-outlined text-sm">
                  folder_open
                </span>
                <span>CELL_STRUCTURE</span>
              </div>

              <div className="pl-4 border-l border-[#7DF9FF]/10 ml-2 mt-1">
                <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-[#7DF9FF]/10 cursor-pointer text-xs text-[#7DF9FF]/50 hover:text-[#7DF9FF] transition-colors border-l border-[#7DF9FF]/10 hover:border-[#7DF9FF]/50 ml-2">
                  <span className="material-symbols-outlined text-sm">
                    description
                  </span>
                  <span>mitochondria.vec</span>
                </div>
                <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-[#7DF9FF]/10 cursor-pointer text-xs text-[#7DF9FF]/50 hover:text-[#7DF9FF] transition-colors border-l border-[#7DF9FF]/10 hover:border-[#7DF9FF]/50 ml-2">
                  <span className="material-symbols-outlined text-sm">
                    description
                  </span>
                  <span>nucleus_data.json</span>
                </div>
              </div>

              <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-[#7DF9FF]/10 cursor-pointer text-xs text-[#7DF9FF]/70 hover:text-[#7DF9FF] transition-colors border-l border-[#7DF9FF]/10 hover:border-[#7DF9FF]/50 ml-2">
                <span className="material-symbols-outlined text-sm">
                  folder
                </span>
                <span>GENETICS</span>
              </div>
            </div>

            <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-[#7DF9FF]/10 cursor-pointer text-xs text-[#7DF9FF]/70 hover:text-[#7DF9FF] transition-colors border-l border-[#7DF9FF]/10 hover:border-[#7DF9FF]/50 ml-2">
              <span className="material-symbols-outlined text-sm">folder</span>
              <span>HISTORY_ARCHIVE</span>
            </div>

            <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-[#7DF9FF]/10 cursor-pointer text-xs text-[#7DF9FF]/70 hover:text-[#7DF9FF] transition-colors border-l border-[#7DF9FF]/10 hover:border-[#7DF9FF]/50 ml-2">
              <span className="material-symbols-outlined text-sm">folder</span>
              <span>CALCULUS_II</span>
            </div>
          </div>

          <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-[#7DF9FF]/10 cursor-pointer text-xs text-[#7DF9FF]/70 hover:text-[#7DF9FF] transition-colors border-l border-[#7DF9FF]/10 hover:border-[#7DF9FF]/50 ml-2 mt-2 pt-2 border-t border-[#7DF9FF]/10">
            <span className="material-symbols-outlined text-sm">cloud</span>
            <span>CLOUD_BACKUP</span>
          </div>
        </div>

        <div className="p-3 border-t border-[#7DF9FF]/20 text-[9px] tracking-widest uppercase text-[#7DF9FF]/40 text-center">
          4 DIRS / 12 FILES
        </div>
      </aside>

      <div className="flex-1 flex flex-col relative overflow-hidden">
        <header className="h-16 border-b border-[#7DF9FF]/20 flex items-center justify-between px-8 z-40 bg-[#0D0221]/80 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="border border-[#7DF9FF]/30 px-3 py-1.5 bg-[#7DF9FF]/5 text-[10px] tracking-widest uppercase">
              KNOWLEDGE_BASE{" "}
              <span className="mx-2 text-[#7DF9FF]/50">&gt;&gt;</span>{" "}
              BIOLOGY_ROOT{" "}
              <span className="mx-2 text-[#7DF9FF]/50">&gt;&gt;</span>{" "}
              <span className="text-[#7DF9FF]">CELL_STRUCTURE</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative w-80">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
                <span className="material-symbols-outlined text-[#7DF9FF]/50 text-[18px]">
                  adjust
                </span>
              </div>
              <input
                className="w-full bg-[#0D0221] border border-[#7DF9FF]/30 rounded-none px-10 py-1.5 text-[10px] tracking-widest uppercase focus:border-[#7DF9FF] focus:ring-1 focus:ring-[#7DF9FF] placeholder:text-[#7DF9FF]/30 text-[#7DF9FF] transition-all"
                placeholder="SCAN COORDINATES..."
                type="text"
              />
            </div>
          </div>
        </header>

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
            <div className="absolute top-6 left-8 z-20 space-y-1 text-[10px] tracking-widest uppercase text-[#7DF9FF]/60">
              <div className="text-[#7DF9FF]/90">NODES: 12</div>
              <div>LINKS: 34</div>
              <div>ZOOM: 100%</div>
              <div>
                ENCRYPTED_LINK: <span className="text-[#7DF9FF]">ACTIVE</span>
              </div>
            </div>

            <div className="absolute top-6 right-8 w-80 z-20">
              <div className="bg-[#0D0221]/90 border border-[#7DF9FF] p-4 shadow-[0_0_20px_rgba(125,249,255,0.15)] backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#7DF9FF]"></div>
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-1 bg-[#7DF9FF]/20 border border-[#7DF9FF]/50 rounded text-[#7DF9FF]">
                    <span className="material-symbols-outlined text-[18px]">
                      link
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[#7DF9FF] font-bold text-[10px] tracking-widest uppercase">
                      CONNECTION_ESTABLISHED
                    </h3>
                    <p className="text-[#7DF9FF]/70 text-[10px] mt-1 leading-relaxed font-mono">
                      Successfully linked node{" "}
                      <span className="text-white">[yeehaw]</span> to Knowledge
                      Graph via{" "}
                      <span className="text-white">[ME (Core Memory)]</span>.
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex justify-end">
                  <button className="text-[9px] tracking-widest uppercase text-[#7DF9FF] hover:text-white transition-colors flex items-center gap-1">
                    DISMISS{" "}
                    <span className="material-symbols-outlined text-[12px]">
                      close
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient
                    id="glowGrad"
                    x1="0%"
                    x2="100%"
                    y1="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgba(125, 249, 255, 0)" }}
                    ></stop>
                    <stop
                      offset="50%"
                      style={{ stopColor: "rgba(125, 249, 255, 1)" }}
                    ></stop>
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgba(125, 249, 255, 0)" }}
                    ></stop>
                  </linearGradient>
                  <filter id="vectorGlow">
                    <feGaussianBlur
                      result="blur"
                      stdDeviation="3"
                    ></feGaussianBlur>
                    <feMerge>
                      <feMergeNode in="blur"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                  </filter>
                </defs>
                <line
                  filter="url(#vectorGlow)"
                  stroke="url(#glowGrad)"
                  strokeWidth="2"
                  x1="50%"
                  x2="70%"
                  y1="50%"
                  y2="30%"
                ></line>
                <line
                  opacity="0.3"
                  stroke="#7DF9FF"
                  strokeDasharray="4"
                  strokeWidth="1"
                  x1="50%"
                  x2="30%"
                  y1="50%"
                  y2="40%"
                ></line>
                <line
                  opacity="0.3"
                  stroke="#7DF9FF"
                  strokeDasharray="4"
                  strokeWidth="1"
                  x1="70%"
                  x2="80%"
                  y1="30%"
                  y2="50%"
                ></line>
              </svg>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="relative">
                  <div className="size-14 rounded-full bg-[#0D0221] border-2 border-[#7DF9FF] shadow-[0_0_30px_rgba(125,249,255,0.4)] flex items-center justify-center z-10">
                    <span className="material-symbols-outlined text-[#7DF9FF] text-2xl">
                      check_circle
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-full border border-[#7DF9FF] animate-ping opacity-50"></div>
                </div>
                <div className="mt-4 bg-[#0D0221]/90 px-3 py-1 border border-[#7DF9FF]/50 text-[#7DF9FF] text-[10px] tracking-widest uppercase shadow-lg">
                  [yeehaw]
                </div>
              </div>

              <div className="absolute top-[30%] left-[70%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center opacity-80">
                <div className="size-10 rounded-full bg-[#0D0221] border border-[#7DF9FF]/40 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#7DF9FF]/60 text-xl">
                    neurology
                  </span>
                </div>
                <div className="mt-2 text-[#7DF9FF]/60 text-[9px] tracking-widest uppercase">
                  ME (CORE MEMORY)
                </div>
              </div>

              <div className="absolute top-[42%] left-[58%] -translate-y-12 z-20 animate-bounce">
                <div
                  className="text-white text-2xl tracking-widest uppercase"
                  style={{ textShadow: "0 0 10px rgba(125, 249, 255, 0.6)" }}
                >
                  +100 XP
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 pb-8 flex items-center justify-between z-30">
            <div className="flex items-center gap-4">
              <button className="border border-[#7DF9FF]/50 bg-[#7DF9FF]/5 px-6 py-2 flex items-center gap-2 hover:bg-[#7DF9FF]/20 transition-all">
                <span className="material-symbols-outlined text-[18px]">
                  magic_button
                </span>
                <span className="tracking-widest uppercase text-xs">
                  AUTO_SORT
                </span>
              </button>
              <button className="border border-[#7DF9FF] bg-[#7DF9FF]/10 px-6 py-2 flex items-center gap-2 hover:bg-[#7DF9FF]/30 transition-all">
                <span className="material-symbols-outlined text-[18px]">
                  add_circle
                </span>
                <span className="tracking-widest uppercase text-xs">
                  ADD_EDGE
                </span>
              </button>
              <button className="border border-[#FF3131]/50 bg-[#FF3131]/5 px-6 py-2 flex items-center gap-2 text-[#FF3131] hover:bg-[#FF3131]/20 transition-all">
                <span className="material-symbols-outlined text-[18px]">
                  delete
                </span>
                <span className="tracking-widest uppercase text-xs text-[#FF3131]">
                  DEL_EDGE
                </span>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button className="border border-[#7DF9FF]/50 bg-[#7DF9FF]/5 px-6 py-2 flex items-center gap-2 hover:bg-[#7DF9FF]/20 transition-all">
                <span className="material-symbols-outlined text-[18px]">
                  filter_center_focus
                </span>
                <span className="tracking-widest uppercase text-xs">
                  RECENTER
                </span>
              </button>
              <div className="flex flex-col border border-[#7DF9FF]/30 divide-y divide-[#7DF9FF]/30">
                <button className="p-1 hover:bg-[#7DF9FF]/10 text-[#7DF9FF]/70 hover:text-[#7DF9FF] transition-colors">
                  <span className="material-symbols-outlined text-[20px]">
                    add
                  </span>
                </button>
                <button className="p-1 hover:bg-[#7DF9FF]/10 text-[#7DF9FF]/70 hover:text-[#7DF9FF] transition-colors">
                  <span className="material-symbols-outlined text-[20px]">
                    remove
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[9px] tracking-widest uppercase opacity-30 flex gap-8 whitespace-nowrap text-[#7DF9FF]">
            <span>UGTAFOCUSMAN_V2.0.4.BUILD</span>
            <span>MEMORY_USAGE: 42% // CPU: STABLE</span>
          </div>
        </main>
      </div>

      {showBriefing && (
        <div className="absolute inset-0 z-50 bg-[#0f2223]/80 backdrop-blur-sm overflow-y-auto">
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
