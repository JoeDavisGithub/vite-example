import { useState, useEffect } from 'react'
import IndividualActor from '../IndividualActor'
import Header from '../Header'
import { API_URL } from '../config'

type Actor = {
    id: string;
    fullName: string;
    films: { id: string, title: string, description: string }[]
}

const ActorPage = () => {

    const queryParameters = new URLSearchParams(window.location.search)
    const name = queryParameters.get("name")
    const [actor, setActor] = useState<Actor | null>(null);
    





    useEffect(() => {
        console.log(name)

        fetch(API_URL+'actors/' + name)
            .then((response) => response.json())
            .then((data) => setActor(data));


        console.log(actor)

    }, [name])


    return (
        <>
            <Header />

            {(actor !== null) && <IndividualActor fullName={actor.fullName} id={actor.id} films={actor.films} /> }

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