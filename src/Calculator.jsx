import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [inputValue, setInputValue] = useState("");

  const display = (value) => {
    setInputValue(inputValue + value);
  };

  const calculate = () => {
    let answer = eval(inputValue);
    setInputValue(answer);
  };

  const clear = () => {
    setInputValue("");
  };

  return (
    <>
      <div className="container">
        <div className="calc-container">
          <input type="text" value={inputValue} />
          <div className="numbers-container">
            <span onClick={() => display("7")}>7</span>
            <span onClick={() => display("8")}>8</span>
            <span onClick={() => display("9")}>9</span>
            <span onClick={() => display("/")}>/</span>
            <span onClick={() => display("4")}>4</span>
            <span onClick={() => display("5")}>5</span>
            <span onClick={() => display("6")}>6</span>
            <span onClick={() => display("*")}>X</span>
            <span onClick={() => display("1")}>1</span>
            <span onClick={() => display("2")}>2</span>
            <span onClick={() => display("3")}>3</span>
            <span onClick={() => display("-")}>-</span>
            <span onClick={() => display("0")}>0</span>
            <span onClick={() => display(".")}>.</span>
            <span onClick={() => display("+")}>+</span>
            <span onClick={() => calculate()} className="ornage">
              =
            </span>
          </div>
          <div className="clear-container">
            <span onClick={() => clear()}>Clear</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
