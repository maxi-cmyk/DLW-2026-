import React from "react";
import TaskCard from "./TaskCard";

const FocusTunnel = ({ onStart }) => {
  const tasks = [
    {
      id: "PROCESS_02",
      title: "Biology Ch.4: Mitosis",
      description: "Diagram synthesis & phase ID.",
      status: "ACTIVE",
      duration: "1h 30m",
    },
    {
      id: "PROCESS_01",
      title: "Finalize Thesis Intro",
      description: "Re-evaluating framework based on Q3 review notes.",
      status: "EXECUTING",
      timeRemaining: "24:12",
    },
    {
      id: "PROCESS_03",
      title: "Physics Problem Set 7",
      description: "Wave optics & interference patterns. Due tomorrow.",
      status: "ACTIVE",
      duration: "45m",
    },
  ];

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
          ACTIVE QUEUE [3_SLOTS]
        </p>
      </div>

      {/* Cards — evenly spread across the full width */}
      <div className="flex-1 flex items-center justify-evenly gap-6 px-8 pt-16">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} onStart={onStart} />
        ))}
      </div>
    </div>
  );
};

export default FocusTunnel;
