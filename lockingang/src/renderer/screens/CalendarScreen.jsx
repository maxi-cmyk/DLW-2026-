import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

// March 2026 — starts on Sunday
const MONTH = "MARCH";
const YEAR = 2026;
const DAYS_IN_MONTH = 31;
const START_DAY = 0; // Sunday

const REVIEW_BLOCKS = {
  2:  [{ node: "COMMON_DIST",     label: "Common Distributions",  status: "critical", time: "11:00pm", duration: "30m", mastery: 0.20 }],
  3:  [{ node: "NORMAL_DIST",     label: "Normal Distribution",    status: "critical", time: "9:00am",  duration: "20m", mastery: 0.15 },
       { node: "CENTRAL_LIMIT",   label: "Central Limit Theorem",  status: "active",   time: "3:00pm",  duration: "20m", mastery: 0.48 }],
  4:  [{ node: "HYPOTHESIS_TEST", label: "Hypothesis Testing",     status: "active",   time: "10:00am", duration: "20m", mastery: 0.52 }],
  5:  [{ node: "BINOMIAL_DIST",   label: "Binomial Distribution",  status: "active",   time: "2:00pm",  duration: "20m", mastery: 0.45 }],
  7:  [{ node: "COMMON_DIST",     label: "Common Distributions",   status: "critical", time: "7:00pm",  duration: "30m", mastery: 0.35 }],
  9:  [{ node: "BAYES_THEOREM",   label: "Bayes' Theorem",         status: "active",   time: "11:00am", duration: "20m", mastery: 0.61 }],
  10: [{ node: "PROBABILITY",     label: "Probability",            status: "completed",time: "4:00pm",  duration: "15m", mastery: 0.92 },
       { node: "COMMON_DIST",     label: "Common Distributions",   status: "active",   time: "8:00pm",  duration: "25m", mastery: 0.55 }],
  12: [{ node: "HYPOTHESIS_TEST", label: "Hypothesis Testing",     status: "active",   time: "9:00am",  duration: "20m", mastery: 0.60 }],
  14: [{ node: "CENTRAL_LIMIT",   label: "Central Limit Theorem",  status: "completed",time: "2:00pm",  duration: "15m", mastery: 0.72 }],
  16: [{ node: "NORMAL_DIST",     label: "Normal Distribution",    status: "active",   time: "10:00am", duration: "20m", mastery: 0.55 }],
  18: [{ node: "BINOMIAL_DIST",   label: "Binomial Distribution",  status: "completed",time: "3:00pm",  duration: "15m", mastery: 0.70 }],
  20: [{ node: "BAYES_THEOREM",   label: "Bayes' Theorem",         status: "completed",time: "11:00am", duration: "15m", mastery: 0.75 }],
  23: [{ node: "COMMON_DIST",     label: "Common Distributions",   status: "completed",time: "6:00pm",  duration: "20m", mastery: 0.80 },
       { node: "HYPOTHESIS_TEST", label: "Hypothesis Testing",     status: "completed",time: "8:00pm",  duration: "15m", mastery: 0.82 }],
  // CS105 quiz day!
  25: [{ node: "CS105_QUIZ",      label: "CS105 STATS QUIZ",       status: "exam",     time: "9:00am",  duration: "2h",  mastery: null }],
};

const statusColor = (s) => {
  if (s === "exam")      return { border: "#FFD700", text: "#FFD700", bg: "rgba(255,215,0,0.08)" };
  if (s === "critical")  return { border: "#FF4444", text: "#FF4444", bg: "rgba(255,68,68,0.08)" };
  if (s === "active")    return { border: "#FFB800", text: "#FFB800", bg: "rgba(255,184,0,0.08)" };
  if (s === "completed") return { border: "#7DF9FF", text: "#7DF9FF", bg: "rgba(125,249,255,0.05)" };
  return { border: "rgba(125,249,255,0.3)", text: "rgba(125,249,255,0.7)", bg: "transparent" };
};

const statusIcon = (s) => {
  if (s === "exam")      return "school";
  if (s === "critical")  return "warning";
  if (s === "active")    return "schedule";
  if (s === "completed") return "check_circle";
  return "event";
};

const TODAY = 2; // March 2 for demo

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalendarScreen = () => {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(TODAY);

  // Build calendar grid (6 rows × 7 cols)
  const cells = [];
  for (let i = 0; i < START_DAY; i++) cells.push(null);
  for (let d = 1; d <= DAYS_IN_MONTH; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const selectedBlocks = selectedDay ? (REVIEW_BLOCKS[selectedDay] || []) : [];

  const dayHasBlock = (d) => d && REVIEW_BLOCKS[d];
  const dayMaxStatus = (d) => {
    if (!d || !REVIEW_BLOCKS[d]) return null;
    const blocks = REVIEW_BLOCKS[d];
    if (blocks.some(b => b.status === "exam")) return "exam";
    if (blocks.some(b => b.status === "critical")) return "critical";
    if (blocks.some(b => b.status === "active")) return "active";
    return "completed";
  };

  return (
    <div className="h-screen flex overflow-hidden bg-vector-bg text-vector-white font-terminal relative">
      <div className="scanline" />
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-14 border-b border-vector-blue flex items-center justify-between px-6 backdrop-blur-md bg-vector-bg/40 z-10 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-vector-white/60 font-mono tracking-wider">SYSTEM</span>
            <span className="text-[10px] text-vector-blue font-bold">&gt;&gt;</span>
            <span className="text-[10px] text-vector-blue font-mono tracking-wider terminal-text">
              CALENDAR_SCHEDULE — {MONTH} {YEAR}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-[8px] font-mono">
              {[
                { label: "CRITICAL",  color: "#FF4444" },
                { label: "REVIEW",    color: "#FFB800" },
                { label: "MASTERED",  color: "#7DF9FF" },
                { label: "EXAM",      color: "#FFD700" },
              ].map(({ label, color }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <div className="h-2 w-2" style={{ background: color }} />
                  <span style={{ color }} className="tracking-widest">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        <main className="flex-1 flex overflow-hidden">
          {/* Calendar grid */}
          <div className="flex-1 flex flex-col p-6 min-w-0">
            {/* Month header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold tracking-widest terminal-text" style={{ textShadow: "0 0 20px rgba(125,249,255,0.3)" }}>
                {MONTH} {YEAR}
              </h2>
              <div className="flex items-center gap-2 text-[8px] text-vector-white/40 font-mono">
                <span className="h-2 w-2 bg-vector-blue animate-pulse" />
                <span>AUTO-SCHEDULED BY LOCKINGANG · SPACED REPETITION ACTIVE</span>
              </div>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 mb-1">
              {DAYS.map((d) => (
                <div key={d} className="text-center text-[8px] font-mono tracking-widest text-vector-blue/50 py-2">
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar cells */}
            <div className="grid grid-cols-7 gap-1 flex-1">
              {cells.map((day, idx) => {
                if (!day) return <div key={`empty_${idx}`} className="border border-vector-blue/5 bg-transparent" />;
                const blocks = REVIEW_BLOCKS[day] || [];
                const maxStatus = dayMaxStatus(day);
                const sc = maxStatus ? statusColor(maxStatus) : null;
                const isToday = day === TODAY;
                const isSelected = day === selectedDay;

                return (
                  <div
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className="border p-1.5 cursor-pointer transition-all relative overflow-hidden flex flex-col min-h-[60px]"
                    style={{
                      borderColor: isSelected ? "#7DF9FF" : isToday ? "rgba(125,249,255,0.4)" : "rgba(125,249,255,0.08)",
                      background: isSelected ? "rgba(125,249,255,0.05)" : "transparent",
                      boxShadow: isSelected ? "0 0 12px rgba(125,249,255,0.15)" : "none",
                    }}
                  >
                    {/* Day number */}
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className="text-[9px] font-mono"
                        style={{
                          color: isToday ? "#7DF9FF" : "rgba(255,255,255,0.5)",
                          fontWeight: isToday ? "bold" : "normal",
                        }}
                      >
                        {day}
                        {isToday && <span className="ml-1 text-[7px] text-vector-blue">●</span>}
                      </span>
                    </div>

                    {/* Block dots */}
                    <div className="flex flex-col gap-0.5">
                      {blocks.slice(0, 2).map((b, i) => {
                        const bsc = statusColor(b.status);
                        return (
                          <div
                            key={i}
                            className="w-full px-1 py-0.5 text-[6px] font-mono truncate"
                            style={{ background: bsc.bg, color: bsc.text, border: `1px solid ${bsc.border}30` }}
                          >
                            {b.label}
                          </div>
                        );
                      })}
                      {blocks.length > 2 && (
                        <span className="text-[6px] font-mono text-vector-white/30">+{blocks.length - 2} more</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Day detail panel */}
          <div className="w-72 flex-shrink-0 border-l border-vector-blue/20 flex flex-col bg-vector-bg/30 overflow-y-auto custom-scrollbar">
            <div className="px-4 py-3 border-b border-vector-blue/20">
              <p className="text-[8px] text-vector-blue/50 font-mono tracking-widest uppercase">
                {selectedDay ? `MARCH ${selectedDay}, ${YEAR}` : "SELECT A DAY"}
              </p>
              {selectedDay === TODAY && (
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="h-1.5 w-1.5 bg-vector-blue animate-pulse" />
                  <span className="text-[8px] text-vector-blue font-mono tracking-widest">TODAY</span>
                </div>
              )}
            </div>

            <div className="flex-1 p-4">
              {selectedBlocks.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-32 gap-2">
                  <span className="material-symbols-outlined text-vector-blue/20 text-3xl">event_available</span>
                  <p className="text-[8px] text-vector-white/20 font-mono text-center">No review blocks scheduled</p>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {selectedBlocks.map((block, i) => {
                    const sc = statusColor(block.status);
                    return (
                      <div
                        key={i}
                        className="border p-3 relative overflow-hidden"
                        style={{ borderColor: sc.border + "50", background: sc.bg }}
                      >
                        <div className="absolute left-0 top-0 bottom-0 w-0.5" style={{ background: sc.border }} />
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm" style={{ color: sc.text }}>
                              {statusIcon(block.status)}
                            </span>
                            <span className="text-[9px] font-mono font-bold" style={{ color: sc.text }}>
                              {block.label}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-[8px] font-mono text-vector-white/40">
                          <span>⏰ {block.time}</span>
                          <span>⏱ {block.duration}</span>
                        </div>
                        {block.mastery !== null && (
                          <div className="mt-2">
                            <div className="flex justify-between mb-1">
                              <span className="text-[7px] font-mono text-vector-white/30">MASTERY</span>
                              <span className="text-[7px] font-mono" style={{ color: sc.text }}>
                                {Math.round(block.mastery * 100)}%
                              </span>
                            </div>
                            <div className="h-1 bg-vector-white/5">
                              <div className="h-full" style={{ width: `${block.mastery * 100}%`, background: sc.border }} />
                            </div>
                          </div>
                        )}
                        {block.status === "exam" && (
                          <div className="mt-2 text-[8px] font-mono text-yellow-400/80">
                            🎯 CS105 STATS EXAM — MAIN ASSESSMENT
                          </div>
                        )}
                        {block.node !== "CS105_QUIZ" && (
                          <button
                            onClick={() => navigate(`/quiz?node=${block.node}`)}
                            className="w-full mt-2 py-1.5 border text-[8px] font-mono tracking-widest uppercase transition-all hover:opacity-80"
                            style={{ borderColor: sc.border + "60", color: sc.text }}
                          >
                            LAUNCH QUIZ
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Legend */}
            <div className="p-4 border-t border-vector-blue/20">
              <p className="text-[7px] font-mono text-vector-white/20 tracking-widest uppercase mb-2">DECAY_FORECAST</p>
              <p className="text-[8px] font-mono text-vector-white/40 leading-relaxed">
                Review blocks are auto-scheduled based on your forgetting curve.
                Red blocks → decay imminent. Yellow → review soon. Blue → mastered.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CalendarScreen;
