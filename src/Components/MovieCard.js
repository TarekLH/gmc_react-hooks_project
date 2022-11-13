import React, { useEffect } from "react"
import {MovieList} from "./MovieList"


export default function MovieCard(props) {

    const filteredMovies = props.dataSearch.map(movie => (
        <div className="col">
            <div key={movie.id} className="card shadow-sm w-75">
                <img src={movie.img} className="bd-placeholder-img card-img-top" width="100%" height="380" alt="img" />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-0">{movie.title}</h5>
                        </div>
                        <small className="mx-3">{movie.rate}</small>
                    </div>
                </div>
            </div>
        </div>
    ))

    const movieDisplay = MovieList.map(movie => (
        <div className="col">
            <div key={movie.id} className="card shadow-sm w-75">
                <img src={movie.img} className="bd-placeholder-img card-img-top" width="100%" height="380" alt="img" />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-0">{movie.title}</h5>
                        </div>
                        <small className="mx-3">{movie.rate}</small>
                    </div>
                </div>
            </div>
        </div>
    ))
    
    /*useEffect(() => {
        console.log(props.dataSearch);
    }, [props.dataSearch])*/

    return (
        <>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {props.dataSearch.length === 0 ? movieDisplay : filteredMovies} 
                    </div>
                </div>
            </div>
        
        </>
    )
}