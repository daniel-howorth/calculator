import React from "react";
import Button from "../Button";

import styles from "./ClearButton.module.css";

import { CalculatorContext } from "../../contexts/CalculatorProvider";

function ClearButton() {
  const { resetCalculator } = React.use(CalculatorContext);

  return (
    <Button
      className={styles.ac}
      handleClick={resetCalculator}
      eventKey={["c", "C"]}
    >
      AC
    </Button>
  );
}

export default ClearButton;
