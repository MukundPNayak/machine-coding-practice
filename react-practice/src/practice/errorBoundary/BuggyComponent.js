import React from "react";

const BuggyComponent = () => {
  throw new Error("error");
  return <div>BuggyComponent</div>;
};

export default BuggyComponent;
