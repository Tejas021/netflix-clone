import React from 'react'
import Navbar from '../components/Navbar'
import "./Profile.css"
import {useSelector} from "react-redux"
import { auth } from '../firebase1'
const Profile = () => {
    const user = useSelector(state => state.user)
    
    return (
        <div className='profile__screen'>
            <Navbar/>
           <div className="profile__container">
               <h1>Edit Profile</h1>
            <div className="profile__body">
                <img alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7BiQ7AEUOpTwEjCyst0jHDri-Nfk1jvNRJkO2c11BBLktqzWlTWnJD3mGzUiPLIWkfA&usqp=CAU"></img>
                <div className='profile__info'>
                    <h1>{user.user.email}</h1>
                   
                   <div className='plans'>
                       <h3 className="plans__title">plans</h3>
                    <div className='plan__card'>
                        <p className="plan__name">NEW PLAN</p>
                        <button>SUBSCRIBE</button>
                    </div>
                    <div className='plan__card'>
                        <p className="plan__name">NEW PLAN</p>
                        <button>SUBSCRIBE</button>
                    </div>
                    <div className='plan__card'>
                        <p className="plan__name">NEW PLAN</p>
                        <button>SUBSCRIBE</button>
                    </div>
                   </div>
                   
                    <button onClick={()=>auth.signOut()}>Logout</button>
                </div>
            </div>
           </div>
           
        </div>
    )
}

export default Profile
