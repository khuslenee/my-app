import React, { useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div id="counter-container">
      <h1>Counter App</h1>

      <div id="counter">
        <span id="count">{count}</span>

        <div id="button-container">
          <button id="increment" onClick={increment}>
            Increment
          </button>
          <button id="decrement" onClick={decrement}>
            Decrement
          </button>
          <button id="reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
