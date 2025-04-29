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

  const screenWrapperRef = React.useRef();

  React.useEffect(() => {
    const wrapper = screenWrapperRef.current;
    wrapper.scrollLeft = wrapper.scrollWidth;
  }, [numberInput]);

  const numberKeys = Object.keys(numbers);
  const operatorKeys = Object.keys(operators);

  return (
    <div className={styles.calculator}>
      <div className={styles.screenWrapper} ref={screenWrapperRef}>
        <Screen displayValue={numberInput} entries={calculation} />
      </div>

      {numberKeys.map((num) => (
        <NumberButton key={num} value={num} />
      ))}
      {operatorKeys.map((operator) => (
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
