import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./otpInput.css";
import { KEY_VS_ACTION_MAPPER } from "./otpInput.constants";

const OTPInput = ({ length, setIsOTPVisble }) => {
  const [otpInput, setOtpInput] = useState(Array(length).fill(""));

  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  const handleInputChange = (e, index) => {
    let value = e?.target?.value;

    value = value.slice(-1);

    if (value.charCodeAt() < 48 || value.charCodeAt() > 57) {
      return;
    }

    let updatedOutput = [...otpInput];

    if (!value) {
      updatedOutput[index] = "";
      setOtpInput(updatedOutput);
      return;
    }

    updatedOutput[index] = value;

    setOtpInput(updatedOutput);
    if (index + 1 < length && value) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    const code = e.code;

    const keyPressHandler = KEY_VS_ACTION_MAPPER[code];
    if (keyPressHandler) {
      keyPressHandler(e, index, inputRef, length);
    }
  };

  return (
    <div className="container">
      {[...new Array(length)].map((_, i) => {
        return (
          <input
            key={i}
            className="input"
            onChange={(e) => handleInputChange(e, i)}
            value={otpInput[i]}
            ref={(el) => (inputRef.current[i] = el)}
            onKeyDown={(e) => handleKeyPress(e, i)}
          />
        );
      })}
      <button onClick={() => setIsOTPVisble(false)}> Edit Phone Number</button>
    </div>
  );
};

OTPInput.propTypes = {
  length: PropTypes.number,
};

OTPInput.defaultProps = {
  length: 4,
};

export default OTPInput;
