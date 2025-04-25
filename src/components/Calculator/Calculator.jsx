import React from "react";
import styles from "./Calculator.module.css";
// import { calculatorValues } from "../../constants";
import Button from "../Button";
import Screen from "../Screen";

function Calculator() {
  return (
    <div className={styles.calculator}>
      <Screen />
      <Button type="AC">AC</Button>
      <Button type="DEL">DEL</Button>
      <Button type="DIVIDE">/</Button>
      <Button type="ONE">1</Button>
      <Button type="TWO">2</Button>
      <Button type="THREE">3</Button>
      <Button type="MULTIPLY">*</Button>
      <Button type="FOUR">4</Button>
      <Button type="FIVE">5</Button>
      <Button type="SIX">6</Button>
      <Button type="ADD">+</Button>
      <Button type="SEVEN">7</Button>
      <Button type="EIGHT">8</Button>
      <Button type="NINE">9</Button>
      <Button type="SUBTRACT">-</Button>
      <Button type="DECIMAL">.</Button>
      <Button type="ZERO">0</Button>
      <Button type="EQUALS">=</Button>
    </div>
  );
}

export default Calculator;
