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

      <h1 className={styles.title}>π μ€λ λμ κΈ°λΆμ?</h1>
    </header>
  );
};

export default Header;
