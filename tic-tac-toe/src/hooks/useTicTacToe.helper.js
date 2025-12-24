export const getWinnerCombinations = (size) => {
  const winners = [];
  // Generate row winners
  for (let i = 0; i < size; i++) {
    let rows = [];
    for (let j = 0; j < size; j++) {
      rows.push(i * size + j);
    }
    winners.push(rows);
  }

  // Generate column winners
  for (let i = 0; i < size; i++) {
    let columns = [];
    for (let j = 0; j < size; j++) {
      columns.push(i + size * j);
    }
    winners.push(columns);
  }

  // Generate first diagonal

  let diagonal1 = [];
  for (let i = 0; i < size; i++) {
    diagonal1.push(i * size + i);
  }

  winners.push(diagonal1);

  let diagonals2 = [];

  for (let i = 1; i <= size; i++) {
    diagonals2.push(size * i - i);
  }

  winners.push(diagonals2);

  return winners;
};


// Can use single loop