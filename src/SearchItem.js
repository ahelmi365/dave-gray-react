import React from "react";

const SearchItem = ({ search, SetSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search" className="hidden-element">
        Search
      </label>

      <input
      className="input-field"
        type="text"
        name="search"
        id="search"
        role="searchbox"
        placeholder="Search Items"
        value={search}
        onChange={(e) => SetSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
