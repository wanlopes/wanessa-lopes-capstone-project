import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Profile({ user }) {
  const [movies, setMovies] = useState([]);
  console.log(user);
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/movies/user/${user.id}`
        );
        console.log(response.data);
        setMovies(response.data.movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, [user.id]);

  return (
    <section>
      <Header user={user} />
      {
        <div className="profile">
          <div className="profile__title">
            <h1 className="profile__title__name">Favorite Movies</h1>
          </div>
          <ul>
            {movies.map(
              (movie) =>
                movie.isFavorite && (
                  <div className="profile__movie">
                    <li className="profile__movie__info" key={movie.id}>
                      {movie.title}
                      {movie.vote_average}
                      <img
                        className="profile__movie__info__img"
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                      />
                    </li>
                  </div>
                )
            )}
          </ul>
          <div className="profile__title">
            <h1 className="profile__title__name">Watched Movies</h1>
          </div>
          <ul>
            {movies.map(
              (movie) =>
                movie.isWatched && (
                  <div className="profile__movie">
                    <li className="profile__movie__info" key={movie.id}>
                      {movie.title}
                      {movie.vote_average}
                      <img
                        className=""
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                      />
                    </li>
                  </div>
                )
            )}
          </ul>
          <div className="profile__name">
            <h1 className="profile__name__title">Watch List</h1>
          </div>
          <ul>
            {movies.map(
              (movie) =>
                !movie.isWatched &&
                !movie.isFavorite && (
                  <div className="profile__movie">
                    <li className="profile__movie__info" key={movie.id}>
                      {movie.title}
                      {movie.vote_average}
                      <img
                        className="profile__movie__info__img"
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                      />
                    </li>
                  </div>
                )
            )}
          </ul>
        </div>
      }
      <Footer />
    </section>
  );
}

export default Profile;
