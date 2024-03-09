import "./SeacrBar.scss";
// import Search from "../../assets/magnifying-glass-solid.svg"
import axios from "axios";
import { useState } from "react";
import {useParams, useNavigate } from "react-router-dom";


function SearchBar() {
  const [formData, setFormData] = useState([]);
  const [result, setResult] = useState([]);
  const navigate = useNavigate();
  const {query} = useParams;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.query);
    navigate(`/search/${formData.query}`);
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
