import React, { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

export default function Header({ darkMode, handleClick }) {
  const color = useContext(ThemeContext);

  return (
    <div className={`Header ${darkMode ? "header-darkmode" : "header-ligth"}`}>
      <div className="centerHeader">
        <h1 style={{ color }}>RE-React hooks</h1>
        <div>
          <button
            className={darkMode ? "button-darkmode" : "button-ligth"}
            onClick={handleClick}
            type="button"
          >
            {darkMode ? "Darkmode" : "Light"}
          </button>
        </div>
      </div>
    </div>
  );
}
