import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const ChatbotScreen = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-vector-bg text-vector-white font-terminal relative">
      <div className="scanline"></div>

      <Sidebar />

      <main className="flex-1 flex flex-col relative h-full">
        {/* Header */}
        <header className="h-14 border-b border-vector-blue flex items-center justify-between px-6 backdrop-blur-md bg-vector-bg/40 z-10 w-full shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-vector-white/60 font-mono tracking-wider">CHATBOT</span>
            <span className="text-[10px] text-vector-blue font-bold">&gt;&gt;</span>
            <span className="text-[10px] text-vector-blue font-mono tracking-wider terminal-text">NEURAL_LIAISON_V1.0</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 border border-vector-blue/30 bg-vector-bg text-[8px] text-vector-blue tracking-widest">
              SYSTEM_ONLINE
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 bg-green-500 animate-pulse"></div>
              <span className="text-[8px] text-vector-blue tracking-widest">LIVE</span>
            </div>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 relative z-0 custom-scrollbar">
          {/* Date Separator */}
          <div className="flex items-center justify-center my-4">
            <div className="h-px bg-vector-blue/20 w-16"></div>
            <span className="mx-4 text-[8px] font-mono text-vector-white/40 tracking-widest uppercase">
              TODAY, 10:42 AM
            </span>
            <div className="h-px bg-vector-blue/20 w-16"></div>
          </div>

          {/* AI Message 1 */}
          <div className="flex gap-4 max-w-3xl">
            <div className="shrink-0">
              <div className="size-10 border border-vector-blue bg-vector-bg flex items-center justify-center">
                <span className="material-symbols-outlined text-vector-blue text-xl">smart_toy</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-vector-blue font-bold text-[9px] tracking-widest uppercase">SYSTEM_AI</span>
                <span className="text-[8px] text-vector-white/40 font-mono">10:42:05</span>
              </div>
              <div className="border border-vector-blue bg-vector-blue/5 p-4 text-vector-blue text-xs font-mono leading-relaxed shadow-card-glow relative">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-vector-blue"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-vector-blue"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-vector-blue"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-vector-blue"></div>
                <p>
                  INITIALIZING... SYSTEM READY. <br />
                  <br />
                  HOW CAN I ASSIST WITH YOUR STUDY PARAMETERS TODAY? I CAN
                  PROCESS TEXTUAL DATA OR ANALYZE VISUAL BLUEPRINTS.
                </p>
              </div>
            </div>
          </div>

          {/* User Message 1 */}
          <div className="flex gap-4 max-w-3xl self-end flex-row-reverse">
            <div className="shrink-0">
              <div className="size-10 border border-vector-white/40 bg-vector-bg flex items-center justify-center">
                <span className="material-symbols-outlined text-vector-white text-xl">person</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-end">
              <div className="flex items-center gap-2">
                <span className="text-[8px] text-vector-white/40 font-mono">10:43:12</span>
                <span className="text-vector-white font-bold text-[9px] tracking-widest uppercase">STUDENT_01</span>
              </div>
              <div className="border border-vector-white/30 bg-vector-white/5 p-4 text-vector-white text-xs font-mono leading-relaxed relative">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-vector-white/30"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-vector-white/30"></div>
                <p>I need help breaking down this history assignment. It's huge.</p>
              </div>
            </div>
          </div>

          {/* AI Message 2 */}
          <div className="flex gap-4 max-w-3xl">
            <div className="shrink-0">
              <div className="size-10 border border-vector-blue bg-vector-bg flex items-center justify-center">
                <span className="material-symbols-outlined text-vector-blue text-xl">smart_toy</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-vector-blue font-bold text-[9px] tracking-widest uppercase">SYSTEM_AI</span>
                <span className="text-[8px] text-vector-white/40 font-mono">10:43:15</span>
              </div>
              <div className="border border-vector-blue bg-vector-blue/5 p-4 text-vector-blue text-xs font-mono leading-relaxed shadow-card-glow relative">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-vector-blue"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-vector-blue"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-vector-blue"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-vector-blue"></div>
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
              <div className="size-10 border border-vector-white/40 bg-vector-bg flex items-center justify-center">
                <span className="material-symbols-outlined text-vector-white text-xl">person</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-end">
              <div className="flex items-center gap-2">
                <span className="text-[8px] text-vector-white/40 font-mono">10:44:30</span>
                <span className="text-vector-white font-bold text-[9px] tracking-widest uppercase">STUDENT_01</span>
              </div>
              <div className="border border-vector-white/30 bg-vector-white/5 p-4 text-vector-white text-xs font-mono leading-relaxed relative">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-vector-white/30"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-vector-white/30"></div>
                <div className="flex items-center gap-3 p-2 mb-2 border border-vector-blue/20 bg-vector-bg/80">
                  <span className="material-symbols-outlined text-red-400 text-lg">picture_as_pdf</span>
                  <span className="text-[9px] truncate max-w-[150px]">History_Assignment_Final.pdf</span>
                  <span className="text-[8px] text-vector-white/40 ml-auto">2.4MB</span>
                </div>
                <p>Here is the file. It's due in 3 days.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-6 bg-vector-bg border-t border-vector-blue/30 relative z-20 shrink-0">
          <div className="max-w-4xl mx-auto flex flex-col gap-2">
            {/* Attachment indicator */}
            <div className="flex items-center gap-2 px-3 py-1 self-start border border-vector-blue/40 bg-vector-blue/10 animate-pulse">
              <span className="material-symbols-outlined text-vector-blue text-sm">attach_file</span>
              <span className="text-[9px] text-vector-blue font-mono uppercase tracking-widest">
                Blueprint_Attached: pending_upload...
              </span>
            </div>

            <div className="flex items-stretch gap-0 relative">
              {/* Attach button */}
              <button
                aria-label="Attach Blueprint"
                className="flex items-center justify-center px-4 bg-vector-bg/60 border-l border-t border-b border-vector-blue/30 text-vector-white/50 hover:text-vector-blue hover:border-vector-blue transition-all group"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">add</span>
                  <span className="text-[8px] font-mono tracking-widest hidden md:block">ATTACH</span>
                </div>
              </button>

              {/* Textarea */}
              <div className="flex-1 bg-transparent relative">
                <textarea
                  className="w-full bg-vector-bg border border-vector-blue/30 text-vector-white font-mono placeholder:text-vector-white/30 focus:border-vector-blue focus:ring-1 focus:ring-vector-blue focus:outline-none p-4 min-h-[60px] resize-none text-xs"
                  placeholder="INITIALIZE_QUERY..."
                ></textarea>
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[10px] border-t-vector-blue border-l-[10px] border-l-transparent pointer-events-none"></div>
              </div>

              {/* Send button */}
              <button className="px-6 bg-vector-blue text-vector-bg font-bold font-mono tracking-widest hover:brightness-110 transition-all flex items-center gap-2 border-r border-t border-b border-vector-blue text-xs">
                <span className="hidden md:inline">EXECUTE</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

            <div className="flex justify-between items-center text-[8px] text-vector-white/30 font-mono px-1 tracking-widest">
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
