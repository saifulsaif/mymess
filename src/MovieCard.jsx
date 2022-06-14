import React from "react";

const MovieCard = ( {movie1} ) =>{
    return(
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
    );
}

export default MovieCard;