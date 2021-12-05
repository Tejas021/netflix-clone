
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import MoviePage from './pages/MoviePage';
function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/signin" element={<SignIn/>}></Route>
    <Route path="/movie/:id" element={<MoviePage/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
