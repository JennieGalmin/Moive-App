import { useEffect, useState } from "react";
import "./MovieList.css";

export default function DiscoverMovie (){

    const [movieList, setMovieList] = useState([])

    const discoverMovie = ()=> {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=3808c4678a8ec3ef8bf559ab97511f31')
        .then(response => response.json())
        .then(json => setMovieList(json.results))
        .catch(err=> console.error(err))
    };


useEffect(() => {
    discoverMovie();
}, []);

console.log(movieList)

return (
    <div>
        {movieList.map((movie)=>(
            < div className = "movie-container">
            <img 
            
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
            style={{width:300, height:250, marginTop: 15 }}
            />
           <h1 className="movie-title">{movie.title}</h1>
            </div>
            
        ))}
    </div>
)
}