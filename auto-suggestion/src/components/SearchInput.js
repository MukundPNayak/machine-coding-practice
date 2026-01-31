import React, { useEffect, useState, useRef, useCallback } from "react";

import Suggestions from "./Suggestions";

import "./searchInput.css";

const API_ENDPOINT = "https://dummyjson.com/recipes/search?q=";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [highlightedSuggestion, setHighlightedSuggestion] = useState(-1);
  const [loading, setLoading] = useState(false);

  const suggestionsRef = useRef(null);
  const inputRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (
      !!suggestionsRef.current &&
      !suggestionsRef.current.contains(e.target) &&
      !!inputRef.current &&
      !inputRef.current.contains(e.target)
    ) {
      setIsSuggestionsOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.body.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const abortRef = useRef(null);

  const fetchData = useCallback(async (searchQuery) => {
    const cache = JSON.parse(localStorage.getItem("searchCache")) || {};
    if (cache[searchInput]) {
      abortRef.current?.abort();
      setSuggestions(cache[searchInput]);
      setLoading(false);
      setHighlightedSuggestion(-1);
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    try {
      setLoading(true);
      const response = await fetch(`${API_ENDPOINT}${searchQuery}`, {
        signal: controller.signal,
      });
      const data = await response.json();
      const options = data.recipes.map((recipe) => {
        const { id, name } = recipe;
        return {
          id,
          name,
        };
      });
      setSuggestions(options);
      setHighlightedSuggestion(-1);
      
      localStorage.setItem(
        "searchCache",
        JSON.stringify({ ...cache, [searchQuery]: options }),
      );
    } catch (err) {
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData(searchInput);
    }, 400);

    return () => clearTimeout(timeout);
  }, [searchInput, fetchData]);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    setIsSuggestionsOpen(true);
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchInput(suggestion);
    setIsSuggestionsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightedSuggestion((prev) => {
        if (prev === suggestions.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    } else if (e.key === "ArrowUp") {
      setHighlightedSuggestion((prev) => {
        if (prev === 0) {
          return suggestions.length - 1;
        }
        return prev - 1;
      });
    } else if (e.key === "Enter") {
      if (highlightedSuggestion === -1) return;
      setSearchInput(suggestions[highlightedSuggestion].name);
      setHighlightedSuggestion(-1);
      setIsSuggestionsOpen(false);
    }
  };

  const handleFocus = () => {
    if (suggestions.length === 0) return;
    setIsSuggestionsOpen(true);
  };

  return (
    <div className="container">
      <input
        className="search-input"
        onChange={handleSearchInputChange}
        value={searchInput}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        onFocus={handleFocus}
      />
      {isSuggestionsOpen && (
        <Suggestions
          isSuggestionsOpen={isSuggestionsOpen}
          suggestionsRef={suggestionsRef}
          suggestions={suggestions}
          handleSelectSuggestion={handleSelectSuggestion}
          highlightedSuggestion={highlightedSuggestion}
          setHighlightedSuggestion={setHighlightedSuggestion}
          loading={loading}
        />
      )}
    </div>
  );
};

export default SearchInput;
