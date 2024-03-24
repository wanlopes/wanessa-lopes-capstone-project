import "./SeacrBar.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
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
          {/* <img src= {Search} /> */}
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
