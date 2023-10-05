import React from"react";
import Movie from "./Movie.js";
import "./MovieList.css"


export default function MovieList({results}) {
    return (
        <div className="wrapper">
            <div className="search-results">
            {results.length > 0 && <h1>Search Results:</h1>}
            </div>
            <div className="map">
        {results.map((searchResult) => (
            <Movie key={searchResult.id} movieData={searchResult} />
        ))}
        </div>
        </div>
    )
}
