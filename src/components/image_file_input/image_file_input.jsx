import React from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ name }) => {
  return (
    <div className={styles.container}>
      <input className={styles.file} type="file" accept="image/*" name="file" />
      <button className={styles.button}>{name || "No file"}</button>
    </div>
  );
};

export default ImageFileInput;
