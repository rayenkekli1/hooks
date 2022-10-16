import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import FilterMovies from './components/FilterMovies';
import MovieList from './components/MovieList';
import { Data } from './Data';
import { Route, Routes } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import Details from './components/Details';

function App() {
  const [movies,setMovies]=useState(Data)
  const addMovie =(movie)=>{
    setMovies([...movies,movie])
  }
  const deleteMovie = (id)=>{
    setMovies(movies.filter((movie)=> movie.id !== id))
  }


  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element= {<MovieList movies={movies} deleteMovie={deleteMovie} addMovie={addMovie}/>} />         
        </Routes>
        <Details />
      
    </div>
  );
}

export default App;