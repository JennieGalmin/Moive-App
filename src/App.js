
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SearchMovie from './Components/SearchMovie';
import {DiscoverMovie, PopularMovies, TrendingAll} from './Service/MovieService.js';
import MovieDetails from "./Components/MovieDetails";




export default function App (){

  return (
 
  <div>
  <div className="Navbar">
        <h1>Filmsidan</h1>
  </div>


<div className="content">
<SearchMovie />  



<h1>Discover Movie</h1>
<DiscoverMovie/>


<h1>Popular movies</h1>
<PopularMovies/>

<Routes>
  <Route 
  path="/Components/MovieDetails.js/980489"
  element={<MovieDetails/>}/>
</Routes>
</div>
</div>
  );
}
       

