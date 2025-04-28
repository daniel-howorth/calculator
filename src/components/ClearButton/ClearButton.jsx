import React from "react";
import Button from "../Button";

import styles from "./ClearButton.module.css";

import { CalculatorContext } from "../../contexts/CalculatorProvider";

function ClearButton() {
  const { setNumberInput, setCalculation } = React.use(CalculatorContext);

  function handleClick() {
    setNumberInput("");
    setCalculation([]);
  }

  return (
    <Button className={styles.ac} handleClick={handleClick}>
      AC
    </Button>
  );
}

export default ClearButton;
