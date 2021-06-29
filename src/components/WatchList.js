import React from "react";
import Movies from "../Movies";
import MovieItem from "./MovieItem";

const WatchList = () => {
  const movies = Movies.map((movie) => {
    return <MovieItem movie={movie} type={"towatch"} key={movie.id} />;
  });
  return <div>{movies}</div>;
};

export default WatchList;
