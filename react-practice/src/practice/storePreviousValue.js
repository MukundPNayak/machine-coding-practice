import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="App">
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase Count
      </button>
      <div>New Count is {count}</div>
      <div>Old Count is {prevCountRef.current}</div>
    </div>
  );
}

export default App;
