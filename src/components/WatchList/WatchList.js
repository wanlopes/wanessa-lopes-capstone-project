import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "./WatchList.scss"

function WatchList({ movies }) {
  return (
    <>
      <div className="profile__title">
        <h2 className="profile__title__name">Watch List</h2>
      </div>
      <ScrollMenu
        LeftArrow={<button>Left</button>}
        RightArrow={<button>Right</button>}
      >
        <ul>
          {movies.map(
            (movie) =>
              !movie.watched &&
              !movie.favorite && (
                <div className="profile__movie">
                  <li className="profile__movie__info" key={movie.id}>
                    <img
                      className="profile__movie__info__img"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    {movie.title}
                    {movie.vote_average}
                  </li>
                </div>
              )
          )}
        </ul>
      </ScrollMenu>
    </>
  );
}

export default WatchList;
