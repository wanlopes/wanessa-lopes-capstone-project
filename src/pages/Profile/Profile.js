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

    if (localStorage.token) {
      fetchMovies();
    } else {
      navigate("/login");
    }
  }, [user.id]);

  return (
    <section>
      <Header user={user} />
      <div className="profile">
        <FavoriteMovies movies={movies} />
        <WatchedList movies={movies} />
        <WatchList movies={movies} />
      </div>
      <Footer />
    </section>
  );
}

export default Profile;
