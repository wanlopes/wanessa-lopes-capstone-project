import "./SeacrBar.scss";
import Search from "../../assets/magnifying-glass-solid.svg"
function SearchBar () {
    return (
      <section className="search">
        <form className="search-bar">
          <input
            type="text"
            className="search-bar__input"
            placeholder="Search for a movie"
          />
          <button className="btn" type="submit">
            <img src={ Search } alt="search logo"/>
          </button>
        </form>
      </section>
    );
}

export default SearchBar;