
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home";
import MovieDetails from './Pages/MovieDetails';
import Navbar from "./Components/Navbar";


export default function App (){
  return (
  <div>

  <Navbar/>
  
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
       

