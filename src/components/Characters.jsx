import React, { useState, useEffect, useReducer } from "react";
import Character from "./Character";

const initialState = {
  favorites: [],
};

const favoriteReducers = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      if (state.favorites.filter((favorite) => favorite === action.payload).length > 0) {
        return {
          ...state,
          favorites: [
            ...state.favorites.filter((favorite) => favorite !== action.payload),
            action.payload,
          ],
        };
      } else {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }

    default:
      return state;
  }
};

export default function Characters({ darkMode }) {
  const [favorites, dispatch] = useReducer(favoriteReducers, initialState);
  const [characters, setCharacters] = useState([]);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <>
      {favorites.favorites.length > 0 && (
        <>
          <h2 className={`${darkMode && "text-ligth"} m-2`}>Favorite characters</h2>
          <div className="characters">
            {favorites &&
              favorites.favorites.length > 0 &&
              favorites.favorites.map((character) => {
                return (
                  <Character
                    key={character.id}
                    favorites={favorites}
                    darkMode={darkMode}
                    handleClick={() => {}}
                    character={character}
                  ></Character>
                );
              })}
          </div>
        </>
      )}
      <h2 className={`${darkMode && "text-ligth"} m-2`}>Characters</h2>
      <div className="characters">
        {characters.map((character) => {
          return (
            <Character
              key={character.id}
              favorites={favorites}
              darkMode={darkMode}
              handleClick={handleClick}
              character={character}
            ></Character>
          );
        })}
      </div>
    </>
  );
}
