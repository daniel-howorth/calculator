import React from "react";
import Button from "../Button";

import { CalculatorContext } from "../../contexts/CalculatorProvider";

function ClearButton() {
  const { setNumberInput, setCalculation } = React.use(CalculatorContext);

  function handleClick() {
    setNumberInput("");
    setCalculation([]);
  }

  return (
    <Button type="AC" handleClick={handleClick}>
      AC
    </Button>
  );
}

export default ClearButton;
