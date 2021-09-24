import React from "react";
import DailyAddForm from "../daily_add_form/daily_add_form";
import styles from "./daily_editor.module.css";

const DailyEditor = ({ dailyCards }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>일기 기록</h1>
      <DailyAddForm dailyCards={dailyCards} />
    </section>
  );
};

export default DailyEditor;
