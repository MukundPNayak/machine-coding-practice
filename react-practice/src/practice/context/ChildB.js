import React from "react";
import AppContext, { useAppContext } from "./context";

const ChildB = () => {
  const { theme } = useAppContext(AppContext);

  console.log("ChildB render");

  return <div>Theme:{theme}</div>;
};

export default React.memo(ChildB);
