import { useEffect, useState } from "react";
import "./MovieService.css";


export function DiscoverMovie (){

    const [discoverMovieList, setdiscoverMovieList] = useState([])

    const discoverMovie = ()=> {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2661f8062eb09cb0e75e5bab0f5cee14`)
        .then(response => response.json())
        .then(json => setdiscoverMovieList(json.results))
        .catch(err=> console.error(err))
    };

useEffect(() => {
    discoverMovie();
}, []);

console.log(discoverMovieList)

return (
    <div className="row-container">
        {discoverMovieList.map((movie =>(
            < div className = "movie-container" key={movie.id}>
            <img 
            
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
            style={{width:300, height:250, marginTop: 15 }}
            />
             
            <h1 className="movie-title">{movie.title}</h1>
            
            </div>
        )
        
        ))}
    </div>
)
}

export function PopularMovies(){

const [popularMovieList, setPopularMovieList] = useState([]);

    const popularMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=2661f8062eb09cb0e75e5bab0f5cee14')
        .then(response => response.json())
        .then(json => setPopularMovieList(json.results))
        .catch(err => console.error(err));
    };

useEffect(() => {
    popularMovies();
}, []);

return (

    <div className="row-container">
    {popularMovieList.map(popularMovie => (
    < div className = "movie-container" key={popularMovie.id}>
          <img 
            
            src={`https://image.tmdb.org/t/p/w500${popularMovie.backdrop_path}`}
            alt={popularMovie.title}
            style={{width:300, height:250, marginTop: 15 }}
            />
<h1 className="movie-title">{popularMovie.title}</h1>
</div>


 ))}

</div>
);
}
    

export function TrendingAll (){

    const [trending, setTrending] = useState([]);

    const tredningAll = () => {
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=2661f8062eb09cb0e75e5bab0f5cee14')
        .then(response => response.json())
        .then(json => setTrending(json.results))
        .catch(err => console.error(err))
    };

    useEffect(() => {
        tredningAll()
    }, []);

    console.log(trending);

    return (
        <div className="row-container">
    {trending.map(trendingList => (
    < div className = "movie-container" key={trendingList.id}>
          <img 
            
            src={`https://image.tmdb.org/t/p/w500${trendingList.backdrop_path}`}
            alt={trendingList.title}
            style={{width:300, height:250, marginTop: 15 }}
            />
<h1 className="movie-title">{trendingList.title}{trendingList.name}</h1>
</div>


 ))}

</div>
);
    

}

