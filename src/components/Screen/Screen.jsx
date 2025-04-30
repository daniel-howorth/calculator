import React from "react";
import styles from "./Screen.module.css";

import { CalculatorContext } from "../../contexts/CalculatorProvider";

function Screen({ displayValue, entries }) {
  const { isError } = React.use(CalculatorContext);

  let entriesStr = entries.join(" ");

  if (isError) {
    displayValue = "Error";
  }

  return (
    <div className={styles.screen} aria-live="polite" aria-atomic="true">
      <span className={styles.entries}>{entriesStr}</span>
      <span className={styles.display}>{displayValue}</span>
    </div>
  );
}

export default Screen;
