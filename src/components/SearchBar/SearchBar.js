import "./SeacrBar.scss";
// import Search from "../../assets/magnifying-glass-solid.svg"
import axios from "axios";
import { useEffect, useState } from "react";

function SearchBar() {
  const [formData, setFormData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.query);
    axios
      .get(`http://localhost:8080/api/movies/search`, {
        params: {
          query: formData.query,
          include_adult: false,
        },
      })
      .then((response) => {
        //   setFormData(response);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="search">
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          className="search-bar__input"
          type="text"
          name="query"
          onChange={handleInputChange}
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
