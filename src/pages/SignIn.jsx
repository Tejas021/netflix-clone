import React, { useState,useRef } from 'react'
import Navbar from '../components/Navbar'
//import { useNavigate } from 'react-router'
import "./SignIn.css"
import InputBox from './InputBox'
import {auth} from '../firebase1'
const SignIn = () => {
//    const navigate=useNavigate()
    const emailRef = useRef()
    const passwordRef= useRef()
const [signIn,setSignIn]=useState(false)
    const handleRegister=async (e)=>{
        e.preventDefault()
        try{
            await auth.createUserWithEmailAndPassword(emailRef.current.value,passwordRef.current.value).then(res=>console.log(res))
        }
        catch(err){
            alert(err)
        }
       console.log(emailRef.current.value,passwordRef.current.value)
      
    }
    const handleSignIn=async(e)=>{
        e.preventDefault()
       console.log(emailRef.current.value,passwordRef.current.value)
     try{
        await auth.signInWithEmailAndPassword(emailRef.current.value,passwordRef.current.value).then((authUser)=>console.log(authUser))

    }
     catch(err){
         alert(err)
     }
      
     
    }
    return (
        <div className="signin__background">
            <Navbar/>
            {signIn?(   <div className='signin__formContainer'>
                <h1 className='signin__title'>Sign In</h1>
            <form className='signin__form'>
            <input className='signin__input' placeholder='Email address or phone number' ref={emailRef}/>
            <input className="signin__input" type="password" placeholder='Password' ref={passwordRef}/>
            <button className='signin__button' onClick={e=>handleSignIn(e)}>Sign In</button>
            <p>Dont have an account?<span className='signin__signup' onClick={e=>handleRegister(e)}> Sign Up</span> </p>
            </form>
            </div>):(<InputBox setSignIn={setSignIn}/>)}
         
            
         
        </div>
    )
}

export default SignIn
