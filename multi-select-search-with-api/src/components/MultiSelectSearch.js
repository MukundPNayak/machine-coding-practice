import React, { useEffect, useRef, useState } from "react";

import "./multiSelectSearch.css";
import Pill from "./Pill";
import Results from "./Results";

const API_END_POINT = "https://dummyjson.com/users/search?q=";

const MultiSelectSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [highlightedId, setHighlightedId] = useState(-1);

  const inputRef = useRef(null);
  const wrapperRef = useRef(null);
  const resultsRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        wrapperRef.current &&
        resultsRef.current &&
        !wrapperRef.current.contains(e.target) &&
        !resultsRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.body.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.body.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const response = await fetch(`${API_END_POINT}${searchInput}`, {
          signal,
        });
        const data = await response.json();
        setOptions(data?.users);
      } catch (err) {
      } finally {
        setIsFetching(false);
      }
    };

    let timer;

    timer = setTimeout(fetchData, 400);

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [searchInput]);

  const handleOptionSelect = (option, isSelectedOption) => {
    if (isSelectedOption) return;
    setSelectedOptions((prev) => [...prev, option]);
    setSelectedIds((prev) => {
      const updatedIds = new Set(prev);
      updatedIds.add(option.id);
      return updatedIds;
    });
    inputRef.current.focus();
  };

  const handleRemoveOption = (id) => {
    const updatedOptions = selectedOptions.filter((option) => option.id !== id);
    setSelectedOptions(updatedOptions);
    setSelectedIds((prev) => {
      const updatedIds = new Set(prev);
      updatedIds.delete(id);
      return updatedIds;
    });
  };

  const handleSearchInputChange = (e) => setSearchInput(e?.target?.value);

  const handleKeyDown = (e, option, isSelectedOption) => {
    console.log("handleKeyDown");
    if (e.key === "ArrowDown") {
      setHighlightedId((prev) => {
        if (prev === options.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }

    if (e.key === "ArrowUp") {
      setHighlightedId((prev) => {
        if (prev === 0) {
          return options.length - 1;
        }
        return prev - 1;
      });
    }

    if (e.key === "Enter") {
      if (highlightedId < 0 || highlightedId >= options.length) return;
      const option = options[highlightedId];
      const isSelectedOption = selectedIds.has(option.id);
      handleOptionSelect(option, isSelectedOption);
    }

    if (e.key === "Escape") {
      setShowDropdown(false);
    }
  };

  return (
    <div className="container">
      <div
        className="input-wrapper"
        onClick={() => {
          inputRef.current.focus();
          setShowDropdown(true);
          setHighlightedId(-1);
        }}
        ref={wrapperRef}
      >
        {selectedOptions.map((option) => {
          return (
            <Pill key={option.id} {...option} onRemove={handleRemoveOption} />
          );
        })}
        <input
          value={searchInput}
          onChange={handleSearchInputChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
      </div>

      {showDropdown && (
        <Results
          options={options}
          onOptionSelect={handleOptionSelect}
          resultsRef={resultsRef}
          isFetching={isFetching}
          selectedIds={selectedIds}
          highlightedId={highlightedId}
        />
      )}
    </div>
  );
};

export default MultiSelectSearch;
