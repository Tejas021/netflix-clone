import React from 'react'
import Youtube from 'react-youtube'
import movieTrailer from "movie-trailer"
import Row from '../components/Row'
import request from '../requests'
import Navbar from '../components/Navbar'
import "./MoviePage.css"
import { useLocation } from 'react-router'

const MoviePage = ({trailerId}) => {
    const opts={
        height:"500px",
        width:"100%",
        playerVars:{
            autoplay:1
        }
    }
    const location=useLocation()
console.log(location);

    return (
        <div>
            <Navbar/>
            <Youtube videoId={trailerId} opts={opts}/>
            <div className='movie__info'>
                <img className='movie__img' src={`https://image.tmdb.org/t/p/original${location.state.backdrop_path}`} alt="movie "></img>
                <div className='movie__desc'>
                    <h2>{location.state?.title||location.state?.name}</h2>
                    <p>{location.state.overview}</p>
                    <img className='movie__poster' src={`https://image.tmdb.org/t/p/original${location.state.poster_path}`} alt="movie "></img>
                </div>
            </div>
            <Row title={"similar movies"} fetchUrl={request.fetchTrending} isLarge={true}/>
        </div>
    )
}

export default MoviePage
