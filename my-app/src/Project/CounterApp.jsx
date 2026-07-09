import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease} style={{ margin: "10px" }}>
        Decrease
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterApp;