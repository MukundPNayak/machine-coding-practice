import React, { useState } from "react";
import { getSeatsConfig } from "./helpers/cinematicketbooking.general";
import BookingSummary from "./BookingSummary";

import "./cinemaTicketbooking.css";

const CinemaTicketBooking = () => {
  const seatConfig = getSeatsConfig();

  const [bookedSeats, setBookedSeats] = useState(new Set());
  const [selectedSeatIds, setSelectedSeatIds] = useState(new Set());
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSeatBooking = () => {
    setBookedSeats((prev) => {
      const prevSet = new Set(prev);
      const currentSet = new Set(selectedSeatIds);
      return new Set([...prevSet, ...currentSet]);
    });
    setTotalPrice(0);
    setSelectedSeatIds(new Set());
  };

  const handleSelectSeat = (id, price) => {
    if (selectedSeatIds.has(id)) {
      setSelectedSeatIds((prev) => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
      setTotalPrice((prev) => prev - price);
    } else {
      setSelectedSeatIds((prev) => {
        const newSet = new Set(prev);
        newSet.add(id);
        return newSet;
      });
      setTotalPrice((prev) => prev + price);
    }
  };

  return (
    <div className="container">
      {seatConfig.map((row) => {
        const { rowId, numofSeatsPerRow, price, type, className } = row;
        return (
          <div className="row" key={rowId}>
            <span className="row-name">{rowId}</span>
            <div className="seats">
              {Array(numofSeatsPerRow)
                .fill("")
                .map((_, colId) => {
                  const id = `${rowId}${colId + 1}`;
                  const isSeatSelected = selectedSeatIds.has(id);
                  const selectedClass = isSeatSelected ? "selected" : "";
                  const booked = bookedSeats.has(id);
                  const bookedClass = booked ? "booked" : "";
                  return (
                    <button
                      className={`select-btn ${className} ${selectedClass} ${bookedClass}`}
                      key={id}
                      onClick={() => handleSelectSeat(id, price)}
                      disabled={booked}
                    >
                      {colId + 1}
                    </button>
                  );
                })}
            </div>
          </div>
        );
      })}
      <BookingSummary
        totalPrice={totalPrice}
        selectedSeatIds={selectedSeatIds}
      />
      <button
        className="book-btn"
        disabled={selectedSeatIds.size === 0}
        onClick={handleSeatBooking}
      >
        {selectedSeatIds.size
          ? `Book ${selectedSeatIds.size} Seat(s) - ${totalPrice}Rs`
          : "Select Seats to Book"}
      </button>
    </div>
  );
};

export default CinemaTicketBooking;
