import React from "react";
import { Link } from "react-router-dom";

import { THEMES } from "../app.constant";
import { useTheme } from "../contexts/themeContext";

import "./header.css";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === THEMES.DARK;

  const handleToggleChange = (e) => {
    setTheme((prev) => {
      if (prev === THEMES.DARK) return THEMES.LIGHT;
      return THEMES.DARK;
    });
  };

  return (
    <div className="navbar">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/profile">
        Profile
      </Link>
      <span>Dark Mode:</span>
      <label className={`toggleBox ${isDarkMode ? "on" : ""}`}>
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={handleToggleChange}
          aria-label="Toggle Dark Mode"
        />
        <div className="knob"></div>
      </label>
    </div>
  );
};

export default Header;
