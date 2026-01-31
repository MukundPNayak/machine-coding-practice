import React from "react";
import { MdCheck } from "react-icons/md";

import "./submitSuccess.css";

const SubmitSuccess = ({ onSubmitAnotherForm }) => {
  return (
    <div className="success">
      <div className="success-icon-container">
        <MdCheck className="success-icon" />
      </div>
      <h3>Success!</h3>
      <span>Your Form has been submitted</span>
      <button onClick={onSubmitAnotherForm} className="submit-btn">Submit Another Form</button>
    </div>
  );
};

export default SubmitSuccess;
