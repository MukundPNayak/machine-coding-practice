import { useMemo, useState } from "react";
import { getWinnerCombinations } from "./useTicTacToe.helper";

const initialBoard = (size) => Array(size * size).fill(null);

const useTicTacToe = (size) => {
  const [board, setBoard] = useState(initialBoard(size));
  const [isXTurn, setIsXTurn] = useState(true);

  const winners = useMemo(() => {
    return getWinnerCombinations(size);
  }, [size]);

  const calculateWinner = () => {
    for (let i = 0; i < winners.length; i++) {
      const line = winners[i];
      const first = board[line[0]];
      if (!first) continue;

      if (line.every((index) => board[index] === first)) {
        return first;
      }
    }
    return null;
  };

  const getStatusMessage = () => {
    const winner = calculateWinner();
    if (winner) return `Player ${winner} Won`;

    if (!board.includes(null)) return "Its a draw";
    const player = isXTurn ? "X" : "O";
    return `Player ${player} turn`;
  };

  const handleClick = (index) => {
    const winner = calculateWinner();
    if (board[index] || winner) return;

    setBoard((prev) => {
      const oldBoard = [...prev];
      oldBoard[index] = isXTurn ? "X" : "O";
      return oldBoard;
    });
    setIsXTurn((prev) => !prev);
  };

  const resetGame = () => {
    setBoard(initialBoard(size));
    setIsXTurn(true);
  };

  return { board, handleClick, resetGame, getStatusMessage };
};

export default useTicTacToe;
