import React from "react";
import MeliLogo from "../assets/logo-meli-sm.png";
import SearchIcon from "../assets/icon-search-sm.png";
import "../styles/header.scss";

export const Header = ({ handleSearchSubmit }) => {
  return (
    <header className="header">
      <nav className="content">
        <a style={{ cursor: "pointer" }} href="/">
          <img src={MeliLogo} alt="meli-logo" />
        </a>
        <form className="searchBar" onSubmit={handleSearchSubmit}>
          <input id="search" type="text" placeholder="Nunca dejes de buscar" />
          <button type="submit">
            <img src={SearchIcon} alt="search-icon" />
          </button>
        </form>
      </nav>
    </header>
  );
};
