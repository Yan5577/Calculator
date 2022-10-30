import "./App.css";
import React, { useState } from "react";
import { evaluate } from "mathjs";
import Screen from "./screen";

function App() {
  const buttons = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    ".",
  ];
  //
  let [getState, setState] = useState({ displayNumber: "" });
  //click handle
  const clickHandle = (e) => {
    const value = e.target.value;
    console.log(value);
    setState({ displayNumber: getState.displayNumber + value });
  };

  const clickHandleSum = (e) => {
    let Calculation = getState.displayNumber;
    setState({
      displayNumber: evaluate(Calculation),
    });
  };

  return (
    <div className="container">
      <h1>Yan's Calculator</h1>
      <Screen className="screen" value={getState.displayNumber} />
      
      {/* create buttons */}
      {buttons.map((value, index) => {
        return (
          <button className="row1" value={value} onClick={clickHandle}>
            {value}
          </button>
        );
      })}
      <button className="de" onClick={() => setState({ displayNumber: "" })}>
        C
      </button>
      <button className="ev" onClick={clickHandleSum}>
        =
      </button>
      
    </div>
  );
}

export default App;
