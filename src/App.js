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

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data[0]);
    setMovies(data);
  }
  useEffect(() => {
    searchMovies('spidermen');
  }, []);

  return (
    <div className="app">
      <h1>Products Home</h1>
      <div className="search">
        <input
          placeholder="Search for movie"
                 value="Superman"
          onChange={() => { }}
        />
        <img
          src={searchIcon}
          alt="search"
          onChange={() => {

          }}
        />
      </div>


      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie1={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No Product found</h2>
            </div>
          )
      }


    </div>
  );
}

export default App;