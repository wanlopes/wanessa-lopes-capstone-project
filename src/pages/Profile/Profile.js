import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import FavoriteMovies from "../../components/FavoriteMovies/FavoriteMovies";
import WatchedList from "../../components/WatchedMovies/WatchedMovies";
import WatchList from "../../components/WatchList/WatchList";

function Profile({ user }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.token) {
      fetchMovies();
    } else {
      navigate("/login");
    }
  }, [user.id]);

  async function fetchMovies() {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/movies/user/`,
        { headers: { authorization: `Bearer ${localStorage.token}` } }
      );
      setMovies(response.data.movies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  const handleUpdate = async (movie, listType, action) => {
    try {
      let response;
      response = await axios.post(
        `http://localhost:8080/api/movies/update`,
        { movie: movie, listType: listType, action: action },
        { headers: { authorization: `Bearer ${localStorage.token}` } }
      );
      fetchMovies();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <section>
      <Header user={user} />
      <hr></hr>
      <div className="profile">
        <FavoriteMovies movies={movies} handleUpdate={handleUpdate} />
        <WatchedList movies={movies} handleUpdate={handleUpdate} />
        <WatchList movies={movies} handleUpdate={handleUpdate} />
      </div>
      <Footer />
    </section>
  );
}

export default Profile;
