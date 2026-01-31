import React, { useRef } from "react";
import CustomInput from "./CustomInput";

const Parent = () => {
  const ref = useRef();

  const focusInput = () => {
    ref.current.focus();
  };

  return (
    <div>
      <CustomInput ref={ref} placeholder='Type here'/>
      <button onClick={focusInput}>Click here to focus</button>
    </div>
  );
};

export default Parent;
