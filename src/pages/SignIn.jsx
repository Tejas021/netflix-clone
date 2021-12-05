import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router'
import "./SignIn.css"
const SignIn = () => {
    const navigate=useNavigate()

    const handleSignIn=(e)=>{
        e.preventDefault()
        navigate("/home")
    }
    return (
        <div className="signin__background">
            <Navbar/>
            <div className='signin__formContainer'>
                <h1 className='signin__title'>Sign In</h1>
            <form className='signin__form'>
            <input className='signin__input' placeholder='Email address or phone number'/>
            <input className="signin__input" placeholder='Password'/>
            <button className='signin__button' onClick={e=>handleSignIn(e)}>Sign In</button>
            </form>
            </div>
            
         
        </div>
    )
}

export default SignIn
