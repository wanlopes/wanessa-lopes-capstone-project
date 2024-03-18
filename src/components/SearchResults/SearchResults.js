import React from "react";

function SearchResults({ query, results }) {
  const resultsArray = results || [];

  return (
    <section>
      <div>
        <p>Results for "{query} "</p>
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
