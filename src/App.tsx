import { useState, useEffect } from 'react'
import './App.css'
import FetchButton from './FetchButton'
import MovieCardContainer from './MovieCardContainer'
import MovieFetchButton from './MovieFetchButton'
import { BrowserRouter } from 'react-router-dom';


function App() {

  const [count, setCount] = useState(0);
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("");

  //can use response.content /// can navigate properties
  useEffect(() => {
    fetch('http://localhost:8080/films')
      .then((response) => response.json())
      .then((data) => setFilms(data));
    console.log(films);
  }, [count])


  return (
    <>
      <div className="topnav">
        <div className="topnavbutton"><a className="active" href="#home">FyF</a></div>
        <div className="topnavbutton"><a href="#news">Actors</a></div>
        
      </div>
      <label className="homelabelleft" >Find your Film: </label>
      <input className="movieinput" type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
      <MovieFetchButton search={search} films={films} setFilms={setFilms} />
      <br /><br />
      {(films.length !== 0) ? <MovieCardContainer movies={films} /> : <></>}



    </>
  )
}

export default App
