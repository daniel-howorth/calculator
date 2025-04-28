import React from "react";
import Button from "../Button";

import styles from "./DeleteButton.module.css";

import { CalculatorContext } from "../../contexts/CalculatorProvider";

function DeleteButton() {
  const { numberInput, setNumberInput, isError, setIsError } =
    React.use(CalculatorContext);

  function handleClick() {
    if (isError) {
      setIsError(false);
    }

    if (numberInput.length === 0) {
      return;
    }
    const nextNumberInput = numberInput.slice(0, -1);
    setNumberInput(nextNumberInput);
  }

  return (
    <Button className={styles.delete} handleClick={handleClick}>
      DEL
    </Button>
  );
}

export default DeleteButton;
