import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const ChatbotScreen: React.FC = () => {
  return (
    <div className="bg-[#f5f8f8] dark:bg-[#0D0221] text-slate-900 dark:text-slate-100 font-mono overflow-hidden h-screen flex">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative h-full bg-[#0D0221]">
        {/* CRT Scanline Effect Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15 z-50"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2))",
            backgroundSize: "100% 4px",
          }}
        ></div>

        {/* Header */}
        <header className="h-20 border-b border-slate-700/50 flex flex-col justify-center px-6 shrink-0 bg-[#0D0221]/90 backdrop-blur-sm z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-1">
            <span className="hover:text-[#7DF9FF] cursor-pointer transition-colors">
              HOME
            </span>
            <span>/</span>
            <span className="text-[#7DF9FF]">NEURAL_LIAISON_V1.0</span>
          </div>
          <div className="flex justify-between items-end">
            <h1
              className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase font-['Space_Grotesk']"
              style={{ textShadow: "0 0 10px rgba(125,249,255,0.3)" }}
            >
              NEURAL_LIAISON_V1.0
            </h1>
            <div className="hidden md:flex items-center gap-2 text-[10px] text-[#7DF9FF] border border-[#7DF9FF]/30 px-2 py-1 bg-[#7DF9FF]/5">
              <span className="w-2 h-2 bg-[#7DF9FF] rounded-full animate-pulse"></span>
              SYSTEM_ONLINE
            </div>
          </div>
        </header>

        {/* Chat Area */}
        <style>
          {`
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
              height: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #0D0221; 
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #2a2a40; 
              border: 1px solid #7DF9FF;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #7DF9FF;
            }
          `}
        </style>
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 flex flex-col gap-6 relative z-0">
          {/* Date Separator */}
          <div className="flex items-center justify-center my-4">
            <div className="h-px bg-slate-700 w-16"></div>
            <span className="mx-4 text-xs font-mono text-slate-500">
              TODAY, 10:42 AM
            </span>
            <div className="h-px bg-slate-700 w-16"></div>
          </div>

          {/* System Message */}
          <div className="flex gap-4 max-w-3xl">
            <div className="shrink-0">
              <div className="size-10 border border-[#7DF9FF] bg-slate-900 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#7DF9FF] text-xl">
                  smart_toy
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[#7DF9FF] font-bold text-sm tracking-wider">
                  SYSTEM_AI
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  10:42:05
                </span>
              </div>
              <div className="border border-[#7DF9FF] bg-[#7DF9FF]/5 p-4 text-[#7DF9FF] text-sm md:text-base font-mono leading-relaxed shadow-[0_0_15px_rgba(125,249,255,0.05)] relative group">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#7DF9FF]"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#7DF9FF]"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#7DF9FF]"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#7DF9FF]"></div>
                <p className="typing-effect">
                  INITIALIZING... SYSTEM READY. <br />
                  <br />
                  HOW CAN I ASSIST WITH YOUR STUDY PARAMETERS TODAY? I CAN
                  PROCESS TEXTUAL DATA OR ANALYZE VISUAL BLUEPRINTS.
                </p>
              </div>
            </div>
          </div>

          {/* User Message */}
          <div className="flex gap-4 max-w-3xl self-end flex-row-reverse">
            <div className="shrink-0">
              <div className="size-10 border border-white bg-slate-800 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl">
                  person
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1 items-end">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-500 font-mono">
                  10:43:12
                </span>
                <span className="text-white font-bold text-sm tracking-wider">
                  STUDENT_01
                </span>
              </div>
              <div className="border border-white bg-slate-800/50 p-4 text-white text-sm md:text-base font-mono leading-relaxed shadow-lg relative">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white"></div>

                <p>
                  I need help breaking down this history assignment. It's huge.
                </p>
              </div>
            </div>
          </div>

          {/* System Message */}
          <div className="flex gap-4 max-w-3xl">
            <div className="shrink-0">
              <div className="size-10 border border-[#7DF9FF] bg-slate-900 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#7DF9FF] text-xl">
                  smart_toy
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[#7DF9FF] font-bold text-sm tracking-wider">
                  SYSTEM_AI
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  10:43:15
                </span>
              </div>
              <div className="border border-[#7DF9FF] bg-[#7DF9FF]/5 p-4 text-[#7DF9FF] text-sm md:text-base font-mono leading-relaxed shadow-[0_0_15px_rgba(125,249,255,0.05)] relative">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#7DF9FF]"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#7DF9FF]"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#7DF9FF]"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#7DF9FF]"></div>

                <p>
                  ACKNOWLEDGED. LARGE TASK DETECTED. <br />
                  <br />
                  STRATEGY: DECOMPOSITION. PLEASE UPLOAD THE ASSIGNMENT PDF OR
                  PASTE THE REQUIREMENTS. I WILL GENERATE A STEP-BY-STEP
                  EXECUTION PLAN.
                </p>
              </div>
            </div>
          </div>

          {/* User Message with attachment */}
          <div className="flex gap-4 max-w-3xl self-end flex-row-reverse">
            <div className="shrink-0">
              <div className="size-10 border border-white bg-slate-800 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl">
                  person
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1 items-end">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-500 font-mono">
                  10:44:30
                </span>
                <span className="text-white font-bold text-sm tracking-wider">
                  STUDENT_01
                </span>
              </div>
              <div className="border border-white bg-slate-800/50 p-4 text-white text-sm md:text-base font-mono leading-relaxed shadow-lg relative">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white"></div>

                <div className="flex items-center gap-3 p-2 mb-2 border border-slate-600 bg-slate-900/80">
                  <span className="material-symbols-outlined text-red-400 text-lg">
                    picture_as_pdf
                  </span>
                  <span className="text-xs truncate max-w-[150px]">
                    History_Assignment_Final.pdf
                  </span>
                  <span className="text-[10px] text-slate-500 ml-auto">
                    2.4MB
                  </span>
                </div>
                <p>Here is the file. It's due in 3 days.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-6 bg-[#0D0221] border-t border-slate-700/50 relative z-20">
          <div className="max-w-4xl mx-auto flex flex-col gap-2">
            {/* Active Attachment Indicator */}
            <div className="flex items-center gap-2 px-3 py-1 self-start border border-[#7DF9FF]/40 bg-[#7DF9FF]/10 rounded-t-sm animate-pulse">
              <span className="material-symbols-outlined text-[#7DF9FF] text-sm">
                attach_file
              </span>
              <span className="text-[10px] text-[#7DF9FF] font-mono uppercase">
                Blueprint_Attached: pending_upload...
              </span>
            </div>

            <div className="flex items-stretch gap-0 relative">
              {/* File Upload Button */}
              <button
                aria-label="Attach Blueprint"
                className="flex items-center justify-center px-4 bg-slate-800 border-l border-t border-b border-slate-600 text-slate-400 hover:text-white hover:bg-slate-700 hover:border-slate-500 transition-all group"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">
                    add
                  </span>
                  <span className="text-[8px] font-mono tracking-widest hidden md:block">
                    ATTACH
                  </span>
                </div>
              </button>

              {/* Text Input */}
              <div className="flex-1 bg-transparent relative">
                <textarea
                  className="w-full bg-[#151e29] border border-slate-600 text-white font-mono placeholder-slate-500 focus:border-[#7DF9FF] focus:ring-1 focus:ring-[#7DF9FF] focus:outline-none p-4 min-h-[60px] resize-none"
                  placeholder="INITIALIZE_QUERY..."
                ></textarea>

                {/* Corner Accent for Input */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[10px] border-t-[#7DF9FF] border-l-[10px] border-l-transparent pointer-events-none"></div>
              </div>

              {/* Send Button */}
              <button className="px-6 bg-[#7DF9FF] text-[#0D0221] font-bold font-mono tracking-wider hover:bg-[#5cefff] transition-colors flex items-center gap-2 border-r border-t border-b border-[#7DF9FF]">
                <span className="hidden md:inline">EXECUTE</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

            <div className="flex justify-between items-center text-[10px] text-slate-600 font-mono px-1">
              <span>SUPPORTED FORMATS: PDF, MD, IMG</span>
              <span>PRESS ENTER TO SEND</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatbotScreen;
