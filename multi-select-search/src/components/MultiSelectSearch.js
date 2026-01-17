import React, { useEffect, useMemo, useRef, useState } from "react";

import { AiOutlineDown } from "react-icons/ai";

import { INITIAL_OPTIONS } from "./constants";
import Chips from "./Chips";

import "./multiSelectSearch.css";

const MultiSelectSearch = () => {
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const [searchInput, setSearchInput] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [shouldShowDropdown, setShouldShowDropdown] = useState(false);

  const handleOutsideClick = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setShouldShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const filteredOptions = useMemo(() => {
    if (!searchInput) {
      return INITIAL_OPTIONS;
    }

    const updatedOptions = INITIAL_OPTIONS.filter(({ label }) => {
      return label.toLowerCase().includes(searchInput.toLowerCase());
    });

    return updatedOptions;
  }, [searchInput]);

  const handleSelectOption = (option, isOptionSelected) => {
    if (isOptionSelected) return;
    setSelectedOptions((prev) => [...prev, option]);
    setSearchInput("");
    setShouldShowDropdown(false);
    inputRef.current.focus();
  };

  return (
    <div className="container" ref={containerRef}>
      <div
        className="inputwrapper"
        onClick={() => {
          setShouldShowDropdown((prev) => !prev);
          inputRef.current.focus();
        }}
      >
        <Chips
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
        <input
          placeholder="Please Select"
          className="searchInput"
          ref={inputRef}
          value={searchInput}
          onChange={(e) => {
            setShouldShowDropdown(true);
            setSearchInput(e.target.value);
          }}
        />

        <AiOutlineDown className="dropDownIcon" />
      </div>

      {shouldShowDropdown &&
        filteredOptions.map((option) => {
          const { label, id } = option;

          const isOptionSelected = selectedOptions.find(
            (option) => option.id === id
          );

          const selectedClassName = isOptionSelected
            ? "selected-search-result"
            : "";

          return (
            <div
              className={`search-result ${selectedClassName}`}
              key={id}
              onClick={() => handleSelectOption(option, isOptionSelected)}
            >
              {label}
            </div>
          );
        })}
    </div>
  );
};

export default MultiSelectSearch;
