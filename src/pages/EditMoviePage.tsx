import Header from '../Header'
import '../App.css'
import CreateMovieFetchButton from '../CreateMovieFetchButton'
import { useState, useEffect } from 'react'
import { API_URL } from '../config'
import { useNavigate } from 'react-router-dom';

type Actor = {
    id: string;
    fullName: string;
}




const EditMoviePage = () => {


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [release_year, setRelease_Year] = useState(0);
    const [rental_duration, setRental_Duration] = useState(0);
    const [rental_rate, setRental_Rate] = useState(0);
    const [replacement_cost, setReplacement_Cost] = useState(0);
    const [rating, setRating] = useState("");
    const [length, setLength] = useState(0);
    const [special_featuresArr, setSpecial_FeaturesArr] = useState<string[]>([]);
    const [actors, setActors] = useState<Actor[]>([]);
    const [filmacts, setFilmActs] = useState<Actor[]>([]);
    const [isPending, setIsPending] = useState(false);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const queryParameters = new URLSearchParams(window.location.search)
    const name = queryParameters.get("name");



    function addfilm(actor: Actor) {
        let rem = filmacts.findIndex(i => i.id === actor.id);
        if (rem === -1) {
            const newFilm: Actor = { id: actor.id, fullName: actor.fullName };
            setFilmActs([...filmacts, newFilm])
        }
    }
    function removefilm(film: Actor) {
        setFilmActs(filmacts.filter(i => i.id !== film.id));
    }

    const handleFSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        let actorIDs: Number[] = [];
        filmacts.map((actor: {
            id: string;
            fullName: string;
        }) => actorIDs.push(Number(actor.id)));
        setIsPending(true);
        let language_id=1;
        let special_features=special_featuresArr.join(",");
        const film = {title,description,release_year,language_id,rental_duration,rental_rate,length,replacement_cost,rating,special_features,actorIDs}
        fetch(API_URL+'/films/' + name,{
            method: 'PATCH',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(film)
        }).then(()=> {
            navigate("/movie?title="+name);
        })
        //
    }

    useEffect(() => {

        if (name !== undefined) {
            fetch(API_URL + '/films/' + name)
            .then((response) => response.json())
            .then((data) => {
                setFilmActs(data.actors);
                setTitle(data.title);
                setDescription(data.description);
                setRelease_Year(data.release_year);
                setRental_Duration(data.rental_duration);
                setRental_Rate(data.rental_rate);
                setReplacement_Cost(data.replacement_cost);
                setLength(data.length);
                setRating(data.rating);
                setSpecial_FeaturesArr(data.special_features);
                
            });
        }
    

    }, [])
    
    function handleCheckbox(val: string) {
        let temp=special_featuresArr.slice();
        const index = special_featuresArr.indexOf(val);
        const arrayContainsString = index !== -1;
        if(arrayContainsString){
            temp.splice(index, 1);
            setSpecial_FeaturesArr(temp);

        }else{
           
            temp.push(val);
            setSpecial_FeaturesArr(temp);
        }
    }
    
    
    return (
        <>
            <Header />
          
            <form className="createform" onSubmit={handleFSubmit}>
                <p className="createheader">Enter the details of your Movie</p>

                <div className="formtexts">
                    <div>
                        <label className="createLabel">Title:</label><br />
                        <label className="createLabel">Description:</label><br />
                        <label className="createLabel">Release Year:</label><br />
                        <label className="createLabel">Rental Rate:</label><br />
                        <label className="createLabel">Rental Duration:</label><br />
                        <label className="createLabel">Replacement cost:</label><br />
                        <label className="createLabel">length:</label><br />
                        <label className="createLabel">Rating:</label><br /><br />
                        <label className="createLabel">Special Features:</label><br /><br /><br /><br /><br /><br />

                        <label className="createLabel">Look for movie to add to actor's credits:</label><br />
                    </div>

                    <div>
                        <input className="createmovinp" type="text" name="movtitle" required value={title} onChange={(e) => setTitle(e.target.value)} ></input><br />
                        <input className="createmovinp" type="text" name="movdescription" required value={description} onChange={(e) => setDescription(e.target.value)} ></input><br />
                        <input className="createmovinp" type="Number" name="movyear" min={1901} max={2155} value={release_year} onChange={(e) => setRelease_Year(Number(e.target.value))} ></input><br />
                        <input className="createmovinp" type="Number" required name="movrentalrate" min={1} value={rental_rate} onChange={(e) => setRental_Rate(Number(e.target.value))} ></input><br />
                        <input className="createmovinp" type="Number" required name="movrentalduration" min={1} max={20} value={rental_duration} onChange={(e) => setRental_Duration(Number(e.target.value))} ></input><br />
                        <input className="createmovinp" type="Number" required name="movreplacementcost" min={1} value={replacement_cost} onChange={(e) => setReplacement_Cost(Number(e.target.value))} ></input><br />
                        <input className="createmovinp" type="Number" name="movlength" min={1} value={length} onChange={(e) => setLength(Number(e.target.value))} ></input><br />
                        <select name="selectRating" value={rating} onChange={(e)=> setRating(e.target.value)}>
                            <option value="G">G</option>
                            <option value="PG">PG</option>
                            <option value="PG-13">PG-13</option>
                            <option value="R">R</option>
                            <option value="NC-17">NC-17</option>
                        </select><br />
                        <ul>
                            <li>
                                <label>Trailers</label>
                                <input type="checkbox" name="Trailers" value="Trailers" checked={special_featuresArr.includes("Trailers")} onChange={(e)=> {handleCheckbox(e.target.value)}}/>
                            </li>
                            <li>
                                <label >Commentaries</label>
                                <input type="checkbox"  name="Commentaries" value="Commentaries"  checked={special_featuresArr.includes("Commentaries")} onChange={(e)=> {handleCheckbox(e.target.value)}}/>
                            </li>
                            <li>
                                <label >Deleted Scenes</label>
                                <input type="checkbox" name="Deleted Scenes" value="Deleted Scenes"  checked={special_featuresArr.includes("Deleted Scenes")} onChange={(e)=> {handleCheckbox(e.target.value)}}/>
                            </li>
                            <li>
                                <label  >Behind the Scenes</label>
                                <input type="checkbox" name="Behind the Scenes" value="Behind the Scenes"  checked={special_featuresArr.includes("Behind the Scenes")} onChange={(e)=> {handleCheckbox(e.target.value)}}/>
                            </li>
                        </ul><br />
                        <input className="movieinput" name="movieinput" type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input> <CreateMovieFetchButton search={search} actors={actors} setActors={setActors} /><br />
                    </div>
                </div>

                <div className="createactmovboxes" >

                    <div className="createactprev">
                        <div><p>Click to add movie to actor's credits</p></div>
                        {(actors.length !== 0) ? <ul >
                            {
                                actors.map((actor: {
                                    id: string;
                                    fullName: string;
                                }) => (
                                    <div key={actor.id}>

                                        <button type="button" className='createactprevlist' onClick={() => addfilm(actor)} data-testid={'movlist-item-' + actor.id} ><li >{actor.fullName}</li></button>

                                    </div>
                                ))}
                        </ul> : <></>}

                    </div>

                    <div className="createactprev">
                        <div><p>Click to remove movie from actor's credits</p></div>

                        {(filmacts.length !== 0) ? <ul >
                            {
                                filmacts.map((actor: {
                                    id: string;
                                    fullName: string;
                                }) => (
                                    <div key={actor.id}>

                                        <button type="button" className='createactprevlist' onClick={() => removefilm(actor)} data-testid={'movlist-item-' + actor.id} ><li >{actor.fullName}</li></button>

                                    </div>
                                ))}
                        </ul> : <></>}
                    </div>

                </div>
                {!isPending && <button type="submit" > Submit Movie </button>}
                {isPending && <button disabled> Adding Movie </button>}
            </form>
        </>
    )
}
export default EditMoviePage;