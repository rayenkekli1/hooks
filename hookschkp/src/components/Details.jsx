import React from 'react'
import { Link, useParams } from 'react-router-dom'
import movie  from './MovieCard'
import './components.css'
import { Data } from '../Data'

export default function Details(Data ,movie) {
    
    return (
        <div className='Details'>
        <h1>{movie.title}</h1>
        <h2>{movie.description}</h2>
        <iframe width="560" height="315" src={Data.traileriframe} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h4>{Data.description}</h4>
        <Link to='/' ><button>go to the movie list</button></Link>
        </div>
    )
}

