import React from "react";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import "./MovieDetails.css";


export default function MovieDetails(){

const {movieId} = useParams();
const [movieDetails, setMovieDetails] = useState(null);


const fetchMovieDetails = ()=> {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2661f8062eb09cb0e75e5bab0f5cee14`)
    .then(response => response.json())
    .then(json => setMovieDetails(json))
    .catch(err => console.error(err))
};

useEffect(() => {
    fetchMovieDetails()
}, [movieId])



return ( 
  <div>
    <div className="moviedetails-container">
    {movieDetails && (
        <div> 
        <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
        alt={movieDetails.title}
        style={{width:300, height:250, marginTop: 15 }}
        />
        <h1>{movieDetails.title}</h1>  
        <div>
            <div>Movie description: {movieDetails.overview}</div>
            <div>Vote average: {movieDetails.vote_average}</div>
            <div>Release date:{movieDetails.release_date}</div>
            <div>Original Language:{movieDetails.original_language}</div>
        </div>
        </div>
    )}
    </div>
  </div>
   
);

}

