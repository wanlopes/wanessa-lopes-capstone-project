import SearchResults from "../../components/SearchResults/SearchResults";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Search() {
  const { query } = useParams;
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/movies/search`, {
        params: {
          query: query,
          include_adult: false,
        },
      })
      .then((response) => {
        //   setFormData(response);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);
  return (
    <section>
      <Header/>
      <SearchResults></SearchResults>
      <Footer/>
    </section>
  );
}

export default Search;
