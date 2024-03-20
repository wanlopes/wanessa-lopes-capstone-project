import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "./FavoriteMovies.scss";

function FavoriteMovies({ movies }) {
  return (
    <>
      <div className="profile__title">
        <h2 className="profile__title__name">Favorite Movies</h2>
      </div>
      <div>
        <ScrollMenu
          LeftArrow={<button>Left</button>}
          RightArrow={<button>Right</button>}
        >
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
        </ScrollMenu>
      </div>
    </>
  );
}

export default FavoriteMovies;
