import React from "react";
import { useEffect, useState } from "react";
import './App.css'
import searchIcon from './search.svg'
import MovieCard from "./MovieCard";


const API_URL = 'http://www.omdbapi.com?apikey=7e9f4389'

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const responce = fetch(`${API_URL}&s=${title}`)
        const data = await (await responce).json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Batman')
    }, [])
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for the movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <img
                    src={searchIcon}
                    alt="Search"
                    onClick={() => searchMovies(searchTerm)} />
            </div>

            {movies?.length > 0 ?(
                <div className="container">
                    {movies.map((movie)=>(
                     <MovieCard movie={movie}/>
                    ))}
                 </div>
             ):(
                 <div className="empty">
                     <h2>Movie Not Founded</h2>
                 </div>
                )}
          
        </div>
    )    
}

export default App;