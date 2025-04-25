import React from "react";
import styles from "./Calculator.module.css";
import Button from "../Button";
import Screen from "../Screen";

function Calculator() {
  const [calculationString, setCalculationString] = React.useState("");
  const [numberInput, setNumberInput] = React.useState("");

  function enterNumber(value) {
    const nextNumber = `${numberInput}${value}`;
    console.log(nextNumber);
    setNumberInput(nextNumber);

    const nextCalculationString = `${calculationString}${value}`;
    console.log(nextCalculationString);
    setCalculationString(nextCalculationString);
  }

  function enterDecimal() {
    const nextNumber = `${numberInput}.`;
    console.log(nextNumber);
    setNumberInput(nextNumber);

    const nextCalculationString = `${calculationString}.`;
    console.log(nextCalculationString);
    setCalculationString(nextCalculationString);
  }

  function enterAdd() {
    setNumberInput("");

    let nextCalculationString;
    const lastCalcStringChar = calculationString[calculationString.length - 1];

    if (/^[+\-*/]$/.test(lastCalcStringChar)) {
      nextCalculationString = calculationString.slice(0, -1) + "+";
    } else {
      nextCalculationString = `${calculationString}+`;
    }
    console.log(nextCalculationString);
    setCalculationString(nextCalculationString);
  }

  function enterSubtract() {
    setNumberInput("");

    let nextCalculationString;
    const lastCalcStringChar = calculationString[calculationString.length - 1];

    if (/^[+\-*/]$/.test(lastCalcStringChar)) {
      nextCalculationString = calculationString.slice(0, -1) + "-";
    } else {
      nextCalculationString = `${calculationString}-`;
    }
    console.log(nextCalculationString);
    setCalculationString(nextCalculationString);
  }

  function enterMultiply() {
    setNumberInput("");

    let nextCalculationString;
    const lastCalcStringChar = calculationString[calculationString.length - 1];

    if (/^[+\-*/]$/.test(lastCalcStringChar)) {
      nextCalculationString = calculationString.slice(0, -1) + "*";
    } else {
      nextCalculationString = `${calculationString}*`;
    }
    console.log(nextCalculationString);
    setCalculationString(nextCalculationString);
  }

  function enterDivide() {
    setNumberInput("");

    let nextCalculationString;
    const lastCalcStringChar = calculationString[calculationString.length - 1];

    if (/^[+\-*/]$/.test(lastCalcStringChar)) {
      nextCalculationString = calculationString.slice(0, -1) + "/";
    } else {
      nextCalculationString = `${calculationString}/`;
    }
    console.log(nextCalculationString);
    setCalculationString(nextCalculationString);
  }

  // function del() {

  // }

  return (
    <div className={styles.calculator}>
      <Screen />
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
      <Button type="EQUALS">=</Button>
      <Button type="AC">AC</Button>
      <Button type="DEL">DEL</Button>
    </div>
  );
}

export default Calculator;
