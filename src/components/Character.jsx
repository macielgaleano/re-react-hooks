import React from "react";

export default function Character({ character, darkMode, handleClick, favorites }) {
  return (
    <div className={`character ${darkMode ? "character-darkmode" : "character-ligth"}`}>
      <h3>{character.name} </h3>
      <h4 className={character.status === "Alive" ? "success_color" : "danger_color"}>
        {character.status}
      </h4>
      <img alt="" src={character.image}></img>
      <button
        className={darkMode ? "button-darkmode mt-2 mb-2 " : "button-ligth mt-2 mb-2 "}
        onClick={() => handleClick(character)}
      >
        Agregar a favoritos
      </button>
    </div>
  );
}
