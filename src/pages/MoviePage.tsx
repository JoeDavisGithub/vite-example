import { useState, useEffect } from 'react'
import IndividualFilm from '../IndividualFilm'
import Header from '../Header'
import { API_URL } from '../config';


type Film = {
    id: string;
    title: string;
    description: string;
    actors: [];
    release_year: string;
    length: string;
    rental_rate: string;
    replacement_cost: string;
    rental_duration:string;
    rating:string;
    special_features:string[];
}

const MoviePage = () => {

    const queryParameters = new URLSearchParams(window.location.search)
    const name = queryParameters.get("title")
    const [film, setFilm] = useState<Film | null>(null);



    useEffect(() => {
        fetch(API_URL+'/films/' + name)
            .then((response) => response.json())
            .then((data) => setFilm(data));

    }, [film])


    return (
        <>
            <Header />

            {(film !== null) && <IndividualFilm id={film.id} title={film.title} description={film.description}
                actors={film.actors} year={film.release_year} length={film.length} rentalrate={film.rental_rate} replacementcost={film.replacement_cost}
                rating={film.rating} rentalduration={film.rental_duration} specialfeatures={film.special_features} />}

        </>
    )
}
export default MoviePage