import Header from '../Header'
import '../App.css'
import ActorCardContainer from '../ActorCardContainer'
import ActorFetchButton from '../ActorFetchButton'
import { useState, useEffect } from 'react'
import { API_URL } from '../config'

const ActorsPage = () =>{
    
    
    
    const [actors, setActors] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
            fetch(API_URL+'/actors')
                .then((response) => response.json())
                .then((data) => setActors(data));
            console.log(actors);
        }, [])
    

    return(
        <>
            <Header />
            <label className="homelabelleft" >Find your Actor: </label>
            <input className="movieinput" type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <ActorFetchButton search={search} actors={actors} setActors={setActors} />
            <br /><br />
            {(actors.length !== 0) ? <ActorCardContainer actors={actors} /> : <></>}



        </>
            
       
    )
}
export default ActorsPage