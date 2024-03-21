import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "./FavoriteMovies.scss";
import React, { useState } from "react";
import Delete from "../../assets/delete.svg";
import Watched from "../../assets/done.svg";
import Watch from "../../assets/cinema-reel.svg";
import axios from "axios";

function LeftButton() {
  const visibility = React.useContext(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible("first", true);
  return (
    <button disabled={isFirstItemVisible} onClick={visibility.scrollPrev}>
      Left
    </button>
  );
}

function RightButton() {
  const visibility = React.useContext(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible("last", false);
  return (
    <button
      disabled={isLastItemVisible}
      onClick={() => {
        console.log(visibility);
        visibility.scrollNext();
      }}
    >
      Right
    </button>
  );
}

function FavoriteMovies({ movies }) {
  const [moviesItem, setMoviesItem] = useState([]);
  const handleUpdate = async (movie, listType) => {
    console.log("Movie: ", movie);
    console.log("ListType: ", listType);
    try {
      let response;
      if (listType === "delete") {
        response = await axios.delete(
          `http://localhost:8080/api/movies/${movie.id}`,
          { headers: { authorization: `Bearer ${localStorage.token}` } }
        );

        if (response.status === 200) {
          setMoviesItem(movies.filter((item) => item.id !== movie.id));
        }
      } else {
        response = await axios.post(
          `http://localhost:8080/api/movies/update`,
          { movie: movie, listType: listType },
          { headers: { authorization: `Bearer ${localStorage.token}` } }
        );
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="profile__title">
        <h2 className="profile__title__name">Favorite Movies</h2>
      </div>
      <div>
        <ScrollMenu LeftArrow={<LeftButton />} RightArrow={<RightButton />}>
          <ul>
            {movies.map(
              (movie) =>
                movie.favorite && (
                  <li className="profile__movie" key={movie.id}>
                    <img
                      className="profile__movie__info__img"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <p>{movie.title}</p>
                    <p>{movie.vote_average}</p>
                    <div>
                      <img
                        id="icons"
                        onClick={() => handleUpdate(movie, "watch")}
                        src={Watch}
                        alt="watch icon"
                      />
                      <img
                        id="icons"
                        onClick={() => handleUpdate(movie, "watched")}
                        src={Watched}
                        alt="watched icon"
                      />
                      <img
                        id="icons"
                        onClick={() => handleUpdate(movie, "delete")}
                        src={Delete}
                        alt="delete icon"
                      />
                    </div>
                  </li>
                )
            )}
          </ul>
        </ScrollMenu>
      </div>
    </>
  );
}

export default FavoriteMovies;
