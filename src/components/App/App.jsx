import React from "react";
import styles from "./App.module.css";
import Calculator from "../Calculator";

function App() {
  return (
    <div className={styles.wrapper}>
      <Calculator />
    </div>
  );
}

export default App;
