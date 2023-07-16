import React, { useState } from 'react';
import './App.css'

const MovieList = () => {
  const [movies, setMovies] = useState([
    { title: 'MULAN', genre: 'Action', releaseYear: 2020 },
    { title: 'Green Book', genre: 'Drama', releaseYear: 2018 },
    { title: 'Free Guy', genre: 'Comedy', releaseYear: 2021 },
  ]);

  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const genres = ['All Genres', ...new Set(movies.map(movie => movie.genre))];

  const handleGenreChange = event => {
    setSelectedGenre(event.target.value);
  };

  const handleMovieClick = title => {
    alert(`You clicked on ${title}`);
  };

  const filteredMovies = selectedGenre === 'All Genres'
    ? movies
    : movies.filter(movie => movie.genre === selectedGenre);

  return (
    <div>
      <div className="movie-list-container">
        <h1>Movie List</h1>
        <select value={selectedGenre} onChange={handleGenreChange}>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
        <div className="movie-tabs">
          {filteredMovies.map(movie => (
            <div
              key={movie.title}
              className="movie-tab"
              onClick={() => handleMovieClick(movie.title)}
            >
              <h3>{movie.title}</h3>
              <p>Genre: {movie.genre}</p>
              <p>Release Year: {movie.releaseYear}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
