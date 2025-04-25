import React from "react";
import styles from "./Screen.module.css";

function Screen() {
  return (
    <div className={styles.screen}>
      <span className={styles.entries}>123 * 456</span>
      <span className={styles.display}>0123456789</span>
    </div>
  );
}

export default Screen;
