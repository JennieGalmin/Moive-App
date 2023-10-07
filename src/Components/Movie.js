import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Movie.css";


export default function Movie ({movieData}) {


const [isHovered, setIsHovered] = useState(false);


const mouseHover = () => {
    setIsHovered(true);
};


const mouseNotHover = () => {
    setIsHovered(false);
};




    return (


        <div className="row-wrapper" onMouseEnter={mouseHover} onMouseLeave={mouseNotHover}>
            <Link to={`/MovieDetails/${movieData.id}`}>
             <img
                    src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
                    alt={movieData.title}
                    style={{width:300, height:250, marginTop: 15 }}
                   
            />
            </Link>
            <h1 className="title">{movieData.title} </h1>
            
        </div>
     
    )
}

