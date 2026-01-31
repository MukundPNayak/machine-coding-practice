import React from "react";
import AppContext, { useAppContext } from "./context";

const ChildA = () => {
  const { count } = useAppContext(AppContext);

  console.log("ChildA rerender");

  return <div>Count:{count}</div>;
};

export default React.memo(ChildA);
