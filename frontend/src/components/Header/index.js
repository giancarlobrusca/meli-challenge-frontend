import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../Wrapper";
import { SearchBar } from "./SearchBar";
import MeliLogo from "../../assets/logo-meli-sm.png";
import "../../styles/header.scss";

export const Header = () => {
  return (
    <header>
      <Wrapper>
        <Link className="meli-logo" to="/">
          <img src={MeliLogo} alt="Logo Mercado Libre" />
        </Link>
        <SearchBar />
      </Wrapper>
    </header>
  );
};
