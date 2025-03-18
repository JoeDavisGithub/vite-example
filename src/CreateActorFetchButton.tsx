import { API_URL } from "./config";


type Movie = {
    id: string;
    title: string;
}





interface CreateActorFetchButtonProps {
    search: string;
    films: Movie[]
    setFilms:Function;
}

function CreateActorFetchButton(props: CreateActorFetchButtonProps) {
    return(
        <button type="button" className="fetchbutton" onClick={() => fetch(API_URL+'/films?title='+props.search)
            .then((response) => response.json())
            .then((data) => props.setFilms(data))}>
            Search
        </button>
        
    )
}

export default CreateActorFetchButton

