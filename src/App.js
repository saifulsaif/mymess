import React from "react";

import { useEffect } from "react";
import './App.css';
import searchIcon from './search.svg';

const API_URL = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
const movie1 = {
 "image" : "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/495/original/open-uri20171223-4-9hrto4?1514063330",
 "year" :"2022",
 "title" : "Amazing action movie"
};
const App = () => {
    const searchMovies = async(title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      console.log(data);
    }
    useEffect(() => {
      searchMovies('spidermen');
    }, []);

    return (
        <div className="app">
            <h1>Movie Home</h1>

            <div className="search">
                <input
                placeholder="Search for movie"
                value="Superman"
                onChange={() => {}}
                />
                <img
                src={searchIcon}
                alt="search"
                onChange={() => {

                }}
                />
            </div>
             <div className="container">
               <div className="movie">
                  <div>
                    <p>
                        {movie1.year}
                    </p>
                  </div>
                 
                  <div>
                     <img src={movie1.image} alt={movie1.title}/>
                  </div>

                  <div>
                    <h3>
                        {movie1.title}
                    </h3>
                  </div>
               </div>
             </div>

        </div>
    );
}

export default App;