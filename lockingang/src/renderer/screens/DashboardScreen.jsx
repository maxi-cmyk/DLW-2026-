import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import FocusTunnel from "../components/FocusTunnel/FocusTunnel";
import ZenModeTimer from "./ZenModeTimer";
import MissionCompleteScreen from "./MissionCompleteScreen";

const DashboardScreen = () => {
  // phase: "dashboard" | "timer" | "complete"
  const [phase, setPhase] = useState("dashboard");
  const [activeTask, setActiveTask] = useState(null);
  const [timeSpent, setTimeSpent] = useState(25 * 60);

  const handleStart = (task) => {
    setActiveTask(task);
    setPhase("timer");
  };

  const handleComplete = (secondsElapsed) => {
    setTimeSpent(secondsElapsed ?? 25 * 60);
    setPhase("complete");
  };

  const handleGiveUp = () => {
    setPhase("dashboard");
    setActiveTask(null);
  };

  const handleReEnter = () => {
    setPhase("timer");
  };

  const handleReturnToBase = () => {
    setPhase("dashboard");
    setActiveTask(null);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-vector-bg text-vector-white font-terminal relative">
      <div className="scanline" />

      <Sidebar />

      <main className="flex-1 flex flex-col min-w-0 bg-transparent relative z-10">
        <Header />

        <div className="flex-1 flex overflow-hidden">
          <FocusTunnel onStart={handleStart} />
        </div>
      </main>

      {/* Full-screen overlays — rendered on top of everything */}
      {phase === "timer" && (
        <ZenModeTimer
          task={activeTask}
          onComplete={(elapsed) => handleComplete(elapsed)}
          onGiveUp={handleGiveUp}
        />
      )}

      {phase === "complete" && (
        <MissionCompleteScreen
          task={activeTask}
          timeSpentSeconds={timeSpent}
          onReEnter={handleReEnter}
          onReturnToBase={handleReturnToBase}
        />
      )}
    </div>
  );
};

export default DashboardScreen;
