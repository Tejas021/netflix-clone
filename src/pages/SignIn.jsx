import React from 'react'
import Navbar from '../components/Navbar'
import "./SignIn.css"
const SignIn = () => {
    return (
        <div className="signin__background">
            <Navbar/>
            <div className='signin__formContainer'>
                <h1 className='signin__title'>Sign In</h1>
            <form className='signin__form'>
            <input className='signin__input' placeholder='Email address or phone number'/>
            <input className="signin__input" placeholder='Password'/>
            <button className='signin__button'>Sign In</button>
            </form>
            </div>
            
         
        </div>
    )
}

export default SignIn
