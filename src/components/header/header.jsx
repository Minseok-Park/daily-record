import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>😀 오늘 나의 기분은?</h1>
    </header>
  );
};

export default Header;
