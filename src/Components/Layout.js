import React, { useState, useEffect } from "react";
// Assets
import DefaultImg from "../Assets/DefaultImage.jpg";
// Components
import Filter from "./Filter";
import MovieCard from "./MovieCard";
// Datas
import { MovieList } from "./MovieList";


export default function Layout() {
    const [titleFilter, setFilter] = useState("");
    const [addMovie, setAddMovie] = useState({
        id: Date.now(),
        img: DefaultImg,
        title: "",
        rate: "",
        desc: "",
    });
    const [movies, setMovies] = useState([...MovieList]);

    const handleTitleSearch = (event) => {
        setFilter(event.target.value);
    };

    let dataSearch = movies.filter(
        (movie) => movie.title.toLowerCase().includes(titleFilter.toLowerCase()) || movie.rate.includes(titleFilter)
    );


    const handleSubmit = (e) => {
        e.preventDefault();
        setMovies([...movies, addMovie]);
    };

    useEffect(() => {
        console.log(movies);
    }, [movies]);
    return (
    <>
        <Filter
            titleFilter={titleFilter}
            handleTitleSearch={handleTitleSearch}
            addMovie={addMovie}
            setAddMovie={setAddMovie}
            handleSubmit={handleSubmit}
        />
        <MovieCard
            MovieList={MovieList}
            dataSearch={dataSearch}
            movies={movies}
        />
    </>
);}