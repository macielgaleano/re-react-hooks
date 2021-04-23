import React, { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`Header ${darkMode ? "header-darkmode" : "header-ligth"}`}>
      <h1>RE-React hooks</h1>
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
  );
}
