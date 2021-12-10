import React,{useState,useEffect} from 'react'
import axios from 'axios'
import SearchCard from './SearchCard'
import "./Search.css"
const Search = () => {
    const [query, setquery] = useState("")
    const [movies, setmovies] = useState([])
    useEffect(() => {
        const find = async()=>{
            if(query===""){
                setmovies([])
            }
             await  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=36b9cacd79bbe815c5d53d4499cba3f9&language=en-US&page=1&include_adult=false&query=${query}`).then(res=>setmovies(res.data.results))
          
        }
           find()
    }, [query])
 
    return (
        <div className='search__wrapper'>
            <input onChange={(e)=>setquery(e.target.value)} className='search__input'  placeholder='search'  />
<div className='search__results'>{movies.map(movie=><SearchCard movie={movie} key={movie.id}/>)}</div>

        </div>
    )
}

export default Search
