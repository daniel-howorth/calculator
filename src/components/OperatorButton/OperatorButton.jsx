import React from "react";
import Button from "../Button";

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

  function handleClick() {
    let numberIsEntered = numberInput.length > 0;

    if (numberIsEntered) {
      const nextCalculation = calculation.concat(numberInput, operator);
      console.log(nextCalculation);
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
    console.log(nextCalculation);
    setCalculation(nextCalculation);
    return;
  }

  return (
    <Button type={type} handleClick={handleClick}>
      {operator}
    </Button>
  );
}

export default OperatorButton;
