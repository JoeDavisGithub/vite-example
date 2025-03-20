import Header from '../Header'
import '../App.css'
import CreateActorFetchButton from '../CreateActorFetchButton'
import { useState, useEffect } from 'react'
import { API_URL } from '../config'
import { useNavigate } from 'react-router-dom';

type Movie = {
    id: string;
    title: string;
}




const CreateActorPage = () => {

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [search, setSearch] = useState("");
    const [films, setFilms] = useState<Movie[]>([]);
    const [actfilms, setActFilms] = useState<Movie[]>([]);
    const [isPending,setIsPending] = useState(false);
    const navigate = useNavigate();

    function addfilm(film: Movie) {
        let rem = actfilms.findIndex(i => i.id === film.id);
        if (rem === -1) {
            const newFilm: Movie = { id: film.id, title: film.title };
            setActFilms([...actfilms, newFilm])
        } 
    }
    function removefilm(film: Movie) {
        setActFilms(actfilms.filter(i => i.id !== film.id));
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        let filmIds: Number[] = [];
        actfilms.map((film: {
            id: string;
            title: string;
        }) => filmIds.push(Number(film.id)));
        setIsPending(true);
        const actor = {firstName,lastName,filmIds}
        fetch(API_URL+'/actors', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(actor)
        }).then(()=> {
            setIsPending(false);
            fetch(API_URL+'/actors?name='+actor.firstName+" "+actor.lastName)
            .then((response) => response.json())
            .then((data) => {navigate("/actor?name="+data[0].id)})
        })

    }

    useEffect(() => {

        setActFilms(actfilms)

    }, [actfilms])

    return (
        <>
            <Header />
            <form className="createform" onSubmit={handleSubmit}>
            <p className="createheader">Enter the details of your Actor</p>

                <div className="formtexts">
                <div>
                <label className="createLabel">First Name:</label><br/>
                <label className="createLabel">Last Name:</label><br/>
                <label className="createLabel">Look for movie to add to actor's credits:</label><br/>
                </div>
                <div>
                <input  type="text" name="actFirstName" required onChange={(e)=> setFirstName(e.target.value)} ></input><br/>
                <input type="text" name="actLastName" required onChange={(e)=> setLastName(e.target.value)} ></input><br/>
                <input className="movieinput" name="movieinput" type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input> <CreateActorFetchButton search={search} films={films} setFilms={setFilms} /><br/>
                </div>
                </div>
            
            <div className="createactmovboxes" >

                <div className="createactprev">
                    <div><p>Click to add movie to actor's credits</p></div>
                    {(films.length !== 0) ? <ul >
                        {
                            films.map((film: {
                                id: string;
                                title: string;
                            }) => (
                                <div key={film.id}>

                                    <button type="button" className='createactprevlist' onClick={() => addfilm(film)} data-testid={'movlist-item-' + film.id} ><li >{film.title}</li></button>

                                </div>
                            ))}
                    </ul> : <></>}

                </div>

                <div className="createactprev">
                    <div><p>Click to remove movie from actor's credits</p></div>

                    {(actfilms.length !== 0) ? <ul >
                        {
                            actfilms.map((film: {
                                id: string;
                                title: string;
                            }) => (
                                <div key={film.id}>

                                    <button type="button" className='createactprevlist' onClick={() => removefilm(film)} data-testid={'movlist-item-' + film.id} ><li >{film.title}</li></button>

                                </div>
                            ))}
                    </ul> : <></>}
                </div>

            </div>
            {!isPending && <button type="submit"> Submit Actor </button>}
            {isPending && <button disabled> Adding Actor </button>}
            </form>    
        </>
    )
}
export default CreateActorPage