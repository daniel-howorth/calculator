import React from "react";
import Button from "../Button";

import { CalculatorContext } from "../../contexts/CalculatorProvider";

function NumberButton({ value }) {
  const { numberInput, setNumberInput, numbers } = React.use(CalculatorContext);

  const digit = numbers[value];

  function handleClick() {
    const nextNumberInput = `${numberInput}${digit}`;
    setNumberInput(nextNumberInput);
  }

  return (
    <Button type={value} handleClick={handleClick}>
      {digit}
    </Button>
  );
}

export default NumberButton;
