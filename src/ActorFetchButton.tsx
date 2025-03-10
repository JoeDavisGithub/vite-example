
interface ActorFetchButtonProps {
    search: string;
    actors: {firstName:string,id:string,lastName:string,films:{id:string,title:string;}}[];
    setActors:Function;
}

function ActorFetchButton(props: ActorFetchButtonProps) {
    return(
        <button className="fetchbutton" onClick={() => fetch('http://localhost:8080/actors?name='+props.search)
            .then((response) => response.json())
            .then((data) => props.setActors(data))}>
            Search
        </button>
        
    )
}

export default ActorFetchButton


// <button onClick={() => fetch('http://localhost:8080/films?title='+search)
//           .then((response) => response.json())
//           .then((data) => setFilms(data))}>Search2</button>