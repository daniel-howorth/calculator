import React from "react";
import useKey from "../../hooks/useKey";
import styles from "./Button.module.css";

function Button({
  className = "",
  handleClick,
  eventKey,
  children,
  ariaLabel,
}) {
  const appliedClass = `${styles.button} ${className}`;

  useKey(eventKey, handleClick);

  return (
    <button
      className={appliedClass}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
