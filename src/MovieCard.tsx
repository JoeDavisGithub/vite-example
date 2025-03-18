import './App.css'
import { Link } from "react-router-dom";
import { useState } from 'react'
import film2 from './assets/film2.png'
import film3 from './assets/film3.png'
import film4 from './assets/film4.png'
import film5 from './assets/film5.png'
import film6 from './assets/film6.png'
import film7 from './assets/film7.png'
import film8 from './assets/film8.png'
import film9 from './assets/film9.png'
import film10 from './assets/film10.png'
import film11 from './assets/film11.png'

interface MovieCardProps {
    id: string;
    title: string;
    description: string;
    actors: { id: string; fullName: string }[];
}
// shadow-sm p-3 mb-5 bg-white rounded 

function MovieCard(props: MovieCardProps) {
    let idval = Number(props.id) % 10;
    const [clicked, setClicked] = useState(false);
    //console.log(idval)
    //let lastDigit = Number(props.id.slice(-1));
    let imgs = [film2, film3, film4, film5,
        film6, film7, film8, film9, film10, film11];
    
    function invertState(){
        setClicked(!clicked); 
        //console.log(clicked);
    }

    let cssSelector = "moviecard" 
    if(clicked===true){cssSelector+=" moviecardClicked"}

    return (
        <div data-testid={'movlist-item-'+props.id} onClick={() => invertState()} className={cssSelector}>
            <div className="moviecard-inner">
                <div className="moviecard-front">
                    <img className="movieimage grow" src={imgs[idval]}></img>
                    
                    <p className="cardlabel"><strong>Title:</strong></p>
                    <p>{props.title}</p>
                    
                    <p className="cardlabel"><strong>Description:</strong></p>
                    <p className="cardDescription">{props.description}</p>
                </div>
                <div className="moviecard-back">
                    <p className="cardlabel"><strong>Starring:</strong></p>
                    <ul>
                        {
                            props.actors.map((actor: {
                                id: string;
                                fullName: string;
                            }) => (
                                <div key={actor.id}>
                                    <div className="moviecardactorlist">
                                    <Link to={"/actor?name="+actor.id}><button data-testid={'movlist-item-'+props.id+'-'+actor.id} className="moviecardbutton"><li >{actor.fullName}</li></button></Link>
                                    </div>
                                </div>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default MovieCard;
