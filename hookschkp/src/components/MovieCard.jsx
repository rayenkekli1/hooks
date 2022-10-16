import React from 'react'
import './components.css'
import ReactStars from "react-rating-stars-component";
import Rating from 'react-star-rating-lite';
import { useNavigate } from 'react-router-dom';

export default function MovieCard({movie ,deleteMovie}) {
  let Navigate = useNavigate()

  
  return (
      <div className='boxx'>
        <div className='box1'>
            <img style={{width:"200px"}} src={movie.posterUrl} alt="" />
            <h1>{movie.title}</h1>
            <h2>{movie.description}</h2>
            <button class="button-24 but"  onClick={()=>deleteMovie(movie.id)} >remove card</button>
            <button class="button-24 but" onClick={()=>Navigate('/Details')}>go to details </button>
            <Rating className="stars" value={movie.rate} readonly />
        </div>
    </div>
  )
}
