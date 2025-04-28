import React from "react";
import Button from "../Button";

import styles from "./EqualsButton.module.css";

import { CalculatorContext } from "../../contexts/CalculatorProvider";

function EqualsButton() {
  const { calculation, numberInput, setNumberInput, setCalculation } =
    React.use(CalculatorContext);

  function handleClick() {
    const nextCalculation = [...calculation, numberInput];
    const calculationStr = nextCalculation.join(" ");
    const result = String(eval(calculationStr));
    setNumberInput(result);
    setCalculation([]);
  }

  return (
    <Button className={styles.equals} handleClick={handleClick}>
      =
    </Button>
  );
}

export default EqualsButton;
