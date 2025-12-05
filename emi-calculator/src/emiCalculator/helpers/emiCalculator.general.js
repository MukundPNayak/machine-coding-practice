import { FIELD_IDS } from "../constants/emiCalculator.fieldIds";

export const calculateEMI = (data, downPayment) => {
  const dp = downPayment ?? Number(data[FIELD_IDS.TOTAL_DOWN_PAYMENT]);

  const P = Number(data[FIELD_IDS.TOTAL_COST]) - dp;
  const R = Number(data[FIELD_IDS.INTEREST_RATE]) / 100;
  const N = Number(data[FIELD_IDS.TENURE]) / 12;

  const emi = (P * R * (1 + R) ** N) / ((1 + R) ** N - 1);

  return (emi / 12).toFixed(0);
};

export const calculateDownpayment = (emi, data) => {
  emi = Number(emi);
  const cost = Number(data[FIELD_IDS.TOTAL_COST]);
  const downPaymentPercent = 100 - (emi / calculateEMI(data, 0)) * 100;
  return Number((downPaymentPercent / 100) * cost).toFixed(0);
};
