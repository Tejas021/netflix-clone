import React from 'react'
import "./InputBox.css"
const InputBox = ({setSignIn}) => {
    return (
        <div className="login__body">
     
          <h1>Unlimited movies, TV shows and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
      
          <div className='login__inputContainer'>
          <input className='login__input' placeholder='email'/>
          <button className='login__button' onClick={()=>setSignIn(true)}>GET STARTED</button>
          </div>

         
        </div>
    )
}

export default InputBox
