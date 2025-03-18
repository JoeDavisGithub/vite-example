import { useState, useEffect } from 'react'
import MovieCardContainer from '../MovieCardContainer'
import MovieFetchButton from '../MovieFetchButton'
import Header from '../Header'
import '../App.css'
import { API_URL } from '../config'

const MoviesPage = () => {


    const [films, setFilms] = useState([]);
    const [search, setSearch] = useState("");

    //can use response.content /// can navigate properties
    useEffect(() => {
        console.log(API_URL)
        console.log(import.meta.env.VITE_API_URL)
        fetch(API_URL+'/films')
            .then((response) => response.json())
            .then((data) => setFilms(data));
        console.log(films);
    }, [])


    return (

        <>
            <Header />
            <label className="homelabelleft" >Find your Film: </label>
            <input className="movieinput" name="movieinput" type="text" value={search} disabled={films.length===0} onChange={(e) => setSearch(e.target.value)}></input>
            <MovieFetchButton search={search} films={films} setFilms={setFilms} />
            <br /><br />
            {(films.length !== 0) ? <MovieCardContainer movies={films} /> : <></>}



        </>

    )
}
export default MoviesPage