import React,{useState,useEffect} from 'react'
import axios from "../axios"
import request from "../requests"
import "./Banner.css"
const Banner = () => {
    const [movie, setmovie] = useState({})
    useEffect(()=>{
        
        const fetchMovies=async()=>{
            const res=await axios.get(request.fetchTrending);
            setmovie(res.data.results[Math.floor(Math.random()*res.data.results.length)])
      
        }
        fetchMovies()
    },[])


    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }


    return (
      <header className="banner"
      style={{
        backgroundSize:"cover",  
        backgroundImage:`linear-gradient(
          to bottom,
          transparent,
          rgba(31, 31, 31, 0.5),
          #111
        ),url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,backgroundPosition:"center center"}}
        
      >
          {console.log(movie)}
          <div className="banner_contents">
            <h1 className='banner_title'>{movie?.title||movie?.name||movie.original_name}</h1>
            <div className="banner_buttons">
              <button className="banner_button">Play</button>
              <button className="banner_button">My List</button>
          </div>
            <p className='banner_desc'>{truncate(movie.overview,500)}</p>
          
          </div>
          {/* <div className="fade__bottom"></div> */}
      </header>
    )
}

export default Banner
