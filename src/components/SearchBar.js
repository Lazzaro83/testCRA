import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

const SearchBar = ({setKeyword}) => {
	const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();

    console.log(e);
		navigate('/search')
  };
  return (
    <div className="app">
      <header className="appHeader">
        <form className="appForm" onSubmit={onSearchSubmit}>
          <label htmlFor="search">
            Search for the posts by title or author's name:{" "}
          </label>
          <input
            name="search"
            type="search"
            placeholder="Search for..."
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
