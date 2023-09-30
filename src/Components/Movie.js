import React from "react";

export default function Movie ({movieData}) {

const [showDetail, setShowDetail] = useState();


    return (
        <div className="row-container">
             <img 
                    src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
                    alt={movieData.title}
                    style={{width:300, height:250, marginTop: 15 }}
                    
                    />
        </div>
    )
}