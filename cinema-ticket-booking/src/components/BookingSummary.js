import React from "react";

import "./bookingSummary.css";

const BookingSummary = ({ totalPrice, selectedSeatIds }) => {
  return (
    <div className="booking-summary">
      <h2 className="heading">Booking Summary</h2>
      {selectedSeatIds.size === 0 && <span>No Seats Selected</span>}
      {selectedSeatIds.size > 0 && (
        <>
          <span>
            Selected Seats:
            {Array.from(selectedSeatIds).map((seatId, index) => {
              return `${seatId} ${
                index < selectedSeatIds.size - 1 ? "," : ""
              } `;
            })}
          </span>
          <span>Number of Seats: {selectedSeatIds.size}</span>
          <h3 className="total">Total: {totalPrice}Rs.</h3>
        </>
      )}
    </div>
  );
};

export default BookingSummary;
