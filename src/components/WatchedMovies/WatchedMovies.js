import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "./WatchedMovies.scss";
import Delete from "../../assets/delete.svg";
import Watch from "../../assets/cinema-reel.svg";
import Favorite from "../../assets/heart-regular.svg";
import React from "react";

function LeftButton() {
  const visibility = React.useContext(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible("first", true);
  return (
    <button
      className="left"
      disabled={isFirstItemVisible}
      onClick={() => visibility.scrollPrev()}
    >
      Left
    </button>
  );
}

function RightButton() {
  const visibility = React.useContext(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible("last", false);
  return (
    <button
      className="right"
      disabled={isLastItemVisible}
      onClick={() => {
        
        visibility.scrollNext();
      }}
    >
      Right
    </button>
  );
}

function WatchedList({ movies, handleUpdate }) {
  return (
    <>
      <div className="profile__title">
        <h2 className="profile__title__name">Watched Movies</h2>
      </div>
      <ScrollMenu LeftArrow={<LeftButton />} RightArrow={<RightButton />}>
        {movies.map(
          (movie) =>
            movie.watched && (
              <div className="profile__movie">
                <li className="profile__movie__info" key={movie.id}>
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
                      src={Favorite}
                      onClick={() => handleUpdate(movie, "favorite", "add")}
                      alt="favorite icon"
                    />
                    <img
                      id="icons"
                      src={Watch}
                      onClick={() => handleUpdate(movie, "watch", "add")}
                      alt="watch icon"
                    />
                    <img
                      id="icons"
                      src={Delete}
                      onClick={() => handleUpdate(movie, "watched", "remove")}
                      alt="delete icon"
                    />
                  </div>
                </li>
              </div>
            )
        )}
      </ScrollMenu>
    </>
  );
}

export default WatchedList;
