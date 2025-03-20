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

        fetch(API_URL+'/actors/' + name)
            .then((response) => response.json())
            .then((data) => setActor(data));



    }, [name])


    return (
        <>
            <Header />

            {(actor !== null) && <IndividualActor fullName={actor.fullName} id={actor.id} films={actor.films} /> }

           

        </>
    )
}
export default ActorPage