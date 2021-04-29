import MeliLogo from "../assets/logo-meli.png";
import { Wrapper, SearchBar } from "./";
import { Link } from "react-router-dom";
import "../styles/header.scss";

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
