import React, { useState, useEffect } from "react";
import Character from "./Character";

export default function Characters({ darkMode }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="characters">
      {characters.map((character) => {
        return <Character darkMode={darkMode} character={character}></Character>;
      })}
    </div>
  );
}
