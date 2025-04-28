import React from "react";
import Button from "../Button";

import styles from "./DecimalButton.module.css";

import { CalculatorContext } from "../../contexts/CalculatorProvider";

function DecimalButton() {
  const { numberInput, setNumberInput, isError, setIsError } =
    React.use(CalculatorContext);

  function handleClick() {
    if (isError) {
      setIsError(false);
    }

    const nextNumberInput = `${numberInput}.`;
    setNumberInput(nextNumberInput);
  }

  return (
    <Button className={styles.decimal} handleClick={handleClick}>
      .
    </Button>
  );
}

export default DecimalButton;
