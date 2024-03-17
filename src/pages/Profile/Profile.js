import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import WatchList from "../../components/WatchList/WatchList";
// import FavoriteMovies from "../../components/FavoriteMovies/FavoriteMovies";
// import WatchedList from "../../components/WatchedMovies/WatchedMovies";
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
        <div>
          <h1>Favorite Movies</h1>
          <ul>
            {movies.map(
              (movie) =>
                movie.isFavorite && <li key={movie.id}>{movie.title}</li>
            )}
          </ul>
          <h1>Watched Movies</h1>
          <ul>
            {movies.map(
              (movie) =>
                movie.isWatched && <li key={movie.id}>{movie.title}</li>
            )}
          </ul>
          <h1>Watch List</h1>
          <ul>
            {movies.map(
              (movie) =>
                !movie.isWatched &&
                !movie.isFavorite && <li key={movie.id}>{movie.title}</li>
            )}
          </ul>
        </div>
      }
      {/* <FavoriteMovies />
      <WatchList />
      <WatchedList /> */}
      <Footer />
    </section>
  );
}

export default Profile;
