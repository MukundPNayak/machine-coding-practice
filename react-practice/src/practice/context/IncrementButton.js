import React, { useContext } from "react";
import AppContext, { useAppContext } from "./context";

const IncrementButton = () => {
  const { increment } = useAppContext(AppContext);

  console.log("Increment Button render");

  return <button onClick={increment}>IncrementButton</button>;
};

export default React.memo(IncrementButton);
