import React, { useState } from "react";

import { NUMBER_FIELD_CONFIG } from "./constants/emiCalculator.fieldConfig";
import { INITIAL_STATE } from "./constants/emiCalculator.general";
import TenureSelector from "./components/tenureSelector";
import { FIELD_IDS } from "./constants/emiCalculator.fieldIds";
import AmountSlider from "./components/amountSlider";
import {
  calculateDownpayment,
  calculateEMI,
} from "./helpers/emiCalculator.general";

import "./emiCalculator.css";

function EMICalculator() {
  const [data, setData] = useState(INITIAL_STATE);

  const handleNumberInputChange = (e, id, onChange) => {
    const { value } = e?.target;

    let updatedValue = Number(value);

    if (value.trim() === "") {
      setData((prev) => ({
        ...prev,
        [id]: "",
      }));
      return;
    }

    if (onChange) {
      onChange(updatedValue, id, setData);
      return;
    }

    if (updatedValue < 0) {
      updatedValue = 0;
    }

    setData((prev) => ({
      ...prev,
      [id]: updatedValue,
    }));
  };

  const handleTenureChange = (tenure) => {
    setData((prev) => ({
      ...prev,
      [FIELD_IDS.TENURE]: tenure,
    }));
  };

  const handleDownpaymentChange = (value) => {
    const emi = calculateEMI(data, Number(value));

    setData((prev) => ({
      ...prev,
      [FIELD_IDS.TOTAL_DOWN_PAYMENT]: value,
      [FIELD_IDS.LOAN_PER_MONTH]: emi,
    }));
  };

  const handleEMIChange = (value) => {
    const downPayment = calculateDownpayment(value, data);

    setData((prev) => ({
      ...prev,
      [FIELD_IDS.TOTAL_DOWN_PAYMENT]: downPayment,
      [FIELD_IDS.LOAN_PER_MONTH]: value,
    }));
  };

  const processingFee = Number(data[FIELD_IDS.PROCESSING_FEE]);
  const loanAmount =
    Number(data[FIELD_IDS.TOTAL_COST]) -
    Number(data[FIELD_IDS.TOTAL_DOWN_PAYMENT]);
  let totalDownPayment =
    Number(data[FIELD_IDS.TOTAL_DOWN_PAYMENT]) +
    loanAmount * (processingFee / 100);
  totalDownPayment = isNaN(totalDownPayment) ? 0 : totalDownPayment;

  let totalLoanAmount =
    Number(data[FIELD_IDS.LOAN_PER_MONTH]) * Number(data[FIELD_IDS.TENURE]);

  totalLoanAmount = isNaN(totalLoanAmount) ? 0 : totalLoanAmount;

  return (
    <div className="container">
      <h1>EMI Calculator</h1>
      {NUMBER_FIELD_CONFIG.map((field) => {
        const { id, label, onChange } = field;
        const value = data[id];
        return (
          <div key={id} className="inputContainer">
            <label className="label">{label}</label>
            <input
              className="numberInput"
              type="number"
              name={id}
              value={value}
              onChange={(e) => handleNumberInputChange(e, id, onChange)}
            />
          </div>
        );
      })}
      <AmountSlider
        amountLabel="Down Payment"
        totalAmountLabel="Total Down Payment"
        max={data[FIELD_IDS.TOTAL_COST]}
        min={0}
        onChange={handleDownpaymentChange}
        id={FIELD_IDS.TOTAL_DOWN_PAYMENT}
        value={data[FIELD_IDS.TOTAL_DOWN_PAYMENT]}
        totalAmount={totalDownPayment}
      />
      <AmountSlider
        amountLabel="Loan Per Month"
        totalAmountLabel="Total Loan Amount"
        min={0}
        max={calculateEMI(data, 0)}
        onChange={handleEMIChange}
        id={FIELD_IDS.LOAN_PER_MONTH}
        value={data[FIELD_IDS.LOAN_PER_MONTH]}
        totalAmount={totalLoanAmount}
      />
      <TenureSelector
        onTenureChange={handleTenureChange}
        selectedTenure={data[FIELD_IDS.TENURE]}
      />
    </div>
  );
}

export default EMICalculator;
