import React from"react";
import "./MovieList.css"
import {Link} from "react-router-dom";



export default function MovieList({results}) {
    return (
        <div>
        <div className="movielist-container">

            <div className="search-results">
            {results.length > 0 && <h1>Search Results:</h1>}
            </div>

        <div className="listofmovies">
        {results.map((searchResult) => (
            <div key={searchResult.id}>
            <Link to={`/MovieDetails/${searchResult.id}`}>
            <img
            src={`https://image.tmdb.org/t/p/w500${searchResult.backdrop_path}`}
            alt={searchResult.title}
            style={{width:300, height:250, marginTop: 15 }}
            />
            </Link>
            <h1 className="movie-title">{searchResult.title}{searchResult.name}</h1>
            </div>
            
            
        ))}
        </div>
        </div>
        </div>

       
    )
}

