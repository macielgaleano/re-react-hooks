import React, { useState, useEffect, useReducer, useMemo } from "react";
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

  const [search, setSeatch] = useState("");

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  const handleSearch = (e) => setSeatch(e.target.value);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) =>
        user.name.toLowerCase().includes(search.toLocaleLowerCase())
      ),
    [characters, search]
  );

  return (
    <>
      {favorites.favorites.length > 0 && (
        <>
          <h2 className={`${darkMode && "text-ligth mt-2"} m-2 mt-2`}>
            Favorite characters
          </h2>
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
      <div className={`search ${darkMode ? "dark" : "ligth"} `}>
        <input
          type="text"
          placeholder="Search character"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <h2 className={`${darkMode && "text-ligth"} m-2`}>Characters</h2>
      <div className="characters">
        {filteredUsers.map((character) => {
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
