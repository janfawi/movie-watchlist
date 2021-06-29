import React from "react";
import Movies from "../Movies";
import MovieItem from "./MovieItem";

const WatchedList = () => {
  const watchedMovie = Movies.map((movie) => {
    return <MovieItem movie={movie} type={"watched"} key={movie.id} />;
  });
  return <div>{watchedMovie}</div>;
};

export default WatchedList;
