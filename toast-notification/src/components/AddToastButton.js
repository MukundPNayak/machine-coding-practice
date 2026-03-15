import React from "react";
import { TOAST_TYPES, TOAST_TYPES_VS_MESSAGE } from "../constants/toastTypes";
import useToast from "../hooks/useToast";

import "./addToastButton.css";
import { TOAST_BUTTON_CONFIG } from "../constants/toastButtonConfig";

const AddToastButton = ({ type = TOAST_TYPES.INFO }) => {
  const message = TOAST_TYPES_VS_MESSAGE[type];

  const { onAddNewToast } = useToast();

  const { className: btnClass, label } = TOAST_BUTTON_CONFIG[type];

  return (
    <div>
      <button
        className={`btn ${btnClass}`}
        onClick={() => onAddNewToast({ type, message })}
      >
        {label}
      </button>
    </div>
  );
};

export default AddToastButton;
