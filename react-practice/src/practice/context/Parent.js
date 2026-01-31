import React from "react";

import ChildA from "./ChildA";
import ChildB from "./ChildB";
import ChildC from "./ChildC";
import IncrementButton from "./IncrementButton";

const Parent = () => {
  console.log("Parent Rerender");

  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
      <IncrementButton />
    </>
  );
};

export default Parent;
