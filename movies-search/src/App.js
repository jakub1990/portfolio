import React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';
const api_url = 'https://omdbapi.com?apikey=bab7aacb';


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
   const searchMovies = async (title) => {
     const response = await fetch(`${api_url}&s=${title}`);
     const data = await response.json();
     setMovies(data.Search);
   } 
   
    return (
       <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
            <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <img src={SearchIcon} alt="Search Icon" onClick={() => searchMovies(searchTerm)} />
        </div>

           {
            movies.length > 0 ? (  
              <div className="container">
                {movies.map((movie) => (
                   <MovieCard movie={movie}/>
                ))}
              </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )
           }
       </div>   
    )
}


export default App;