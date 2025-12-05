import React, { useState } from "react";

import {
  CHECKBOX_CONFIG,
  CHECKBOX_OPTIONS,
  INITIAL_CHECKBOX_STATE,
} from "./constants/passwordGenerator.general";

import "./passwordGenerator.css";

const PassWordGenerator = (props) => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(7);
  const [letters, setLetters] = useState(INITIAL_CHECKBOX_STATE);

  const isNoOptionSelected = letters.length === 0;

  const handleCheckboxClick = (e, id) => {
    const { checked } = e?.target;

    let updatedLetters;

    if (checked) {
      updatedLetters = [...letters, id];
    } else {
      updatedLetters = letters.filter((ele) => ele !== id);
    }

    setLetters(updatedLetters);
  };

  const determinePassWordStrength = () => {
    if (password.length < 7 || letters.length === 1) return "Weak";

    if (password.length > 7 && letters.length > 2) return "Strong";

    return "Medium";
  };

  const handleGeneratePassword = () => {
    let charSet = "";

    if (letters.includes(CHECKBOX_OPTIONS.LOWER_CASE)) {
      charSet += "abcdefghijklmnopqrstuvwxyz";
    }

    if (letters.includes(CHECKBOX_OPTIONS.UPPER_CASE)) {
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (letters.includes(CHECKBOX_OPTIONS.NUMBER)) {
      charSet += "1234567890";
    }

    if (letters.includes(CHECKBOX_OPTIONS.SYMBOL)) {
      charSet += "!@#$%^&*()_+=-~`:;<,>.?/";
    }

    const n = charSet.length;

    let generatedPassword = "";

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * n);
      generatedPassword += charSet[index];
    }

    setPassword(generatedPassword);
  };

  console.log("rendered", letters);

  return (
    <div className="container">
      {password && (
        <div className="password">
          <span>{password}</span>
          <button
            className="copy"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
        </div>
      )}
      <div className="character">
        <label>Character Length</label>
        <span>{length}</span>
      </div>

      <input
        type="range"
        min={1}
        max={20}
        value={length}
        onChange={(e) => setLength(Number(e?.target?.value))}
      />

      <div className="checkboxContainer">
        {CHECKBOX_CONFIG.map((field) => {
          const { id, label } = field;

          const checked = letters.includes(id);

          return (
            <span key={id} className="checkbox">
              <input
                type="checkbox"
                id={id}
                name={id}
                onChange={(e) => handleCheckboxClick(e, id)}
                checked={checked}
              />
              <label id={id}>{label}</label>{" "}
            </span>
          );
        })}
      </div>
      {password && (
        <div className="strength">
          <span>Strength:</span>
          <span>{determinePassWordStrength()}</span>
        </div>
      )}

      <button
        className="generate"
        onClick={handleGeneratePassword}
        disabled={isNoOptionSelected}
        title={
          isNoOptionSelected && "Please select atlease one checkbox to continue"
        }
      >
        Generate PassWord
      </button>
    </div>
  );
};

export default PassWordGenerator;
