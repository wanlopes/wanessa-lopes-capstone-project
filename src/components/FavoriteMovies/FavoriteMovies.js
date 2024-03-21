import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "./FavoriteMovies.scss";
import React from "react";

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
