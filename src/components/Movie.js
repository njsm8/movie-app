import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
    <img
      src={
        poster_path
          ? IMG_API + poster_path
          : "https://images.unsplash.com/photo-1560109947-543149eceb16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
      }
      alt={title}
    />
    <div className="movie-info">
      <h3>{title.length > 15 ? title.substr(0, 17) + "..." : title}</h3>
      <span className={vote_average < 6 ? "red" : "green"}>{vote_average}</span>
    </div>

    <div className="movie-over">
      <h3>Overview:</h3>
      <p>{overview}</p>
    </div>
  </div>
);

export default Movie;
