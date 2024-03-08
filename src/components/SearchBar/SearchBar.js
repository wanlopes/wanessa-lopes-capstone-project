function SearchBar () {
    return (
      <section className="search">
        <form className="search-bar">
          <input
            type="text"
            placeholder="Search for a movie"
          />
          <button className="btn" type="submit">Search</button>
        </form>
      </section>
    );
}

export default SearchBar;