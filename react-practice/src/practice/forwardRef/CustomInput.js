import React from "react";

const CustomInput = ({ ref, placeholder }) => (
  <>
    <label>Enter text</label>
    <input ref={ref} placeholder={placeholder} />
  </>
);

export default CustomInput;
