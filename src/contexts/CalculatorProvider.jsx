import React from "react";

export const CalculatorContext = React.createContext();

function CalculatorProvider({ children }) {
  const [numberInput, setNumberInput] = React.useState("");
  const [calculation, setCalculation] = React.useState([]);
  const [isError, setIsError] = React.useState(false);

  function resetCalculator() {
    setNumberInput("");
    setCalculation([]);
  }

  const numbers = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  const operators = { add: "+", subtract: "-", multiply: "*", divide: "/" };

  const value = {
    numberInput,
    setNumberInput,
    calculation,
    setCalculation,
    numbers,
    operators,
    isError,
    setIsError,
    resetCalculator,
  };

  return <CalculatorContext value={value}>{children}</CalculatorContext>;
}

export default CalculatorProvider;
