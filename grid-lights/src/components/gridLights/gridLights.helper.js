export const getInitialState = (size) => {
  let grid = [];

  for (let i = 0; i < size; i++) {
    grid[i] = [];

    for (let j = 0; j < size; j++) {
      if (size % 2 !== 0 && i === j && i === Math.floor(size - 1) / 2) {
        grid[i][j] = null;
      } else {
        grid[i][j] = false;
      }
    }
  }

  return grid;
};
