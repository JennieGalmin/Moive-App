import React from "react";
import { DiscoverMovie, PopularMovies } from "../Service/MovieService";

export default function Home(){

return (

<div className="home-content">

 

<h1>Discover Movie</h1>
<DiscoverMovie/>


<h1>Popular movies</h1>
<PopularMovies/>

</div>
)
}

