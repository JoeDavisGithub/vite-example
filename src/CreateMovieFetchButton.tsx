import { API_URL } from "./config";



type Actor = {
    id: string;
    fullName: string;
}

interface MovieFetchButtonProps {
    search: string;
    actors:Actor[];
    setActors:Function;
}

function MovieFetchButton(props: MovieFetchButtonProps) {
    return(
        <button type="button" className="fetchbutton" onClick={() => fetch(API_URL+'/actors?name='+props.search)
            .then((response) => response.json())
            .then((data) => props.setActors(data))}>
            Search
        </button>
        
    )
}

export default MovieFetchButton


// <button onClick={() => fetch('http://localhost:8080/films?title='+search)
//           .then((response) => response.json())
//           .then((data) => setFilms(data))}>Search2</button>