import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);

  const onIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log("Parent render");
  return (
    <div>
      Count is {count}
      <Child onIncrement={onIncrement} />
    </div>
  );
};

export default Parent;
