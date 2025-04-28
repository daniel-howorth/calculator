import React from "react";
import Button from "../Button";

import styles from "./OperatorButton.module.css";

import { CalculatorContext } from "../../contexts/CalculatorProvider";

function OperatorButton({ type }) {
  const {
    numberInput,
    setNumberInput,
    calculation,
    setCalculation,
    operators,
  } = React.use(CalculatorContext);

  const operator = operators[type];
  console.log(type);
  console.log(operator);

  function handleClick() {
    let numberIsEntered = numberInput.length > 0;

    if (numberIsEntered) {
      const nextCalculation = calculation.concat(numberInput, operator);
      setCalculation(nextCalculation);
      setNumberInput("");
      return;
    }

    const lastCalcValue = calculation[calculation.length - 1];

    if (lastCalcValue === operator) {
      return;
    }

    updateOperator();
  }

  function updateOperator() {
    let nextCalculation = [...calculation];
    const lastIndex = nextCalculation.length - 1;
    nextCalculation[lastIndex] = operator;
    setCalculation(nextCalculation);
    return;
  }

  return (
    <Button className={styles[type]} handleClick={handleClick}>
      {operator}
    </Button>
  );
}

export default OperatorButton;
