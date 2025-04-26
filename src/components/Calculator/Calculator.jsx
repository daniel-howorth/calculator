import React from "react";
import styles from "./Calculator.module.css";
import Button from "../Button";
import Screen from "../Screen";

function Calculator() {
  const [numberInput, setNumberInput] = React.useState("");
  const [calculation, setCalculation] = React.useState([]);

  function enterNumber(value) {
    const nextNumber = `${numberInput}${value}`;
    console.log(nextNumber);
    setNumberInput(nextNumber);
  }

  function enterDecimal() {
    const nextNumber = `${numberInput}.`;
    console.log(nextNumber);
    setNumberInput(nextNumber);
  }

  function enterAdd() {
    if (numberInput.length > 0) {
      const nextCalculation = calculation.concat(numberInput, "+");
      console.log(nextCalculation);
      setCalculation(nextCalculation);
      setNumberInput("");
      return;
    }

    const lastCalcValue = calculation[calculation.length - 1];

    if (lastCalcValue === "+") {
      return;
    } else {
      let nextCalculation = [...calculation];
      nextCalculation[nextCalculation.length - 1] = "+";
      console.log(nextCalculation);
      setCalculation(nextCalculation);
      return;
    }
  }

  function enterSubtract() {
    if (numberInput.length > 0) {
      const nextCalculation = calculation.concat(numberInput, "-");
      console.log(nextCalculation);
      setCalculation(nextCalculation);
      setNumberInput("");
      return;
    }

    const lastCalcValue = calculation[calculation.length - 1];

    if (lastCalcValue === "-") {
      return;
    } else {
      let nextCalculation = [...calculation];
      nextCalculation[nextCalculation.length - 1] = "-";
      console.log(nextCalculation);
      setCalculation(nextCalculation);
      return;
    }
  }

  function enterMultiply() {
    if (numberInput.length > 0) {
      const nextCalculation = calculation.concat(numberInput, "*");
      console.log(nextCalculation);
      setCalculation(nextCalculation);
      setNumberInput("");
      return;
    }

    const lastCalcValue = calculation[calculation.length - 1];

    if (lastCalcValue === "*") {
      return;
    } else {
      let nextCalculation = [...calculation];
      nextCalculation[nextCalculation.length - 1] = "*";
      console.log(nextCalculation);
      setCalculation(nextCalculation);
      return;
    }
  }

  function enterDivide() {
    if (numberInput.length > 0) {
      const nextCalculation = calculation.concat(numberInput, "/");
      console.log(nextCalculation);
      setCalculation(nextCalculation);
      setNumberInput("");
      return;
    }

    const lastCalcValue = calculation[calculation.length - 1];

    if (lastCalcValue === "/") {
      return;
    } else {
      let nextCalculation = [...calculation];
      nextCalculation[nextCalculation.length - 1] = "/";
      console.log(nextCalculation);
      setCalculation(nextCalculation);
      return;
    }
  }

  function enterEquals() {
    const nextCalculation = [...calculation, numberInput];
    console.log(nextCalculation);
    const calculationStr = nextCalculation.join(" ");
    const result = String(eval(calculationStr));
    console.log(result);
    setNumberInput(result);
    setCalculation([]);
  }

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
      <Button type="ONE" handleClick={() => enterNumber("1")}>
        1
      </Button>
      <Button type="TWO" handleClick={() => enterNumber("2")}>
        2
      </Button>
      <Button type="THREE" handleClick={() => enterNumber("3")}>
        3
      </Button>
      <Button type="FOUR" handleClick={() => enterNumber("4")}>
        4
      </Button>
      <Button type="FIVE" handleClick={() => enterNumber("5")}>
        5
      </Button>
      <Button type="SIX" handleClick={() => enterNumber("6")}>
        6
      </Button>
      <Button type="SEVEN" handleClick={() => enterNumber("7")}>
        7
      </Button>
      <Button type="EIGHT" handleClick={() => enterNumber("8")}>
        8
      </Button>
      <Button type="NINE" handleClick={() => enterNumber("9")}>
        9
      </Button>
      <Button type="ZERO" handleClick={() => enterNumber("0")}>
        0
      </Button>
      <Button type="DECIMAL" handleClick={enterDecimal}>
        .
      </Button>
      <Button type="ADD" handleClick={enterAdd}>
        +
      </Button>
      <Button type="SUBTRACT" handleClick={enterSubtract}>
        -
      </Button>
      <Button type="MULTIPLY" handleClick={enterMultiply}>
        *
      </Button>
      <Button type="DIVIDE" handleClick={enterDivide}>
        /
      </Button>
      <Button type="EQUALS" handleClick={enterEquals}>
        =
      </Button>
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
