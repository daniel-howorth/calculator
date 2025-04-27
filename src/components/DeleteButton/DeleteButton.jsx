import React from "react";
import Button from "../Button";

import { CalculatorContext } from "../../contexts/CalculatorProvider";

function DeleteButton() {
  const { numberInput, setNumberInput } = React.use(CalculatorContext);

  function handleClick() {
    if (numberInput.length === 0) {
      return;
    }
    const nextNumberInput = numberInput.slice(0, -1);
    setNumberInput(nextNumberInput);
  }

  return (
    <Button type="DEL" handleClick={handleClick}>
      DEL
    </Button>
  );
}

export default DeleteButton;
