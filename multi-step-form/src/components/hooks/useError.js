import { useState } from "react";
import { validateRequiredField } from "../helpers/validatePersonalFields";

const useError = () => {
  const [errors, setErrors] = useState({});

  const validateData = (formData, currentFormConfig) => {
    const newErrors = {};

    currentFormConfig.forEach((field) => {
      console.log(field);
      const { id, isRequired, validator, name } = field;

      if (isRequired) {
        const err = validateRequiredField(formData[id], name);
        if (err) {
          newErrors[id] = err;
          return;
        }
      }

      if (validator) {
        const err = validator(formData[id]);
        if (err) {
          newErrors[id] = err;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length > 0;
  };

  return { errors, validateData };
};

export default useError;
