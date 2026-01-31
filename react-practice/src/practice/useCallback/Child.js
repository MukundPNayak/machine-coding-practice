import React, { memo } from "react";

const Child = ({ onIncrement }) => {
  console.log("Child rerender");

  return <button onClick={onIncrement}>Increment</button>;
};

export default memo(Child);
