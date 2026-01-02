import React, { useEffect } from "react";

import "./grids.css";

const Grids = ({
  grids,
  size,
  clickedCards,
  setClickedCards,
  matchedCards,
  setMatchedCards,
  maxMoves,
  currentMoves,
  setCurrentMoves,
  isGameOver,
}) => {
  const handleGridClick = (index) => {
    if (clickedCards.includes(index)) return;

    setClickedCards((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (clickedCards.length !== 2) return;

    setCurrentMoves((prev) => prev + 1);

    let timer;

    if (grids[clickedCards[0]] === grids[clickedCards[1]]) {
      setMatchedCards((prev) => [...prev, ...clickedCards]);
    }

    timer = setTimeout(() => {
      setClickedCards([]);
    }, 1000);

    return () => clearTimeout(timer);
  }, [clickedCards]);

  return (
    <div className="container">
      <span>
        <span>{`Moves ${currentMoves}`}</span>
        {!!maxMoves > 0 && <span>{`/ ${maxMoves}`}</span>}
      </span>
      <div
        className="grid-container"
        style={{ gridTemplateColumns: `repeat(${size},60px)` }}
      >
        {grids.map((value, index) => {
          const isClickedIndex = clickedCards.includes(index);
          const isMatchedCard = matchedCards.includes(index);

          let className = "";

          if (isClickedIndex) {
            className = "grid-clicked";
          } else if (isMatchedCard) {
            className = "grid-matched";
          }

          if (isClickedIndex || isMatchedCard) {
            return (
              <div key={index} className={`grid-item ${className}`}>
                {value}
              </div>
            );
          }

          return (
            <button
              key={index}
              className="grid-item grid-closed"
              onClick={() => handleGridClick(index)}
              disabled={clickedCards.length >= 2 || isGameOver}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Grids;
