import { useState, useEffect } from 'react'
import IndividualFilm from '../IndividualFilm'
import Header from '../Header'


type Film = {
    id: string;
    title: string;
    description: string;
    actors: [];
    release_year: string;
    length: string;
    rental_rate: string;
    replacement_cost: string;
    rating:string;
    special_features:string[];
}

const MoviePage = () => {

    const queryParameters = new URLSearchParams(window.location.search)
    const name = queryParameters.get("title")
    const [film, setFilm] = useState<Film | null>(null);



    useEffect(() => {
        console.log(name)

        fetch('http://localhost:8080/films/' + name)
            .then((response) => response.json())
            .then((data) => setFilm(data));


        console.log(film)

    }, [film])


    return (
        <>
            <Header />

            {(film !== null) && <IndividualFilm id={film.id} title={film.title} description={film.description}
                actors={film.actors} year={film.release_year} length={film.length} rentalrate={film.rental_rate} replacementcost={film.replacement_cost}
                rating={film.rating} specialfeatures={film.special_features} />}

        </>
    )
}
export default MoviePage