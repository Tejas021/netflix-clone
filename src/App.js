
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
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/" element={<SignIn/>}></Route>
    <Route path="/movie/:id" element={<MoviePage/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
