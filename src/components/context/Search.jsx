import React from "react";

export default function Search({ search, darkMode, handleSearch, searchInput }) {
  return (
    <div className={`search ${darkMode ? "dark" : "ligth"} `}>
      <input
        ref={searchInput}
        type="text"
        placeholder="Search character"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}
