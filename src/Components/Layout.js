import React, {useState} from "react";
import  Filter from "./Filter";
import MovieCard from "./MovieCard";
import { MovieList } from "./MovieList";

export default function Layout() {
    const [titleFilter, setFilter] = useState("")

    let dataSearch = MovieList.filter( movie => movie.title.toLowerCase().includes(titleFilter.toLowerCase()) )

    return (
        <>
            <Filter titleFilter={titleFilter} setFilter={setFilter}/>
            <MovieCard dataSearch={dataSearch}/>
        </>
    )
}