import React from "react";
import styles from "./App.module.css";
import Calculator from "../Calculator";
import CalculatorProvider from "../../contexts/CalculatorProvider";

function App() {
  return (
    <CalculatorProvider>
      <div className={styles.wrapper}>
        <Calculator />
      </div>
    </CalculatorProvider>
  );
}

export default App;
