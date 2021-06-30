import React from "react";
import Movies from "../Movies";
import MovieItem from "./MovieItem";

const WatchedList = () => {
  const watchedMovie = Movies.map((movie) => {
    return <MovieItem movie={movie} key={movie.id} />;
  });
  return <div>{watchedMovie}</div>;
};

export default WatchedList;
