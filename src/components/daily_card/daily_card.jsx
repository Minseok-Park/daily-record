import React from "react";
import styles from "./daily_card.module.css";

const DEFAULT_IMAGE = "images/default_image.png";

const DailyCard = (props) => {
  const url = DEFAULT_IMAGE;
  return (
    <li className={styles.card}>
      <div className={styles.emoji}>
        <span>😀</span>
      </div>
      <h2 className={styles.day}>20일</h2>
      <img className={styles.photo} src={url} alt="dailyCard" />
    </li>
  );
};

export default DailyCard;
