import { useState } from "react";
import { validateRequiredField } from "../helpers/validatePersonalFields";

const useError = () => {
  const [errors, setErrors] = useState({});

  const validateData = (formData, currentFormConfig) => {
    const newErrors = {};

    currentFormConfig.forEach((field) => {
      const { id, isRequired, validator, name } = field;
      const value = formData[id];

      let error = null;

      if (isRequired) {
        error = validateRequiredField(value, name);
      }

      if (!error && validator) {
        error = validator(value);
      }

      if (error) {
        newErrors[id] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length > 0;
  };

  return { errors, validateData };
};

export default useError;
