import {useState,useEffect}from 'react'
import Youtube from 'react-youtube'
import movieTrailer from "movie-trailer"
import Row from '../components/Row'
import request from '../requests'
import Navbar from '../components/Navbar'
import "./MoviePage.css"
import { useLocation } from 'react-router'

const MoviePage = () => {
    const [trailerId, setTrailerId] = useState("")
    const opts={
        height:"500px",
        width:"100%",
        playerVars:{
            autoplay:1
        }
    }
    const movie=useLocation().state


useEffect(() => {
    movieTrailer(movie?.name||movie?.title||movie?.original_name||movie?.original_title||'').then((url)=>{
        console.log(url,movie)
        const urlParams=new URLSearchParams(new URL(url).search)
        console.log(urlParams.get("v"))
        setTrailerId(urlParams.get("v"))
    }).catch(err=>console.log(err))

    
},[movie])

    return (
        <div>
            <Navbar/>
            <Youtube videoId={trailerId} opts={opts}/>
            <div className='movie__info'>
                <img className='movie__img' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="movie "></img>
                <div className='movie__desc'>
                    <h2 className="movie__infoTitle">{movie?.title||movie?.name}</h2>
                    <p className="movie__infoDesc">{movie.overview}</p>
                    {/* <img className='movie__poster' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie "></img> */}
                </div>
            </div>
            <Row title={"similar movies"} fetchUrl={request.fetchTrending} isLarge={true}/>
        </div>
    )
}

export default MoviePage
