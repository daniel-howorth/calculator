import React from "react";

export const CalculatorContext = React.createContext();

function CalculatorProvider({ children }) {
  const [numberInput, setNumberInput] = React.useState("");
  const [calculation, setCalculation] = React.useState([]);

  const operators = { ADD: "+", SUBTRACT: "-", MULTIPLY: "*", DIVIDE: "/" };

  const value = {
    numberInput,
    setNumberInput,
    calculation,
    setCalculation,
    operators,
  };

  return <CalculatorContext value={value}>{children}</CalculatorContext>;
}

export default CalculatorProvider;
