// src/coding/components/CounterComponent.js
import React, { useState } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CounterComponent;
