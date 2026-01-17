import React from "react";

import "./multiSelectSearch.css";

const Results = (props) => {
  const {
    options,
    resultsRef,
    onOptionSelect,
    isFetching,
    selectedIds,
    highlightedId,
  } = props;

  if (isFetching) return <div className="results-container">Loading...</div>;

  if (options.length <= 0)
    return <div className="results-container">No Results Found</div>;

  return (
    <div className="results-container" ref={resultsRef}>
      {options.map((user, index) => {
        const isSelectedOption = selectedIds.has(user.id);

        const selectedOptionClass = isSelectedOption ? "selected" : "";

        const highlightedClass = highlightedId === index ? "highlighted" : "";

        return (
          <div
            key={user.id}
            className={`result  ${highlightedClass} ${selectedOptionClass}`}
            onClick={() => onOptionSelect(user, isSelectedOption)}
          >
            {`${user.firstName} ${user.lastName}`}{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Results;
