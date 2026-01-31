import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import BuggyComponent from "./BuggyComponent";

const Parent = () => {

  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
};

export default Parent;
