import "./App.css";
import React, { useState } from "react";
import Characters from "./components/Characters";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`App ${darkMode ? "darkmode" : "ligth"}`}>
      <Header darkMode={darkMode} handleClick={handleClick} />
      <Characters darkMode={darkMode} />
    </div>
  );
}

export default App;
