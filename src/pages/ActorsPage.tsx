import React from 'react'
import Header from '../Header'
import '../App.css'
import ActorCardContainer from '../ActorCardContainer'
import ActorFetchButton from '../ActorFetchButton'
import { useState, useEffect } from 'react'

const ActorsPage = () =>{
    
    
    
    const [count, setCount] = useState(0);
    const [actors, setActors] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
            fetch('http://localhost:8080/actors')
                .then((response) => response.json())
                .then((data) => setActors(data));
            console.log(actors);
        }, [count])
    

    return(
        <>
            <Header />
            <label className="homelabelleft" >Find your Film: </label>
            <input className="movieinput" type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <ActorFetchButton search={search} actors={actors} setActors={setActors} />
            <br /><br />
            {(actors.length !== 0) ? <ActorCardContainer actors={actors} /> : <></>}



        </>
            
       
    )
}
export default ActorsPage