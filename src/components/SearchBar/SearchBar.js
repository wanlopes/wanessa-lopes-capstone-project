import "./SeacrBar.scss";
// import Search from "../../assets/magnifying-glass-solid.svg"
import axios from "axios";
import { useEffect, useState } from "react";

function SearchBar () {
    const [formData, setFormData] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        
    }

    useEffect(() => {
      axios
        .get(`http://localhost:8080/api/movies/search`, {
          params: {
            api_key: process.env.YOUR_TMDB_API_KEY,
            query: query,
            include_adult: false,
          },
        })
        .then((response) => {
          setFormData(response);
          console.log(response);
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }, []);

    return (
      <section className="search">
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            className="search-bar__input"
            placeholder="Search for a movie"
          />
          <button className="btn" type="submit">
            Search
          </button>
        </form>
      </section>
    );
}

export default SearchBar;