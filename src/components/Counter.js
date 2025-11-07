import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <div className="counter-display">
        <span className="counter-label">当前计数：</span>
        <span className="counter-value">{count}</span>
      </div>
      <div className="counter-buttons">
        <button className="btn btn-decrement" onClick={decrement}>
          - 减少
        </button>
        <button className="btn btn-reset" onClick={reset}>
          重置
        </button>
        <button className="btn btn-increment" onClick={increment}>
          + 增加
        </button>
      </div>
    </div>
  );
}

export default Counter;
