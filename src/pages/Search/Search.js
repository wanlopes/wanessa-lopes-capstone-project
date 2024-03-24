import SearchResults from "../../components/SearchResults/SearchResults";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Search() {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/movies/search`, {
        params: {
          query: query,
          include_adult: false,
        },
      })
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);
  return (
    <section>
      <Header />
      <SearchResults query={query} results={searchResults} />
      <Footer />
    </section>
  );
}

export default Search;
