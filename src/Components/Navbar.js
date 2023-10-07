import React from "react";
import SearchMovie from "./SearchMovie";
import {Link} from "react-router-dom";
import "./Navbar.css"



export default function Navbar(){
return(

    <div>
    <div className="navbar-container">

        <div className="home">
            <Link className="homelink" to={"/"}>Home</Link>
        </div>
       
        <div className="Title">
            <h1 className="titletext">Filmsidan</h1>
        </div>

         <div className="search">
            <SearchMovie/>
        </div>
    </div>
    </div>
)

    
}