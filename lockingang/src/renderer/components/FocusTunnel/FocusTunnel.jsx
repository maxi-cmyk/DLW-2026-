import React, { useState } from "react";
import TaskCard from "./TaskCard";

const MAX_TASKS = 3;

const formatDuration = (minutes) => {
  if (minutes >= 60) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  }
  return `${minutes}m`;
};

const EMPTY_SLOT = { id: null, status: "OPEN" };

const FocusTunnel = ({ onStart }) => {
  const [tasks, setTasks] = useState([EMPTY_SLOT, EMPTY_SLOT, EMPTY_SLOT]);
  const [showForm, setShowForm] = useState(false);
  const [addingIndex, setAddingIndex] = useState(null);
  const [formTitle, setFormTitle] = useState("");
  const [formMinutes, setFormMinutes] = useState("");

  const handleOpenAdd = (index) => {
    setAddingIndex(index);
    setFormTitle("");
    setFormMinutes("");
    setShowForm(true);
  };

  const handleConfirm = () => {
    const mins = parseInt(formMinutes, 10);
    if (!formTitle.trim() || isNaN(mins) || mins <= 0) return;
    const newTask = {
      id: `PROCESS_0${addingIndex + 1}`,
      title: formTitle.trim(),
      status: "ACTIVE",
      duration: formatDuration(mins),
      durationSeconds: mins * 60,
    };
    setTasks((prev) => {
      const updated = [...prev];
      updated[addingIndex] = newTask;
      return updated;
    });
    setShowForm(false);
  };

  const handleDelete = (index) => {
    setTasks((prev) => {
      const updated = [...prev];
      updated[index] = EMPTY_SLOT;
      return updated;
    });
  };

  const activeCount = tasks.filter((t) => t.status !== "OPEN").length;

  return (
    <div className="flex-[3] relative flex flex-col bg-vector-bg/20 overflow-hidden">
      {/* Header */}
      <div className="absolute top-6 left-6 z-10">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-vector-blue text-[20px]">
            rocket_launch
          </span>
          <h2 className="text-xs uppercase tracking-[0.3em] terminal-text text-vector-white">
            Focus_Tunnel
          </h2>
        </div>
        <p className="text-[9px] text-vector-blue/60 font-mono mt-1 pl-8">
          ACTIVE QUEUE [{activeCount}_SLOTS / {MAX_TASKS}_MAX]
        </p>
      </div>

      {/* Cards */}
      <div className="flex-1 flex items-center justify-evenly gap-6 px-8 pt-16">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            onStart={onStart}
            onAdd={() => handleOpenAdd(index)}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>

      {/* Add Task Modal */}
      {showForm && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-vector-bg/80 backdrop-blur-sm">
          <div className="w-[380px] border border-vector-blue/60 bg-vector-bg p-8 shadow-[0_0_40px_rgba(125,249,255,0.15)]">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-vector-blue font-mono text-sm">&gt;</span>
              <h3 className="text-[10px] text-vector-blue uppercase tracking-[0.3em] terminal-text">
                ADD_TASK
              </h3>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-[8px] text-vector-blue/60 uppercase tracking-widest font-mono mb-2">
                  TASK_NAME
                </label>
                <input
                  autoFocus
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleConfirm()}
                  placeholder="e.g. Physics Problem Set 7"
                  className="w-full bg-transparent border border-vector-blue/30 focus:border-vector-blue text-vector-white text-xs font-mono px-3 py-2 outline-none placeholder:text-vector-white/20 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[8px] text-vector-blue/60 uppercase tracking-widest font-mono mb-2">
                  DURATION (minutes)
                </label>
                <input
                  type="number"
                  min="1"
                  max="300"
                  value={formMinutes}
                  onChange={(e) => setFormMinutes(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleConfirm()}
                  placeholder="25"
                  className="w-full bg-transparent border border-vector-blue/30 focus:border-vector-blue text-vector-white text-xs font-mono px-3 py-2 outline-none placeholder:text-vector-white/20 transition-colors"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowForm(false)}
                className="flex-1 py-3 border border-vector-white/20 text-vector-white/50 hover:text-vector-white hover:border-vector-white/50 text-[9px] uppercase tracking-widest font-mono transition-colors"
              >
                CANCEL
              </button>
              <button
                onClick={handleConfirm}
                disabled={!formTitle.trim() || !formMinutes || parseInt(formMinutes) <= 0}
                className="flex-1 py-3 bg-vector-blue text-vector-bg text-[9px] uppercase tracking-widest font-bold font-mono hover:brightness-110 active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                CONFIRM_TASK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FocusTunnel;
