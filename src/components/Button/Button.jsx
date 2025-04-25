import React from "react";
import styles from "./Button.module.css";

function Button({ type, children }) {
  const appliedClass = `${styles.button} ${styles[type]}`;
  return <button className={appliedClass}>{children}</button>;
}

export default Button;
