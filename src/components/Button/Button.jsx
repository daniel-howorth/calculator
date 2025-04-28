import React from "react";
import styles from "./Button.module.css";

function Button({ className = "", handleClick, children }) {
  const appliedClass = `${styles.button} ${className}`;
  return (
    <button className={appliedClass} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
