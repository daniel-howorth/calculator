import React from "react";
import styles from "./Screen.module.css";

function Screen({ displayValue, entries }) {
  const entriesStr = entries.join(" ");
  return (
    <div className={styles.screen}>
      <span className={styles.entries}>{entriesStr}</span>
      <span className={styles.display}>{displayValue}</span>
    </div>
  );
}

export default Screen;
