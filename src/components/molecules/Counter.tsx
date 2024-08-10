import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center ">
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrement
      </button>

      <p className="t-white px--2">Count: {count}</p>

      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
// ```
// Don’t call Hooks inside loops, conditions, or nested functions.

// Don’t call Hooks from regular JavaScript functions.

// ```;
