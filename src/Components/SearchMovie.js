import React, { useEffect, useState } from "react";



export default function SearchMovie() {

    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    
    
    const searchMovie = (event) => {
        event.preventDefault();

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=2661f8062eb09cb0e75e5bab0f5cee14&query=${search}`)
        .then(response => response.json())
        .then(json => setResults(json.results))
        .catch(err => console.error(err))
    }


   /* useEffect(()=> {
        searchMovie()
    },[])*/

    console.log(results)

    return (

        <> 
        
        <form onSubmit={(event) => searchMovie(event)}>
        <input 
        type="text"
        value={search}
        onChange = {(event) => setSearch(event.target.value)}
        />
        
        <button type="submit">Search Movie</button>
      
       <div className="search-results">
            <h2>Search Results:</h2>
            <ul>
                {results.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
              
           </div>
      </form>
        </>

    );

    }
   