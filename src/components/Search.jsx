import React from "react";
import { useGlobalContext } from "../Context";

const Search = () => {
  const context = useGlobalContext();
  const { handleInput, text, handleSearch, handleSurprise } = context;
  return (
    <header className="mt-3">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          className="rounded p-1"
          value={text}
          onChange={handleInput}
        />
        <button type="submit" className="btn btn-success mx-2">
          Search
        </button>
        <button type="button" className="btn btn-hipster" onClick={handleSurprise}>
          Surprise Me
        </button>
      </form>
    </header>
  );
};

export default Search;
