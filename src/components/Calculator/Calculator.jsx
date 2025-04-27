import React from "react";
import styles from "./Calculator.module.css";
import NumberButton from "../NumberButton";
import OperatorButton from "../OperatorButton";
import DecimalButton from "../DecimalButton";
import EqualsButton from "../EqualsButton";
import ClearButton from "../ClearButton";
import DeleteButton from "../DeleteButton";
import Screen from "../Screen";

import { CalculatorContext } from "../../contexts/CalculatorProvider";

function Calculator() {
  const { numberInput, calculation, numbers, operators } =
    React.use(CalculatorContext);

  return (
    <div className={styles.calculator}>
      <Screen displayValue={numberInput} entries={calculation} />
      {Object.keys(numbers).map((num) => (
        <NumberButton key={num} value={num} />
      ))}
      {Object.keys(operators).map((operator) => (
        <OperatorButton key={operator} type={operator} />
      ))}
      <DecimalButton />
      <EqualsButton />
      <ClearButton />
      <DeleteButton />
    </div>
  );
}

export default Calculator;
