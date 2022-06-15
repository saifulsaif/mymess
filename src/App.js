import React from "react";

import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

import './App.css';
import searchIcon from './search.svg';

const API_URL = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
const movie1 = {
  "image": "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/495/original/open-uri20171223-4-9hrto4?1514063330",
  "year": "2022",
  "title": "Amazing action movie"
};
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (name) => {
    const response = await fetch(`${API_URL}&s=${name}`);
    const data = await response.json();
    console.log(name);
    setMovies(data);
  };
  useEffect(() => {
    searchMovies("spidermen");
  }, []);

  return (
    <div className="app">
      <h1>Products Home</h1>
      <div className="search">
        <input
          placeholder="Search for movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie1={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Product found</h2>
        </div>
      )}
    </div>
  );
}

export default App;