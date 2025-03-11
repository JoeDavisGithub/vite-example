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
        fetch(API_URL+'/films')
            .then((response) => response.json())
            .then((data) => setFilms(data));
        console.log(films);
    }, [])


    return (

        <>
            <Header />
            <label className="homelabelleft" >Find your Film: </label>
            <input className="movieinput" type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <MovieFetchButton search={search} films={films} setFilms={setFilms} />
            <br /><br />
            {(films.length !== 0) ? <MovieCardContainer movies={films} /> : <></>}



        </>

    )
}
export default MoviesPage