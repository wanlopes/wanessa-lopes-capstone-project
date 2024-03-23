import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "./WatchList.scss";
import Delete from "../../assets/delete.svg";
import Watched from "../../assets/done.svg";
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
        console.log(visibility);
        visibility.scrollNext();
      }}
    >
      Right
    </button>
  );
}

function WatchList({ movies, handleUpdate }) {
  return (
    <>
      <div className="profile__title">
        <h2 className="profile__title__name">Watch List</h2>
      </div>
      <ScrollMenu
        LeftArrow={<LeftButton />} RightArrow={<RightButton />}
      >
          {movies.map(
            (movie) =>
              movie.watch && (
                <div className="profile__movie">
                  <li className="profile__movie__info" key={movie.id}>
                    <img
                      className="profile__movie__info__img"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    {movie.title}
                    {movie.vote_average}
                    <div>
                      <img
                        id="icons"
                        src={Favorite}
                        onClick={() => handleUpdate(movie, "favorite", "add")}
                        alt="favorite icon"
                      />
                      <img
                        id="icons"
                        src={Watched}
                        onClick={() => handleUpdate(movie, "watched", "add")}
                        alt="watched icon"
                      />
                      <img
                        id="icons"
                        src={Delete}
                        onClick={() => handleUpdate(movie, "watch", "remove")}
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

export default WatchList;
