import React from "react";
import Button from "../Button";
import styles from "./NumberButton.module.css";

import { CalculatorContext } from "../../contexts/CalculatorProvider";

function NumberButton({ value }) {
  const { numberInput, setNumberInput, numbers, isError, setIsError } =
    React.use(CalculatorContext);

  const digit = numbers[value];

  function handleClick() {
    if (isError) {
      setIsError(false);
    }

    const nextNumberInput = `${numberInput}${digit}`;
    setNumberInput(nextNumberInput);
  }

  return (
    <Button className={styles[value]} handleClick={handleClick}>
      {digit}
    </Button>
  );
}

export default NumberButton;
