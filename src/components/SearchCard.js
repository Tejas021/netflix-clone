import React from 'react'
import "./Search.css"
import { useNavigate } from 'react-router'
const SearchCard = ({movie}) => {
    const navigate=useNavigate()
    return (
        <div onClick={()=>{navigate("movie/123",{state:movie})}} className='search__card'>
            <img className='search__img' alt={movie.title} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
            <h5 className='search__title'>{movie.title}</h5>
        </div>
    )
}

export default SearchCard
