import { useHistory } from "react-router";
import SearchIcon from "../../assets/icon-search-sm.png";
import "../../styles/searchBar.scss";

export const SearchBar = () => {
  const history = useHistory();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value;

    if (searchValue.substring(0, 3) === "MLA") {
      history.push(`/items/${searchValue}`);
    } else {
      history.push(`/items?search=${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input id="search" type="search" placeholder="Nunca dejes de buscar" />
      <button type="submit">
        <img src={SearchIcon} alt="search-icon" />
      </button>
    </form>
  );
};
