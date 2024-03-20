import React from "react";
import "./SearchResults.scss";
import Favorite from "../../assets/heart-regular.svg";
import Watched from "../../assets/done.svg";
import Watch from "../../assets/cinema-reel.svg";

function SearchResults({ query, results }) {
  const resultsArray = results || [];

  return (
    <section className="sec">
      <div className="sec__title">
        <p className="sec__title__name">Results for "{query} "</p>
      </div>
      {resultsArray.length > 0 ? (
        <div>
          <ul>
            {resultsArray.map((result) => (
              <li key={result.id}>
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + result.poster_path}
                  alt={result.title}
                />
                <p>{result.title}</p>
                <div>
                  <button>
                    <img id="icons" src={Favorite} alt="favorite" />
                  </button>
                  <button>
                    <img id="icons" src={Watched} alt="watched logo" />
                  </button>
                  <button>
                    <img id="icons" src={Watch} alt="watch logo" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </section>
  );
}

export default SearchResults;
