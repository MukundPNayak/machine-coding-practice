import React, { useMemo, useState } from "react";
import { INITIAL_OPTIONS } from "./pollWidget.constants";

import "./pollWidget.css";

const PollWidget = ({ isMultiple }) => {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleOptionSelectForCheckbox = (e) => {
    const { checked, id, type } = e.target;

    if (type === "radio") {
      setSelectedIds([id]);
      return;
    }

    if (checked) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => {
        const updatedSelectedIds = prev.filter((itemId) => itemId !== id);
        return updatedSelectedIds;
      });
    }
  };

  const isVoted = useMemo(() => {
    return selectedIds.length > 0;
  }, [selectedIds]);

  const computedOptions = useMemo(() => {
    const updatedOptions = INITIAL_OPTIONS.map((option) => {
      if (selectedIds.includes(option.id)) {
        return {
          ...option,
          votes: option.votes + 1,
        };
      }
      return option;
    });
    return updatedOptions;
  }, [selectedIds]);

  const totalVotes = useMemo(() => {
    return computedOptions.reduce((acc, curr) => {
      return acc + curr.votes;
    }, 0);
  }, [computedOptions]);

  const handleRemoveVote = () => {
    setSelectedIds([]);
  };

  return (
    <div className="container">
      <h2>Which frontend library do you prefer?</h2>
      {computedOptions.map(({ id, label, votes }) => {
        const votePercentage = ((votes / totalVotes) * 100).toFixed(1);
        return (
          <div key={id} className="poll-option">
            <div className="option-text">
              <input
                type={isMultiple ? "checkbox" : "radio"}
                value={id}
                checked={selectedIds.includes(id)}
                onChange={handleOptionSelectForCheckbox}
                id={id}
              />
              <label htmlFor={id}>{label}</label>
              {isVoted && (
                <span className="votes">{`${votes} Votes (${votePercentage} % )`}</span>
              )}
            </div>
            <div className="progress-bar">
              <div
                className="progress-filled"
                style={{ width: `${isVoted ? votePercentage : 0}%` }}
              ></div>
            </div>
          </div>
        );
      })}
      <button
        className="remove-btn"
        onClick={handleRemoveVote}
        disabled={!isVoted}
      >
        Remove Vote
      </button>
    </div>
  );
};

export default PollWidget;
