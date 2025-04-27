import React from "react";
import Button from "../Button";

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
    <Button type="EQUALS" handleClick={handleClick}>
      =
    </Button>
  );
}

export default EqualsButton;
