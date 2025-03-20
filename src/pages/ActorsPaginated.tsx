import Header from '../Header'
import '../App.css'
import ActorCardContainer from '../ActorCardContainer'
import ActorFetchButton from '../ActorFetchButton'
import { useState, useEffect } from 'react'
import { API_URL } from '../config'

const ActorsPaginated = () => {





    const [actors, setActors] = useState([]);
    const [search, setSearch] = useState("");
    const [pageoffset, setPageOffset] = useState(0);
    const [totalpageno, setTotalPageNo] = useState(1);

    useEffect(() => {

        const offset = isNaN(pageoffset) ? 0 : pageoffset
        setPageOffset(offset)
        fetch(API_URL + '/actors/page?offset=' + Number(offset))
            .then((response) => response.json())
            .then((data) => { setActors(data.content); setTotalPageNo(data.totalPages); })
    }, [pageoffset])

    useEffect(() => {

        if(search===""){
            setPageOffset(0);
            fetch(API_URL + '/actors/page?offset=' + 0)
            .then((response) => response.json())
            .then((data) => { setActors(data.content); setTotalPageNo(data.totalPages); });
        }




    }, [search])

    function changePage(offsetter: number) {
        if (pageoffset <= 0 && offsetter <= 0) {
            setPageOffset(0)

        } else if (pageoffset >= totalpageno - 1 && offsetter >= 0) {

            setPageOffset(totalpageno - 1)
        } else if (pageoffset >= totalpageno && offsetter < 0) {
            setPageOffset(totalpageno - 1)
        }
        else {
            setPageOffset(pageoffset + offsetter)
        }
    }


    return (
        <>
            <Header />
            <label className="homelabelleft" >Find your Actor: </label>
            <input className="movieinput" name="actorinput" type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <ActorFetchButton search={search} actors={actors} setActors={setActors} /> <button className="fetchbutton" onClick={() => setSearch("")}>Clear</button>
            <br /><br />
            <button onClick={() => changePage(-1)} disabled={search !== ""}>Prev. Page</button>
            <input className="movieinput" disabled={search !== ""} name="pageinput" type="number" min={0} max={totalpageno - 1} value={pageoffset} onChange={(e) => setPageOffset(parseInt(e.target.value))}></input>
            <button onClick={() => changePage(1)} disabled={search !== ""}>Next Page</button>
            <br></br>

            {(actors.length !== 0) ? <ActorCardContainer actors={actors} /> : <></>}


        </>


    )
}
export default ActorsPaginated