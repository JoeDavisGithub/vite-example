import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import IndividualFilm from '../IndividualFilm'
import Header from '../Header'

const MoviePage = () => {

    const queryParameters = new URLSearchParams(window.location.search)
    const name = queryParameters.get("title")
    const [film, setFilm] = useState([]);
    const [count, setCount] = useState(0);
    


    useEffect(() => {
        console.log(name)
        if (film.length === 0) {
            fetch('http://localhost:8080/films/' + name)
            .then((response) => response.json())
            .then((data) => setFilm(data));
            
        }
        console.log(film)

    }, [count])
    

    return (
        <>
            <Header />

            {(film.length !== 0) ? <IndividualFilm id={film.id} title={film.title} description={film.description}
             actors={film.actors} year={film.release_year} length={film.length} rentalrate={film.rental_rate} replacementcost={film.replacement_cost}
             rating={film.rating} specialfeatures={film.special_features} />: <></>} 

        </>
    )
}
export default MoviePage