import React from"react";
import Movie from "./Movie.js";

export default function MovieList({results}) {
    return (
        <div className="row-container">
            <div className="search-results">
            {results.length > 0 && <h1>Search Results:</h1>}
            </div>
            
        {results.map((searchResult) => (
            <Movie key={searchResult.id} movieData={searchResult} />
        ))}
        </div>
    )
}