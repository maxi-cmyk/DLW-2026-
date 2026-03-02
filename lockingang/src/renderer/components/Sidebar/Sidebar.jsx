import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className={styles.sidebar}>
      <div>
        <div className={styles.headerBox}>
          <div className={styles.headerFlex}>
            <div className={styles.profileFlex}>
              <div className={styles.profilePicBorder}>
                <div
                  className={styles.profilePic}
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCK4_TDWy0cSfYLlMGqh0G0ymA1sS4sdbcmibPn-99G80KZd5aA0NQnNnzXt2AMwCBUe0TIO_f1WwVlqYL1pyU1v3twe3FCrrDpt6mY4QQBvs1HlKfyQjvRrDQ9KNFctln1kG1NsBNTJJupSqwWLbXbelTehaq_Ii5qCKeDKf__KdhmEAELoeuL3QOKwfMONyGl8HH_Uk6-ULycqolDmiyO6glhUa0ZWF0biFKMmUlEXSaRPP0-XPuwh7Xkm5b2AayPNr5eLJnZFUQ')",
                  }}
                />
              </div>
              <div className={styles.profileTextFlex}>
                <h1 className={styles.appTitle}>LOCK_IN_GANG_OS</h1>
                <p className={styles.studentId}>Student_ID: #8842</p>
              </div>
            </div>
          </div>
        </div>

        <nav className={styles.navGroup}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.navLink} group ${isActive ? styles.navLinkActive : styles.navLinkInactive}`
            }
          >
            <span
              className={`${styles.navIcon} ${location.pathname === "/" ? styles.navIconActive : ""}`}
            >
              dashboard
            </span>
            <span className={styles.navLabel}>Dashboard</span>
          </NavLink>
          <NavLink
            to="/knowledge-tree"
            className={({ isActive }) =>
              `${styles.navLink} group ${isActive ? styles.navLinkActive : styles.navLinkInactive}`
            }
          >
            <span className={styles.navIcon}>account_tree</span>
            <span className={styles.navLabel}>Knowledge Tree</span>
          </NavLink>
          <NavLink
            to="/chatbot"
            className={({ isActive }) =>
              `${styles.navLink} group ${isActive ? styles.navLinkActive : styles.navLinkInactive}`
            }
          >
            <span className={styles.navIcon}>chat</span>
            <span className={styles.navLabel}>Chatbot</span>
          </NavLink>
          <NavLink
            to="/templates"
            className={({ isActive }) =>
              `${styles.navLink} group ${isActive ? styles.navLinkActive : styles.navLinkInactive}`
            }
          >
            <span className={styles.navIcon}>upload_file</span>
            <span className={styles.navLabel}>Templates</span>
          </NavLink>
          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              `${styles.navLink} group ${isActive ? styles.navLinkActive : styles.navLinkInactive}`
            }
          >
            <span className={styles.navIcon}>calendar_month</span>
            <span className={styles.navLabel}>Calendar & Schedule</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
