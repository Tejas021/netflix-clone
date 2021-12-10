import React, { useEffect,useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    const [show, setshow] = useState(false)
   
useEffect(() => {
    window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
            setshow(true)
         
        }
        else{
            setshow(false)
        }
            })
    return () => {
    window.removeEventListener("scroll",()=>{})
    }
}, [])

const navigate=useNavigate()
    return (
        <div className={`nav ${show&&"navbar_dark"}`}>
           <Link to="/"><img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png" alt="netflix_logo"></img></Link> 
           
            <img onClick={()=>{navigate("/profile")}} className="nav_avatar" alt="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7BiQ7AEUOpTwEjCyst0jHDri-Nfk1jvNRJkO2c11BBLktqzWlTWnJD3mGzUiPLIWkfA&usqp=CAU"></img>
        </div>
    )
}

export default Navbar
