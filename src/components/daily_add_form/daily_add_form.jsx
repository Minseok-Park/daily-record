import React, { useState, useRef } from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./daily_add_form.module.css";

const DailyAddForm = ({ dailyCards, onAdd }) => {
  const formRef = useRef();
  const messageRef = useRef();

  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDate();

  // 현재의 이모지를 저장하는 state
  const [currentEmoji, setCurrentEmoji] = useState("😀");
  // 현재의 날짜를 담아두는 state
  const [currentDay, setCurrentDay] = useState(day);

  const onSubmit = (event) => {
    event.preventDefault();
    const dailyCard = {
      id: Date.now(),
      emoji: currentEmoji,
      day: day,
      message: messageRef.current.value || "기록된 것이 없습니다.",
      fileName: null,
      fileURL: null,
    };
    formRef.current.reset();
    onAdd(dailyCard);
  };

  return (
    <>
      <form ref={formRef} className={styles.form}>
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
          ref={messageRef}
          className={styles.textarea}
          name="message"
          placeholder="여러분의 일상을 적어주세요"
        />
        <div className={styles.fileInput}>
          <ImageFileInput />
        </div>
        <Button name="추가" onClick={onSubmit} />
      </form>
    </>
  );
};

export default DailyAddForm;
