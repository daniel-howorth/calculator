import React from "react";
import Button from "../Button";

import { CalculatorContext } from "../../contexts/CalculatorProvider";

function DecimalButton() {
  const { numberInput, setNumberInput } = React.use(CalculatorContext);

  function handleClick() {
    const nextNumberInput = `${numberInput}.`;
    setNumberInput(nextNumberInput);
  }

  return (
    <Button type="DECIMAL" handleClick={handleClick}>
      .
    </Button>
  );
}

export default DecimalButton;
