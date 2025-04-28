import React from "react";
import Button from "../Button";

import styles from "./DecimalButton.module.css";

import { CalculatorContext } from "../../contexts/CalculatorProvider";

function DecimalButton() {
  const { numberInput, setNumberInput } = React.use(CalculatorContext);

  function handleClick() {
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
