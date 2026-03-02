import React from "react";
import styles from "./TaskCard.module.css";

const TaskCard = ({ task, onStart }) => {
  if (task.status === "OPEN") {
    return (
      <div className={`${styles.cardOpen} fan-card group`}>
        <span className={`${styles.iconAdd} group-hover:scale-110 mb-3`}>
          add_circle
        </span>
        <h3 className={styles.titleOpen}>
          Add_Task
        </h3>
        <p className={styles.descOpen}>
          OPEN_SLOT
        </p>
      </div>
    );
  }

  if (task.status === "EXECUTING") {
    return (
      <div className={`${styles.cardExecuting} fan-card`}>
        <div className={styles.executingBg} />
        <div className={styles.executingHeader}>
          <p className={styles.executingTime}>
            {task.timeRemaining}
          </p>
          <button className={styles.closeBtn}>
            <span className={styles.iconCloseSm}>close</span>
          </button>
        </div>

        <div className={styles.executingBody}>
          <h2 className={styles.executingTitle}>
            {task.title}
          </h2>
          <p className={styles.executingDesc}>
            {task.description}
          </p>

          <div className={styles.btnWrapperBot}>
            <button
              onClick={() => onStart?.(task)}
              className={styles.startBtn}
            >
              START
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ACTIVE status
  return (
    <div className={`${styles.cardActive} fan-card group`}>
      <div className={styles.activeHeader}>
        <span className={styles.activeId}>
          {task.id}
        </span>
        <button className={styles.closeBtn}>
          <span className={styles.iconCloseSm}>close</span>
        </button>
      </div>

      <div className={styles.activeContent}>
        <h2 className={styles.activeTitle}>
          {task.title}
        </h2>
        <p className={styles.activeDesc}>
          {task.description}
        </p>
      </div>

      <div className={styles.activeFooter}>
        <span className={styles.activeDuration}>
          {task.duration}
        </span>
        <button
          onClick={() => onStart?.(task)}
          className={styles.startBtn}
        >
          START
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
