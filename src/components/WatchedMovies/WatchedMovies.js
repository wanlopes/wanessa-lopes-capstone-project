import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "./WatchedMovies.scss";
import Delete from "../../assets/delete.svg";
import Watch from "../../assets/cinema-reel.svg";
import Favorite from "../../assets/heart-regular.svg";


function WatchedList({movies}) {
  return (
    <>
      <div className="profile__title">
        <h2 className="profile__title__name">Watched Movies</h2>
      </div>
      <ScrollMenu
        LeftArrow={<button>Left</button>}
        RightArrow={<button>Right</button>}
      >
        <ul>
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
                      <img id="icons" src={Favorite} alt="favorite icon" />
                      <img id="icons" src={Watch} alt="watch icon" />
                      <img id="icons" src={Delete} alt="delete icon" />
                    </div>
                  </li>
                </div>
              )
          )}
        </ul>
      </ScrollMenu>
    </>
  );
}

export default WatchedList;
