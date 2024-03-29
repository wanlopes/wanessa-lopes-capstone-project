import React from "react";
import axios from "axios";
import "./SearchResults.scss";
import Favorite from "../../assets/heart-regular.svg";
import Watched from "../../assets/done.svg";
import Watch from "../../assets/cinema-reel.svg";

function SearchResults({ query, results }) {
  const resultsArray = results || [];
  const handleUpdate = (movie, listType) => {
    axios
      .post(
        `http://localhost:8080/api/movies/update`,
        {
          movie: movie,
          listType: listType,
        },
        { headers: { authorization: `Bearer ${localStorage.token}` } }
      )
      .then((response) => {
        if (response.status === 200) {
          // Set success message
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <section className="sec">
      <div className="sec__title">
        <p className="sec__title__name">Results for "{query} "</p>
      </div>
      {resultsArray.length > 0 ? (
        <div>
          <ul>
            {resultsArray.map(
              (result) =>
                result.poster_path && (
                  <li key={result.id}>
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" + result.poster_path
                      }
                      alt={result.title}
                    />
                    <p>{result.title}</p>
                    <div>
                      <img
                        id="icons"
                        onClick={() => handleUpdate(result, "favorite")}
                        src={Favorite}
                        alt="favorite"
                      />
                      <img
                        id="icons"
                        onClick={() => handleUpdate(result, "watched")}
                        src={Watched}
                        alt="watched logo"
                      />
                      <img
                        id="icons"
                        onClick={() => handleUpdate(result, "watch")}
                        src={Watch}
                        alt="watch logo"
                      />
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </section>
  );
}

export default SearchResults;
