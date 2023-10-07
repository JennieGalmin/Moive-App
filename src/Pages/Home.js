import React from "react";
import { DiscoverMovie, PopularMovies, TrendingAll } from "../Service/MovieService";

export default function Home(){

return (

<div className="home-content">

<h1 className="home-text">Discover Movie</h1>
<DiscoverMovie/>

<h1 className="home-text">Popular movies</h1>
<PopularMovies/>

<h1 className="home-text">Trending</h1>
<TrendingAll/>

</div>
)
}

