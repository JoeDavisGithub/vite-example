import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import IndividualActor from '../IndividualActor'
import Header from '../Header'

// type Actor = {
//     id:string;
//     fullName:string;
//     films:{id:string,title:string,description:string}[]
// }

const ActorPage = () => {

    const queryParameters = new URLSearchParams(window.location.search)
    const name = queryParameters.get("name")
    const [actor, setActor] = useState([]);
    const [count, setCount] = useState(0);
   
    
    


    useEffect(() => {
        console.log(name)
        if (actor.length === 0) {
            fetch('http://localhost:8080/actors/' + name)
            .then((response) => response.json())
            .then((data) => setActor(data));
            
        }
        console.log(actor)

    }, [count])
    

    return (
        <>
            <Header />

            {(actor.length !== 0) ? <IndividualActor fullName={actor.fullName} id={actor.id} films={actor.films} />: <></>} 
            
                {/* <div>
                    <p>{actor.fullname}</p>
                    {
                        actor.films.map((film: {
                            id: string;
                            title: string;
                        }) => (
                            <div key={film.id}>
                                <div className="moviecardactorlist">
                                    <button className="moviecardbutton" ><Link to={"/movie?title=" + film.id}><p >{film.title}</p></Link></button>
                                </div>
                            </div>
                        ))}
                </div> */}



            {/* {(actor.length !== 0) ?  : <></>} */}

        </>
    )
}
export default ActorPage