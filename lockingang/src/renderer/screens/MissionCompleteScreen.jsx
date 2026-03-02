import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNodes, adaptAndReloadNodes } from "../nodeStore";
import styles from "./MissionCompleteScreen.module.css";

const MissionCompleteScreen = ({
  task,
  timeSpentSeconds = 25 * 60,
  onReEnter,
  onReturnToBase,
}) => {
  const navigate = useNavigate();
  const currentNodes = getNodes();
  const defaultParent =
    currentNodes.find((n) => n.isPrimary)?.id ?? currentNodes[0]?.id ?? "";
  const [parentId, setParentId] = useState(defaultParent);
  const [saving, setSaving] = useState(false);

  const minutes = String(Math.floor(timeSpentSeconds / 60)).padStart(2, "0");
  const seconds = String(timeSpentSeconds % 60).padStart(2, "0");
  const timeString = `${minutes}:${seconds}`;

  const points = [
    { x: 60, y: 160 },
    { x: 160, y: 130 },
    { x: 260, y: 110 },
    { x: 360, y: 80 },
    { x: 460, y: 45 },
  ];
  const polyline = points.map((p) => `${p.x},${p.y}`).join(" ");

  const nodeTitle = task?.title ?? "SESSION";

  const handleSaveAndConnect = async () => {
    setSaving(true);
    try {
      const parentNode = currentNodes.find((n) => n.id === parentId);
      const parentTitle = parentNode?.label ?? "";

      if (typeof window !== "undefined" && window.api?.addNode) {
        const updatedGraph = await window.api.addNode(nodeTitle, parentTitle);
        if (updatedGraph?.nodes) {
          adaptAndReloadNodes(updatedGraph);
        }
        navigate("/knowledge-tree", {
          state: { newNodeLabel: nodeTitle },
        });
      } else {
        navigate("/knowledge-tree", {
          state: { newNodeLabel: nodeTitle },
        });
      }
    } catch (err) {
      console.error("[MissionComplete] addNode failed:", err.message);
      navigate("/knowledge-tree");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.centeredWrapper}>
        <div className={styles.scanline} />
        {/* Centered card */}
        <div
          className={styles.missionCard}
          style={{
            boxShadow:
              "0 0 60px rgba(125,249,255,0.15), inset 0 0 40px rgba(125,249,255,0.03)",
          }}
        >
          <div className={styles.cardCornerTL} />
          <div className={styles.cardCornerTR} />
          <div className={styles.cardCornerBL} />
          <div className={styles.cardCornerBR} />

          <div className={styles.cardContent}>
            {/* Header */}
            <div className={styles.headerGroup}>
              <div className={styles.systemLogFlex}>
                <span className={styles.iconTerminal}>terminal</span>
                <p>SYSTEM_LOG: {new Date().toISOString().slice(0, 10)}</p>
              </div>
              <h1
                className={styles.mainTitle}
                style={{ textShadow: "0 0 30px rgba(125,249,255,0.5)" }}
              >
                MISSION_COMPLETE
              </h1>
              <p className={styles.subTitle}>Protocol successfully executed.</p>
            </div>

            {/* Stats */}
            <div className={styles.statsGrid}>
              {[
                { icon: "timer", label: "TIME_IN_FOCUS", value: timeString },
                { icon: "military_tech", label: "XP_EARNED", value: "+50" },
                {
                  icon: "local_fire_department",
                  label: "STREAK",
                  value: "5_DAYS",
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className={styles.statBox}>
                  <span className={styles.statIcon}>{icon}</span>
                  <p className={styles.statLabel}>{label}</p>
                  <p className={styles.statValue}>{value}</p>
                </div>
              ))}
            </div>

            {/* Task connection panel */}
            <div className={styles.taskConnectPanel}>
              <div className={styles.taskConnectHeader}>
                <div className={styles.taskConnectTitleGroup}>
                  <span className={styles.iconCheck}>check_circle</span>
                  <p className={styles.taskConnectTitle}>TASK COMPLETE!</p>
                </div>
                <span className={styles.iconHub}>hub</span>
              </div>
              <p className={styles.taskConnectDesc}>
                Adding{" "}
                <span className={styles.highlightNode}>"{nodeTitle}"</span> to
                the Knowledge Graph. Connect it to a parent node:
              </p>
              <div>
                <p className={styles.selectLabel}>CONNECT TO PARENT:</p>
                <select
                  value={parentId}
                  onChange={(e) => setParentId(e.target.value)}
                  className={styles.selectMenu}
                >
                  {currentNodes.map((n) => (
                    <option key={n.id} value={n.id}>
                      {n.label}
                      {n.isPrimary ? " [PRIMARY]" : ""}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.actionBtnsTask}>
                <button
                  onClick={onReturnToBase}
                  className={styles.btnCancelTask}
                >
                  CANCEL
                </button>
                <button
                  onClick={handleSaveAndConnect}
                  disabled={saving}
                  className={styles.btnSaveTask}
                >
                  <span className={styles.btnSaveTaskIcon}>
                    {saving ? "sync" : "save"}
                  </span>
                  <p>{saving ? "CONNECTING..." : "SAVE & CONNECT"}</p>
                </button>
              </div>
            </div>

            {/* XP Growth chart */}
            <div className={styles.xpGrowthPanel}>
              <div className={styles.xpGrowthHeader}>
                <div>
                  <p className={styles.xpGrowthLabel}>XP_GROWTH_VECTOR</p>
                  <p className={styles.xpGrowthStatus}>
                    RISING <span className={styles.iconRising}>↗</span>
                  </p>
                </div>
                <span className={styles.xpGrowthVersion}>
                  GROWTH_MATRIX_V.01
                </span>
              </div>
              <svg
                className={styles.xpGrowthSvg}
                height="180"
                viewBox="0 60 520 130"
                preserveAspectRatio="none"
              >
                {[0, 1, 2, 3].map((i) => (
                  <line
                    key={i}
                    x1="60"
                    y1={60 + i * 35}
                    x2="480"
                    y2={60 + i * 35}
                    stroke="rgba(125,249,255,0.07)"
                    strokeWidth="1"
                  />
                ))}
                <polygon
                  points={`${polyline} 460,185 60,185`}
                  fill="rgba(0,255,128,0.06)"
                />
                <polyline
                  points={polyline}
                  fill="none"
                  stroke="#00ff80"
                  strokeWidth="2"
                />
                {points.map((p, i) => (
                  <circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r="4"
                    fill="#080214"
                    stroke="#00ff80"
                    strokeWidth="2"
                  />
                ))}
                {["START", "LVL_1", "LVL_2", "LVL_3", "NOW"].map((label, i) => (
                  <text
                    key={label}
                    x={points[i].x}
                    y={180}
                    textAnchor="middle"
                    fill="rgba(125,249,255,0.3)"
                    fontSize="7"
                    fontFamily="monospace"
                  >
                    {label}
                  </text>
                ))}
              </svg>
            </div>

            {/* Action buttons */}
            <div className={styles.mainActionBtns}>
              <button onClick={onReEnter} className={styles.btnReEnter}>
                <span className={styles.iconSmall}>replay</span>
                <p>RE-ENTER_TUNNEL</p>
              </button>
              <button onClick={onReturnToBase} className={styles.btnReturnBase}>
                <span className={styles.iconSmall}>home</span>
                <p>RETURN_TO_BASE</p>
              </button>
            </div>
          </div>

          {/* Bottom status bar */}
          <div className={styles.bottomStatus}>
            <div className={styles.bottomStatusPulseGroup}>
              <div className={styles.bottomPulseDot} />
              <p className={styles.bottomStatusText}>SYSTEM ONLINE</p>
            </div>
            <p className={styles.bottomStatusId}>ID: UGT_8842_XC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionCompleteScreen;
