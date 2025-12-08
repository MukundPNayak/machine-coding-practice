import React, { useState } from "react";

import "./phoneInput.css";

const PhoneInput = ({ setIsOTPVisble,phone,setPhone,error,setError }) => {
 

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;

    if (value.length > 10) {
      return;
    }

    for (let i = 0; i < value.length; i++) {
      if (value[i].charCodeAt() < 48 || value[i].charCodeAt() > 57) {
        return;
      }
    }

    setPhone(value);
    setError("");
  };

  return (
    <div className="phoneContainer">
      <h2>Enter Phone Number to Continue</h2>
      <input
        className="phoneInput"
        type="text"
        onChange={handlePhoneNumberChange}
        value={phone}
      ></input>
      {error && <span className="error">{error}</span>}
      {!error && phone.length === 10 && (
        <button onClick={() => setIsOTPVisble(true)}>Send OTP</button>
      )}
    </div>
  );
};

export default PhoneInput;
