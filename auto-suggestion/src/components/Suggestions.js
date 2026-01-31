import React from "react";

const Suggestions = (props) => {
  const {
    suggestionsRef,
    suggestions,
    highlightedSuggestion,
    handleSelectSuggestion,
    loading,
  } = props;

  return (
    <div className="suggestion-container" ref={suggestionsRef}>
      {loading && <div>Loading....</div>}
      {suggestions.length === 0 && !loading && <div>No Search Results Found..</div>}
      {suggestions.length > 0 &&
        !loading &&
        suggestions.map((suggestion, index) => {
          const { id, name } = suggestion;
          const isHighlighted = highlightedSuggestion === index;
          const highlightedClassName = isHighlighted ? "highlighted" : "";
          return (
            <div
              key={id}
              className={`suggestion ${highlightedClassName}`}
              onClick={() => handleSelectSuggestion(name)}
            >
              {name}
            </div>
          );
        })}
    </div>
  );
};

export default Suggestions;
