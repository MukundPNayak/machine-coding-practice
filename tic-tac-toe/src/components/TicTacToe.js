import React from "react";

import "./ticTacToe.css";
import useTicTacToe from "../hooks/useTicTacToe";

const TicTacToe = (props) => {
  const { size } = props;

  const { board, handleClick, resetGame, getStatusMessage } =
    useTicTacToe(size);

  return (
    <div className="game" style={{ width: `${size * 70}px` }}>
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <div
        className="board"
        style={{ gridTemplateColumns: `repeat(${size},1fr)` }}
      >
        {board.map((b, index) => {
          return (
            <button
              className="button"
              key={index}
              onClick={() => handleClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
