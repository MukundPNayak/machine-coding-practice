import React from "react";

import "./amountslider.css";

function AmountSlider(props) {
  const {
    amountLabel,
    totalAmountLabel,
    totalAmount,
    id,
    min = 0,
    max = 1000,
    value,
    onChange,
  } = props;

  if (Number(value) > Number(max)) {
    onChange(max, id);
  }

  return (
    <div className="amountContainer">
      <label className="label">{amountLabel}</label>
      <label className="label total">{`${totalAmountLabel} - ${String(
        totalAmount
      ).toLocaleString()}`}</label>
      <input
        className="slider"
        type="range"
        name={id}
        id={id}
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e?.target?.value))}
      />
      <label className="label">{value}</label>
    </div>
  );
}

export default AmountSlider;
