import React from "react";
import DeleteMovie from "../buttons/DeleteMovie";
import UnWatch from "../buttons/UnWatch";
import Watched from "../buttons/Watched";

const MovieItem = (props) => {
  let type = props.type
  return (
    <div>
      <h3>{props.movie.name}</h3>
    
      {/* // if (props.movie.type === "towatch")
      // {<Watched />}
      // else <UnWatch />
      // } */}
      {
        type == "towatch" && (
          <>
            <Watched />
          </>
        )
      }
      {
        type == "watched" && (
      <>
      <UnWatch />
      </>
        )
}

      <DeleteMovie />
    </div>
  );
};

export default MovieItem;
