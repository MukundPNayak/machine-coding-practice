import React, { useEffect, useMemo, useState } from "react";

import Grids from "./Grids";
import { getGridValues } from "./memoryGame.helper";

import "./memoryGame.css";

const MemoryGame = () => {
  const [size, setSize] = useState(4);
  const [maxMoves, setMaxMoves] = useState(0);
  const [grids, setGrids] = useState(getGridValues(4));
  const [clickedCards, setClickedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [currentMoves, setCurrentMoves] = useState(0);

  useEffect(() => {
    const newGrids = getGridValues(size);
    setGrids(newGrids);
    setClickedCards([]);
    setMatchedCards([]);
  }, [size]);

  // const handleGridSizeChange = (e) => {
  //   let { value } = e?.target;

  //   if (value === "") {
  //     setSize("");
  //     return;
  //   }

  //   if (value < 2) value = 2;
  //   else if (value > 10) value = 10;

  //   setSize(Number(value));
  // };
  const handleGridSizeChange = (e) => {
    const val = e.target.value;
    const num = Number(val);

    if (!Number.isNaN(num) && num >= 2 && num <= 10) {
      setSize(num);
    }
  };

  const handleMaxMoveChange = (e) => {
    const val = e.target.value;
    const num = Number(val);

    setMaxMoves(num);
    setCurrentMoves(0);
  };

  const handleResetGame = (e) => {
    setGrids(getGridValues(size));
    setClickedCards([]);
    setMatchedCards([]);
    setCurrentMoves(0);
    setMaxMoves(0);
  };

  const isWinner = useMemo(() => {
    return grids.length === matchedCards.length;
  }, [grids, matchedCards]);

  const isGameOver = useMemo(() => {
    return maxMoves !== 0 && currentMoves >= maxMoves;
  }, [currentMoves, maxMoves]);

  return (
    <div className="container">
      <div className="numInputContainer">
        <div>
          <label>Grid Size: </label>
          <input
            type="number"
            className="num-input"
            min={2}
            max={10}
            value={size}
            onChange={handleGridSizeChange}
          />
        </div>
        <div>
          <label>Max Moves(0 for Unlimited): </label>
          <input
            type="number"
            className="num-input"
            value={maxMoves}
            onChange={handleMaxMoveChange}
          />
        </div>
      </div>
      <Grids
        grids={grids}
        size={size}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
        matchedCards={matchedCards}
        setMatchedCards={setMatchedCards}
        maxMoves={maxMoves}
        currentMoves={currentMoves}
        setCurrentMoves={setCurrentMoves}
        isGameOver={isGameOver}
      />

      {isGameOver && !isWinner && <h3 className="game-over">Game Over!!!</h3>}
      {isWinner && <h3 className="winner">You Won!!</h3>}

      <button
        className={`reset-btn ${isWinner ? "play-btn" : ""}`}
        onClick={handleResetGame}
      >
        {isWinner ? "Play Again" : "Reset Game"}
      </button>
    </div>
  );
};

export default MemoryGame;
