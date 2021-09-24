import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}

      <h1 className={styles.title}>😀 오늘 나의 기분은?</h1>
    </header>
  );
};

export default Header;
