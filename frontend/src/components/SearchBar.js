import React from "react";
import SearchIcon from "../assets/icon-search.png";
import { useHistory } from "react-router";
import "../styles/searchBar.scss";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const history = useHistory();

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const searchValue = event.target.elements.search.value;
    const isItemId = searchValue.substring(0, 3) === "MLA";

    if (isItemId) {
      history.push(`/items/${searchValue}`);
    } else {
      history.push(`/items?search=${encodeURIComponent(searchValue)}`);
    }

    setSearchValue("");
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        id="search"
        type="search"
        placeholder="Nunca dejes de buscar"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button type="submit">
        <img src={SearchIcon} alt="search-icon" />
      </button>
    </form>
  );
};
