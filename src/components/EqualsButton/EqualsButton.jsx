import React from "react";
import Button from "../Button";

import styles from "./EqualsButton.module.css";

import { CalculatorContext } from "../../contexts/CalculatorProvider";

function EqualsButton() {
  const {
    calculation,
    numberInput,
    setNumberInput,
    setCalculation,
    setIsError,
    resetCalculator,
  } = React.use(CalculatorContext);

  function handleClick() {
    const nextCalculation = [...calculation, numberInput];
    const calculationStr = nextCalculation.join(" ");
    let result;

    try {
      result = String(eval(calculationStr));
    } catch {
      setIsError(true);
      resetCalculator();
      return;
    }

    setNumberInput(result);
    setCalculation([]);
  }

  return (
    <Button
      className={styles.equals}
      handleClick={handleClick}
      eventKey={["Enter", "=", " "]}
    >
      =
    </Button>
  );
}

export default EqualsButton;
