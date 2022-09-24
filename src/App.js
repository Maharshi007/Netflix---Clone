import React from 'react'
// import Row from './Row'
// import requests from './Request'
// import Banner from './Banner'
// import Navbar from './Navbar'
import './App.css'
import List from './List'

// https://api.themoviedb.org/3/movie/550?api_key=bd681df2b47eba94cb23aaba5e6b9603
function App() {
  return (
    <div className="app">
      <List />
      {/* <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top-Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  )
}

export default App
