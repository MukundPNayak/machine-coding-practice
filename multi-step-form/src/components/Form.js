import React from "react";
import { TYPE_VS_RENDERER } from "./constants/multiStepForm.inputTypes";
import TextInput from "./formInput/textInput/TextInput";

import "./form.css";

const Form = ({ formConfig, onChange, formData, errors }) => {
  return (
    <div>
      {formConfig.map((field) => {
        const { id, name, type, options, placeHolder } = field;
        const Renderer = TYPE_VS_RENDERER[type] || TextInput;

        return (
          <div key={id}>
            <Renderer
              id={id}
              name={name}
              value={formData[id]}
              onChange={onChange}
              options={options}
              placeHolder={placeHolder}
            />
            {errors[id] && <span className="error">{errors[id]}</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Form;
