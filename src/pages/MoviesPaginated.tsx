import { useState, useEffect } from 'react'
import MovieCardContainer from '../MovieCardContainer'
import MovieFetchButton from '../MovieFetchButton'
import Header from '../Header'
import '../App.css'
import { API_URL } from '../config'

const MoviesPaginated = () => {


    const [films, setFilms] = useState([]);
    const [search, setSearch] = useState("");
    const [pageoffset, setPageOffset] = useState(0);
    const [totalpageno, setTotalPageNo] = useState(1);

    useEffect(() => {

        const offset = isNaN(pageoffset) ? 0 : pageoffset
        setPageOffset(offset)

        fetch(API_URL + '/films/page?offset=' + offset)
            .then((response) => response.json())
            .then((data) => { setFilms(data.content); setTotalPageNo(data.totalPages); });





    }, [pageoffset])

    useEffect(() => {

        if(search===""){
            setPageOffset(0);
            fetch(API_URL + '/films/page?offset=' + 0)
            .then((response) => response.json())
            .then((data) => { setFilms(data.content); setTotalPageNo(data.totalPages); });
        }




    }, [search])



    function changePage(offsetter: number) {
        if (pageoffset <= 0 && offsetter <= 0) {
            setPageOffset(0)

        } else if (pageoffset >= totalpageno - 1 && offsetter >= 0) {
            
            setPageOffset(totalpageno-1)
        }else if (pageoffset >= totalpageno && offsetter < 0) {
            setPageOffset(totalpageno-1)
        }
        else {
            setPageOffset(pageoffset + offsetter)
        }
    }
    return (

        <>
            <Header />
            <label className="homelabelleft" >Find your Film: </label>
            <input className="movieinput" name="movieinput" type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <MovieFetchButton search={search} films={films} setFilms={setFilms} /> <button className="fetchbutton" onClick={() => setSearch("")}>Clear</button>
            <br /><br />
            <button onClick={() => changePage(-1)} disabled={search!==""}>Prev. Page</button>
            <input className="movieinput" disabled={search!==""} name="pageinput" type="number" min={0} max={totalpageno - 1} value={pageoffset}  onChange={(e) => setPageOffset(parseInt(e.target.value))}></input>
            <button onClick={() => changePage(1)} disabled={search!==""}>Next Page</button>
            
            <br></br>
            {(films.length !== 0) ? <MovieCardContainer movies={films} /> : <></>}
            {/*  disabled={films.length === 0}*/}

        </>

    )
}
export default MoviesPaginated