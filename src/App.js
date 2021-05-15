import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=dd39ea27a0713accaf681d5e513e7ac4";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=dd39ea27a0713accaf681d5e513e7ac4&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch(searchTerm ? SEARCH_API + searchTerm : FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };
  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movies) => <Movie key={movies.id} {...movies} />)}
      </div>
    </>
  );
}

export default App;
