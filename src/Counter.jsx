import { useState } from "react";
import "./App.css";
import React from "react";

function Counter() {
   let [counter, setCounter] = useState(0);

  let addValue = () => setCounter(counter + 1);
  
  let subtractValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
     <h2 className="bg-red-300">Counter App</h2>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <button onClick={subtractValue}>Subtract Value</button>
    </>
  );
}

export default Counter;
