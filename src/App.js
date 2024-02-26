import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        if (!input.trim()) {
          throw new Error("Error");
        }
        const result = eval(input);
        if (isNaN(result)) {
          setOutput("NaN");
        } else if (!isFinite(result)) {
          setOutput("Infinity");
        } else {
          setOutput(result.toString());
        }
      } catch (error) {
        setOutput("Error");
      }
    } else if (value === "C") {
      setInput("");
      setOutput("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="output">{output}</div>
      <div className="buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("C")}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("=")}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
}
