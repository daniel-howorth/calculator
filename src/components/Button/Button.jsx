import React from "react";
import styles from "./Button.module.css";

function Button({ type, handleClick, children }) {
  const appliedClass = `${styles.button} ${styles[type]}`;
  return (
    <button className={appliedClass} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
