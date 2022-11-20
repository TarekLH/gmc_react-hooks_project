import React, {useState, useEffect} from "react";
import  Filter from "./Filter";
import MovieCard from "./MovieCard";
import { MovieList } from "./MovieList";

export default function Layout() {
    const [titleFilter, setFilter] = useState("")
    const [addMovie, setAddMovie] = useState({
        id: "",
        img: "",
        title: "",
        rate: ``,
        desc: ""
    })

    const handleTitleSearch = (event) => {
        setFilter(event.target.value)
    }
    let dataSearch = MovieList.filter( 
        movie => movie.title.toLowerCase().includes(titleFilter.toLowerCase()) || movie.rate.includes(titleFilter) 
    )


    const handleAddClick = () => { setAddMovie({
            ...addMovie, 
            id: Date.now(), 
            img: "pas encore",
            title: "dark night",
            rate: "4.8/5",
            desc: "super film"
        })
    }

    useEffect(() => {
        if (addMovie.id !== "") {
            MovieList.push(addMovie)
        }
    },[addMovie])

    console.log(MovieList)


    return (
        <>
            <Filter titleFilter={titleFilter} handleTitleSearch={handleTitleSearch} handleAddClick={handleAddClick}/>
            <MovieCard MovieList={MovieList} dataSearch={dataSearch}/>
        </>
    )
}