import React, {useState, useEffect} from "react";
import  Filter from "./Filter";
import MovieCard from "./MovieCard";
import { MovieList } from "./MovieList";
import TheDarkKnight from "../Assets/TheDarkKnight.jpg"

export default function Layout() {
    const [titleFilter, setFilter] = useState("")
    const [addMovie, setAddMovie] = useState({
        id: Date.now(),
        img: TheDarkKnight,
        title: "",
        rate: "",
        desc: ""
    })

    const handleTitleSearch = (event) => {
        setFilter(event.target.value)
    }
    let dataSearch = MovieList.filter( 
        movie => movie.title.toLowerCase().includes(titleFilter.toLowerCase()) || movie.rate.includes(titleFilter) 
    )


    const handleSubmit = (e) => {
        e.preventDefault()
        MovieList.unshift(addMovie)
        console.log(MovieList)
    }
    
    

    console.log(MovieList)



    return (
        <>
            <Filter titleFilter={titleFilter} handleTitleSearch={handleTitleSearch} addMovie={addMovie} setAddMovie={setAddMovie}   handleSubmit={handleSubmit}/>
            <MovieCard MovieList={MovieList} dataSearch={dataSearch}/>
        </>
    )
}