import React, { useEffect, useState } from "react";
import "./MainMovie.css";
import Movies from "./Movies/Movies";
import { useGlobalContext } from "../../context";
import Loader from "../../Loader/Loader";

const FeatureApi =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=2";
const ImgApi = "https://image.tmdb.org/t/p/w1280";
const SearchApi =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

// const page = Math.floor(Math.random() * 100);
// console.log(page);
const MainMovie = () => {
  const { movies, setMovies, page, movie, loading, setLoading } =
    useGlobalContext();

  useEffect(() => {
    fetch(
      // FeatureApi
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, [page]);

  return (
    <div className="movieSectionPage" id="video">
      {movies.length > 0 &&
        movies.map((movie) => <Movies key={movie.id} {...movie} />)}
    </div>
  );
};

export default MainMovie;
