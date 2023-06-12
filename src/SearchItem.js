import React from "react";

const SearchItem = () => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>

      <input
        type="text"
        name="search"
        id="search"
        role="searchbox"
        placeholder="Search Item"
      />
    </form>
  );
};

export default SearchItem;
