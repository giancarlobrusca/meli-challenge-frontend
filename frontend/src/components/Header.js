import MeliLogo from "../assets/logo-meli-sm.png";
import SearchIcon from "../assets/icon-search-sm.png";
import "../styles/header.scss";

export const Header = () => {
  return (
    <header className="header">
      <nav className="content">
        <img src={MeliLogo} alt="meli-logo" />
        <form className="searchBar" onSubmit={() => alert("Submitted")}>
          <input type="text" placeholder="Nunca dejes de buscar" />
          <button type="submit">
            <img src={SearchIcon} alt="search-icon" />
          </button>
        </form>
      </nav>
    </header>
  );
};
