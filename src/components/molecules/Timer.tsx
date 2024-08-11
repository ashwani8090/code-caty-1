// import hooks from react
import { useEffect, useState } from "react";
// create a functional component
function Timer() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalNumber = setInterval(() => {
      setCounter((c) => {
        return c + 1;
      });
    }, 1000);
    return () => {
      clearInterval(intervalNumber);
    };
  }, []);

  return (
    <div className="t-white">
      <p>Count: {counter}</p>
    </div>
  );
}

export default Timer;
