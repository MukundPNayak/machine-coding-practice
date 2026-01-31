import { SEAT_CONFIG } from "../../constants/seatConfig";

export const getSeatsConfig = () => {
  let charCode = 65;
  let seats = [];

  for (let i = 0; i < SEAT_CONFIG.length; i++) {
    const { rows, type, price, numofSeatsPerRow, className } = SEAT_CONFIG[i];
    for (let j = 0; j < rows; j++) {
      seats.push({
        rowId: String.fromCharCode(charCode),
        type,
        price,
        numofSeatsPerRow,
        className,
      });
      charCode++;
    }
  }
  return seats;
};
