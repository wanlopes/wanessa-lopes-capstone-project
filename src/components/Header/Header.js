import SearchBar from "../SearchBar/SearchBar";
import AccountSumary from "../AccountSumary/AccountSumary";
import FilmFlogoLogo from "../../assets/FilmFlow.png";
import "./Header.scss"
import { Link } from "react-router-dom";

function Header () {
    return (
      <section className="header">
        <div className="header__logo">
          <Link to={"/"}>
            <img className="header__logo__img" src={FilmFlogoLogo} alt="logo" />
          </Link>
        </div>
        <div className="header__container">
          <SearchBar />
          <AccountSumary />
        </div>
      </section>
    );
}

export default Header;