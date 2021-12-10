import React from 'react'

import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Row from "../components/Row"
import Search from '../components/Search';
import requests from "../requests"
const Home = () => {
    return (
        <div>
           <Navbar/>
      <Banner/>
      <Search/>
      <Row title="netflix originals" fetchUrl={requests.fetchNetflixOriginals} isLarge={true}/>
      <Row title="trending now" fetchUrl={requests.fetchTrending}/>
      <Row title="toprated" fetchUrl={requests.fetchTopRated}/>
      <Row title="action movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="comedy movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="horror movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="romance movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="documentaries" fetchUrl={requests.fetchDocumentaries}/>  
        </div>
    )
}

export default Home
