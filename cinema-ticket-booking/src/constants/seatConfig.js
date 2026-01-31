export const TYPES = {
  REGULAR: "REGULAR",
  PREMIUM: "PREMIUM",
  VIP: "VIP",
};

export const SEAT_CONFIG = [
  {
    type: TYPES.REGULAR,
    price: 150,
    rows: 3,
    numofSeatsPerRow: 12,
    className: "regular",
  },
  {
    price: 250,
    type: TYPES.PREMIUM,
    rows: 3,
    numofSeatsPerRow: 12,
    className: "premium",
  },
  {
    price: 350,
    type: TYPES.VIP,
    rows: 2,
    numofSeatsPerRow: 12,
    className: "vip",
  },
];
