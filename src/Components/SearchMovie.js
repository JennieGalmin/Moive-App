import React, { useState } from "react";

export default function SearchMovie() {

    const [search, setSearch] = useState("")

    return (

        <>
        <input 
        value = {search}
        onChange =  {(e) => setSearch(e.target.value)}
        />
        </>

    );

}