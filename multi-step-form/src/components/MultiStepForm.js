import React, { useState } from "react";

import Form from "./Form";
import Stepper from "./Stepper";
import { TAB_CONFIG } from "./constants/multiStepForm.tabs";
import useError from "./hooks/useError";
import SubmitSuccess from "./SubmitSuccess";

import "./multiStepForm.css";

const MultiStepForm = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { errors, validateData } = useError();

  const handleUpdateFormData = (value, fieldId) => {
    setFormData((prev) => {
      return {
        ...prev,
        [fieldId]: value,
      };
    });
  };

  const currentTabConfig = TAB_CONFIG[currentTabIndex];

  const currentFormConfig = currentTabConfig.fieldConfig;

  const handlePreviousClick = () => {
    setCurrentTabIndex((prev) => prev - 1);
  };

  const handleNextClick = () => {
    const isErrorPresent = validateData(formData, currentFormConfig);
    if (isErrorPresent) return;
    setCurrentTabIndex((prev) => prev + 1);
  };

  const handleSubmit = () => {
    const isErrorPresent = validateData(formData, currentFormConfig);
    if (isErrorPresent) return;
    //Submit logic
    setIsSubmitted(true);
    console.log(formData);
  };

  const handleSubmitAnotherForm = () => {
    setIsSubmitted(false);
    setCurrentTabIndex(0);
    setFormData({});
  };

  if (isSubmitted) {
    return (
      <div className="container">
        <SubmitSuccess onSubmitAnotherForm={handleSubmitAnotherForm} />
      </div>
    );
  }

  return (
    <div className="container">
      <Stepper currentTabIndex={currentTabIndex} />
      <h3>{currentTabConfig.heading}</h3>
      <Form
        formConfig={currentFormConfig}
        onChange={handleUpdateFormData}
        formData={formData}
        errors={errors}
      />
      <div className="btn-container">
        <button
          disabled={currentTabIndex === 0}
          onClick={handlePreviousClick}
        >{`Previous`}</button>
        {currentTabIndex < TAB_CONFIG.length - 1 && (
          <button onClick={handleNextClick}>{`Next`}</button>
        )}
        {currentTabIndex === TAB_CONFIG.length - 1 && (
          <button onClick={handleSubmit}>{`Submit`}</button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
