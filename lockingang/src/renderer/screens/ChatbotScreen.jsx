import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

// Preset AI response logic
const getBotResponse = (userText) => {
  const t = userText.toLowerCase().trim();
  if (t.includes("buy milk") || t.includes("milk")) {
    return {
      text: "TASK_PARSED: \"Buy milk\"\n\nI've added this to your task list and auto-scheduled it for tomorrow between your 10am and 12pm lectures — you have a 45-minute window.\n\n> TODOIST_SYNC: ✓ Task added\n> CALENDAR_BLOCK: Tomorrow 11:00–11:15\n> PRIORITY: LOW",
      createdTask: { id: `task_${Date.now()}`, text: "Buy milk", scheduled: "Tomorrow 11:00–11:15", priority: "LOW" },
    };
  }
  if (t.includes("common dist") || t.includes("distribution") || t.includes("normal") || t.includes("binomial")) {
    return {
      text: "CONCEPT_ANALYSIS: Common Distributions\n\nYour mastery score for this node is currently 0.20 — CRITICAL.\n\nI recommend:\n1. Start with Expectation & Variance review (your score: 0.82)\n2. Work through Normal Distribution → Z-scores\n3. Practice Binomial Distribution problems\n4. Quiz session scheduled for tonight\n\n> BRIDGE NODE: Exp & Var → Common Dist is active\n> REVIEW_BLOCK: Tonight 11pm added to calendar",
      createdTask: null,
    };
  }
  if (t.includes("quiz") || t.includes("test") || t.includes("review")) {
    return {
      text: "SCHEDULING REVIEW SESSION...\n\nBased on your forgetting curve analysis:\n\n> COMMON_DIST: URGENT — review NOW\n> NORMAL_DIST: due in 5 hours\n> CENTRAL_LIMIT: due in 2 days\n\nI've scheduled a 30-minute quiz block for tonight at 11pm.\n\n> CALENDAR_EVENT: Added ✓\n> TODOIST_TASK: Added ✓",
      createdTask: { id: `task_${Date.now()}`, text: "Quiz: Common Distributions", scheduled: "Tonight 11:00pm", priority: "HIGH" },
    };
  }
  if (t.includes("help") || t.includes("what") || t.includes("how")) {
    return {
      text: "SYSTEM READY. I can help you with:\n\n1. TASK CAPTURE — dump any thought and I'll schedule it\n2. STUDY ANALYSIS — ask about any concept or node\n3. SCHEDULING — I'll find gaps in your calendar\n4. FORGETTING FORECAST — ask what's about to decay\n\nWhat would you like to do?",
      createdTask: null,
    };
  }
  return {
    text: `ACKNOWLEDGED: "${userText}"\n\nProcessing your request... I've logged this and will handle it when context permits.\n\nIf this is a task, type it again with more detail and I'll schedule it automatically.`,
    createdTask: null,
  };
};

const INITIAL_MESSAGES = [
  {
    id: "sys_init",
    from: "bot",
    time: "11:00:01",
    text: "SYSTEM READY — NEURAL_LIAISON_V1.0\n\nHello Marty. I'm monitoring your knowledge state.\n\nCurrent alerts:\n> COMMON_DIST: mastery 0.20 — CRITICAL\n> NORMAL_DIST: mastery 0.15 — CRITICAL\n> 2 nodes due for review TODAY\n\nDump any stray thoughts here. I'll handle scheduling so you can stay focused.",
  },
];

const ChatbotScreen = () => {
  const location = useLocation();
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);
  const inputRef = useRef(null);

  const now = () => {
    const d = new Date();
    return `${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}:${String(d.getSeconds()).padStart(2,"0")}`;
  };

  // Handle brain dump arriving from ZenMode
  useEffect(() => {
    const dump = location.state?.brainDump;
    if (!dump) return;
    // Auto-send it after a brief delay for drama
    setTimeout(() => sendMessage(dump), 400);
    // Clear location state to avoid re-triggering on back navigation
    window.history.replaceState({}, "");
  }, []); // eslint-disable-line

  // Auto-scroll
  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    const trimmed = (text || input).trim();
    if (!trimmed) return;
    setInput("");

    const userMsg = { id: `u_${Date.now()}`, from: "user", time: now(), text: trimmed };
    setMessages((prev) => [...prev, userMsg]);

    setIsTyping(true);
    setTimeout(() => {
      const { text: botText, createdTask } = getBotResponse(trimmed);
      const botMsg = { id: `b_${Date.now()}`, from: "bot", time: now(), text: botText };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      if (createdTask) {
        setTasks((prev) => [...prev, createdTask]);
      }
    }, 900 + Math.random() * 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="h-screen flex overflow-hidden bg-vector-bg text-vector-white font-terminal relative">
      <div className="scanline" />
      <Sidebar />

      <main className="flex-1 flex overflow-hidden relative">
        {/* Chat column */}
        <div className="flex-1 flex flex-col relative h-full">
          <header className="h-14 border-b border-vector-blue flex items-center justify-between px-6 backdrop-blur-md bg-vector-bg/40 z-10 shrink-0">
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
                <div className="h-2 w-2 bg-green-500 animate-pulse" />
                <span className="text-[8px] text-vector-blue tracking-widest">LIVE</span>
              </div>
            </div>
          </header>

          {/* Chat area */}
          <div ref={chatRef} className="flex-1 overflow-y-auto p-6 flex flex-col gap-5 custom-scrollbar">
            <div className="flex items-center justify-center my-2">
              <div className="h-px bg-vector-blue/20 w-16" />
              <span className="mx-4 text-[8px] font-mono text-vector-white/40 tracking-widest uppercase">TODAY — STUDY SESSION</span>
              <div className="h-px bg-vector-blue/20 w-16" />
            </div>

            {messages.map((msg) => (
              msg.from === "bot" ? (
                <div key={msg.id} className="flex gap-4 max-w-3xl">
                  <div className="shrink-0">
                    <div className="size-10 border border-vector-blue bg-vector-bg flex items-center justify-center">
                      <span className="material-symbols-outlined text-vector-blue text-xl">smart_toy</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-vector-blue font-bold text-[9px] tracking-widest uppercase">NEURAL_LIAISON</span>
                      <span className="text-[8px] text-vector-white/40 font-mono">{msg.time}</span>
                    </div>
                    <div className="border border-vector-blue bg-vector-blue/5 p-4 text-vector-blue text-xs font-mono leading-relaxed shadow-card-glow relative">
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-vector-blue" />
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-vector-blue" />
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-vector-blue" />
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-vector-blue" />
                      <pre className="whitespace-pre-wrap font-mono">{msg.text}</pre>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={msg.id} className="flex gap-4 max-w-3xl self-end flex-row-reverse">
                  <div className="shrink-0">
                    <div className="size-10 border border-vector-white/40 bg-vector-bg flex items-center justify-center">
                      <span className="material-symbols-outlined text-vector-white text-xl">person</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] text-vector-white/40 font-mono">{msg.time}</span>
                      <span className="text-vector-white font-bold text-[9px] tracking-widest uppercase">MARTY</span>
                    </div>
                    <div className="border border-vector-white/30 bg-vector-white/5 p-4 text-vector-white text-xs font-mono leading-relaxed relative">
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-vector-white/30" />
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-vector-white/30" />
                      <pre className="whitespace-pre-wrap font-mono">{msg.text}</pre>
                    </div>
                  </div>
                </div>
              )
            ))}

            {isTyping && (
              <div className="flex gap-4 max-w-3xl">
                <div className="shrink-0">
                  <div className="size-10 border border-vector-blue bg-vector-bg flex items-center justify-center">
                    <span className="material-symbols-outlined text-vector-blue text-xl">smart_toy</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 border border-vector-blue/30 bg-vector-blue/5 px-4 py-3">
                  <span className="text-vector-blue/60 text-[9px] font-mono animate-pulse">PROCESSING</span>
                  <div className="flex gap-1">
                    {[0,1,2].map(i => (
                      <div key={i} className="h-1.5 w-1.5 bg-vector-blue animate-bounce rounded-full"
                        style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-vector-bg border-t border-vector-blue/30 relative z-20 shrink-0">
            <div className="max-w-4xl mx-auto flex flex-col gap-2">
              <div className="flex items-stretch gap-0 relative">
                <div className="flex-1 bg-transparent relative">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full bg-vector-bg border border-vector-blue/30 text-vector-white font-mono placeholder:text-vector-white/30 focus:border-vector-blue focus:ring-1 focus:ring-vector-blue focus:outline-none p-4 min-h-[60px] resize-none text-xs"
                    placeholder="DUMP A THOUGHT, ASK A QUESTION, OR REQUEST HELP..."
                  />
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[10px] border-t-vector-blue border-l-[10px] border-l-transparent pointer-events-none" />
                </div>
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || isTyping}
                  className="px-6 bg-vector-blue text-vector-bg font-bold font-mono tracking-widest hover:brightness-110 transition-all flex items-center gap-2 border-r border-t border-b border-vector-blue text-xs disabled:opacity-40"
                >
                  <span className="hidden md:inline">SEND</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
              <div className="flex justify-between items-center text-[8px] text-vector-white/30 font-mono px-1 tracking-widest">
                <span>TRY: "buy milk" or "quiz me on distributions"</span>
                <span>ENTER TO SEND · SHIFT+ENTER FOR NEWLINE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Task panel */}
        <div className="w-64 flex-shrink-0 border-l border-vector-blue/20 flex flex-col bg-vector-bg/50">
          <div className="px-4 py-3 border-b border-vector-blue/20">
            <p className="text-[8px] text-vector-blue/60 font-mono tracking-widest uppercase">AUTO_SCHEDULED_TASKS</p>
          </div>
          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            {tasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-32 gap-2">
                <span className="material-symbols-outlined text-vector-blue/20 text-3xl">task_alt</span>
                <p className="text-[8px] text-vector-white/20 font-mono text-center">Dump thoughts in chat — tasks appear here</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {tasks.map((task) => (
                  <div key={task.id} className="border border-vector-blue/20 bg-vector-blue/5 p-3">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-400 text-sm mt-0.5">check_circle</span>
                      <div>
                        <p className="text-[9px] font-mono text-vector-white">{task.text}</p>
                        <p className="text-[8px] font-mono text-vector-blue/60 mt-1">
                          <span className="material-symbols-outlined text-[11px] align-middle">schedule</span>
                          {" "}{task.scheduled}
                        </p>
                        <span className={`text-[7px] font-mono tracking-widest px-1.5 py-0.5 mt-1 inline-block border ${
                          task.priority === "HIGH"
                            ? "border-red-500/40 text-red-400"
                            : "border-vector-blue/30 text-vector-blue/60"
                        }`}>
                          {task.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatbotScreen;
