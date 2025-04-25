import React from "react";
import styles from "./Calculator.module.css";
// import { calculatorValues } from "../../constants";
import Button from "../Button";
import Screen from "../Screen";

function Calculator() {
  const [keyboardInput, setKeyboardInput] = React.useState("");

  function enterNumber(value) {
    const nextNumber = `${keyboardInput}${value}`;
    console.log(nextNumber);
    setKeyboardInput(nextNumber);
  }

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
      <Button type="DECIMAL">.</Button>
      <Button type="ADD">+</Button>
      <Button type="SUBTRACT">-</Button>

      <Button type="MULTIPLY">*</Button>
      <Button type="DIVIDE">/</Button>
      <Button type="EQUALS">=</Button>
      <Button type="AC">AC</Button>
      <Button type="DEL">DEL</Button>
    </div>
  );
}

export default Calculator;
