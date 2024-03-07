function SearchBar () {
    return (
      <section>
        <form className="search-bar">
          <input
            type="text"
            placeholder="Search for a movie"
          />
          <button>Search</button>
        </form>
      </section>
    );
}

export default SearchBar;