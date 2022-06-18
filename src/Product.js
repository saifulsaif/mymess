import React from "react";

import { useState, useEffect } from "react";
import MovieCard from "./component/MovieCard";
import Header from "./component/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import searchIcon from "./assets/search.svg";
import { Navigate, Route, Routes } from "react-router-dom";
const API_URL = "https://ownlikee.ownmat.com/api/brand";

const Product = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (name) => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    setMovies(data.payload);
  };

  useEffect(() => {
    searchMovies("spidermen");
  }, []);

  return (
    <div>
      <Header />

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
    </div>
  );
};

export default Product;
