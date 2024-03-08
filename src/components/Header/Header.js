import SearchBar from "../SearchBar/SearchBar";
import AccountSumary from "../AccountSumary/AccountSumary";
import FilmFlogoLogo from "../../assets/FilmFlow.png";
import "./Header.scss"

function Header () {
    return (
      <section className="header">
        <div className="header__logo">
          <img className="header__logo__img" src={FilmFlogoLogo} alt="logo" />
        </div>
        <SearchBar />
        <AccountSumary />
      </section>
    );
}

export default Header;