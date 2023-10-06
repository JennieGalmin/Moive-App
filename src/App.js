
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home";
import MovieDetails from './Pages/MovieDetails';
import SearchMovie from './Components/SearchMovie';





export default function App (){

  return (
 
  <div>
  <div className="Navbar">
        <h1>Filmsidan</h1>
  </div>
<SearchMovie/>



<Routes>

 <Route
  path="/"
  element={<Home/>}/>
 <Route 
 path="/MovieDetails/:movieId"
 element={<MovieDetails/>}/>
</Routes>

</div>
  );
}
       

