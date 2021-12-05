import React,{useState,useEffect} from 'react'
import axios from "../axios"
import Youtube from 'react-youtube'
import movieTrailer from "movie-trailer"
import "./Row.css"
import { Link } from 'react-router-dom'
const base_url="https://image.tmdb.org/t/p/original"

const Row = ({title,fetchUrl,isLarge}) => {
    const [movies,setMovies]=useState([])
    const [trailerId,setTrailerId]=useState("")
    
    useEffect(()=>{
        const getMovies=async()=>{
           const res =await axios.get(fetchUrl);
            setMovies(res.data.results)
            return res.data
        }
        getMovies()
    },[fetchUrl])


    const opts={
        height:"390px",
        width:"100%",
        playerVars:{
            autoplay:1
        }
    }

    const handleClick=(movie)=>{
        if(trailerId){
            setTrailerId("")
        }
        else{
            movieTrailer(movie?.name||movie?.title||movie?.original_name||movie?.original_title||'').then((url)=>{
                console.log(url,movie)
                const urlParams=new URLSearchParams(new URL(url).search)
                console.log(urlParams.get("v"))
                setTrailerId(urlParams.get("v"))
            }).catch(err=>console.log(err))
    }}
    return (
        <div className="row">
            <h2 className='title'>{title}</h2>
          
        <div className={`row_posters`}>
        {movies?movies.map(movie=>
        
         

    
    <img onClick={()=>handleClick(movie)} id={movie.id} className={`row_poster ${isLarge&&"row_posterLarge"}`} src={`${base_url}${isLarge?movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
 
    )
    :<h3>Loading</h3>}
   
        </div>
        {  trailerId&& <Youtube videoId={trailerId} opts={opts}/>}
        </div>
    )
}

export default Row
