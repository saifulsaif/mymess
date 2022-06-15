import React from "react";

const MovieCard = ( {movie1} ) =>{
    return(
        <div className="movie">
            <div>
                <p>
                    {movie1.price}
                </p>
            </div>

            <div>
                <img src={movie1.image_link} alt={movie1.name}/>
            </div>
            <div>
                <h3>
                    {movie1.name}
                </h3>
            </div>
       </div>
    );
}

export default MovieCard;