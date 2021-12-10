
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import MoviePage from './pages/MoviePage';
import {auth} from "./firebase1"
import { useEffect } from 'react';

import {  useDispatch, useSelector } from 'react-redux'
import { login, logout } from './redux/features/userSlice';
import Profile from './pages/Profile';

function App() {
  const dispatch = useDispatch()
 const user = useSelector(state => state.user.user)
  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch(login({uuid:authUser.uid,email:authUser.email}))
        console.log(authUser)
      }
      else{
        dispatch(logout())
        console.log("no user")
      }
    })
    return unsubscribe
  }, [dispatch])
  return (
    
  <div className="app">
    <BrowserRouter>
    {!user?<SignIn/>: <Routes>
      
    
      <Route path="/" element={<Home/>}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/movie/:id" element={<MoviePage/>}></Route>
      </Routes>}
   
    </BrowserRouter>
    </div>

    
  );
}

export default App;
