import React, { useState } from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./daily_add_form.module.css";

const DailyAddForm = (props) => {
  const [currentEmoji, setCurrentEmoji] = useState("😀");

  return (
    <>
      <form className={styles.form}>
        <div className={styles.date}>
          <h1 className={styles.title}>오늘은</h1>
          <div className={styles.dateContainer}>
            <ul className={styles.dropDown}></ul>
            <span className={styles.day}>24일</span>
          </div>
        </div>

        <div className={styles.select}>
          <span className={styles.emoji}>{currentEmoji}</span>
        </div>

        <textarea
          className={styles.textarea}
          name="message"
          placeholder="여러분의 일상을 적어주세요"
        />
        <div className={styles.fileInput}>
          <ImageFileInput />
        </div>
        <Button name="추가" />
      </form>
    </>
  );
};

export default DailyAddForm;
