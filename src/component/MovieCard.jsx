import React from "react";

const MovieCard = ( {movie1} ) => {
    return(
        <div className="movie">
            <div>
                <p>
                    {movie1.description}
                </p>
            </div>

            <div>
                <img src={movie1.image} alt={movie1.brand_name}/>
            </div>
            <div>
                <h3>
                    {movie1.brand_name}
                </h3>
            </div>
       </div>
    );
}

export default MovieCard;