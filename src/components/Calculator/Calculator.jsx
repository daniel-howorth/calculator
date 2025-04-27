import React from "react";
import styles from "./Calculator.module.css";
import Button from "../Button";
import NumberButton from "../NumberButton";
import OperatorButton from "../OperatorButton";
import DecimalButton from "../DecimalButton";
import EqualsButton from "../EqualsButton";
import Screen from "../Screen";

import { CalculatorContext } from "../../contexts/CalculatorProvider";

function Calculator() {
  const {
    numberInput,
    setNumberInput,
    calculation,
    setCalculation,
    numbers,
    operators,
  } = React.use(CalculatorContext);

  function del() {
    if (numberInput.length === 0) {
      return;
    }
    const nextNumberInput = numberInput.slice(0, -1);
    console.log(nextNumberInput);
    setNumberInput(nextNumberInput);
  }

  function clear() {
    setNumberInput("");
    setCalculation([]);
  }

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
      <Button type="AC" handleClick={clear}>
        AC
      </Button>
      <Button type="DEL" handleClick={del}>
        DEL
      </Button>
    </div>
  );
}

export default Calculator;
