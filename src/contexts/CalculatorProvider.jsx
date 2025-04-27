import React from "react";

export const CalculatorContext = React.createContext();

function CalculatorProvider({ children }) {
  const [numberInput, setNumberInput] = React.useState("");
  const [calculation, setCalculation] = React.useState([]);

  const numbers = {
    ZERO: "0",
    ONE: "1",
    TWO: "2",
    THREE: "3",
    FOUR: "4",
    FIVE: "5",
    SIX: "6",
    SEVEN: "7",
    EIGHT: "8",
    NINE: "9",
  };

  const operators = { ADD: "+", SUBTRACT: "-", MULTIPLY: "*", DIVIDE: "/" };

  const value = {
    numberInput,
    setNumberInput,
    calculation,
    setCalculation,
    numbers,
    operators,
  };

  return <CalculatorContext value={value}>{children}</CalculatorContext>;
}

export default CalculatorProvider;
