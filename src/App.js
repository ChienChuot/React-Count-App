import "./App.css";
import React, { useState } from "react";
const App = () => {
  //current time
  const [time, setTime] = useState(new Date());
  setInterval(() => setTime(new Date()), 1000);

  //count app
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div>
        <h1 className="h1ColorRed">Hello world</h1>
        <p>{time.toLocaleString()}</p>
      </div>
      <div className="container">
        <h1>Count App</h1>
        <p>{count}</p>
        <div>
          <button onClick={handleIncrement}>➕ Increment</button>
          <button onClick={handleReset}>🔄 Reset</button>
          <button onClick={handleDecrement}>➖ Decrement</button>
        </div>
      </div>
    </>
  );
};

export default App;
