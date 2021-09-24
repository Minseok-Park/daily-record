import React from "react";
import DailyCard from "../daily_card/daily_card";
import styles from "./daily_list.module.css";

const DailyList = ({ dailyCards }) => {
  return (
    <section className={styles.daily_list}>
      <div className={styles.container}>
        <h1 className={styles.title}>일기 목록</h1>
        <div className={styles.month}>
          <span>월</span>
          <ul className={styles.dropDown}></ul>
        </div>
      </div>

      <ul className={styles.cards}>
        {Object.keys(dailyCards).map((key) => (
          <DailyCard key={key} card={dailyCards[key]} />
        ))}
      </ul>
    </section>
  );
};

export default DailyList;
