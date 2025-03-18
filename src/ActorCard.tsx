import './App.css'
import { useState } from 'react'
import { Link } from "react-router-dom";
import actor2 from './assets/actor2.png'
import actor3 from './assets/actor3.png'
import actor4 from './assets/actor4.png'
import actor5 from './assets/actor5.png'
import actor6 from './assets/actor6.png'
import actor7 from './assets/actor7.png'
import actor8 from './assets/actor8.png'
import actor9 from './assets/actor9.png'
import actor10 from './assets/actor10.png'
import actor11 from './assets/actor11.png'

interface ActorCardProps {
    id: string;
    firstName: string;
    lastName: string;
    films: { id: string; title: string }[];
}
// shadow-sm p-3 mb-5 bg-white rounded 

function ActorCard(props: ActorCardProps) {
    let idval = Number(props.id) % 10;
    const [clicked, setClicked] = useState(false);
    //console.log(idval)
    //let lastDigit = Number(props.id.slice(-1));
    let imgs = [actor2, actor3, actor4, actor5,
        actor6, actor7, actor8, actor9, actor10, actor11];
    
    function invertState(){
        setClicked(!clicked); 
        //console.log(clicked);
    }

    let cssSelector = "moviecard" 
    if(clicked===true){cssSelector+=" moviecardClicked"}

    return (
        <div data-testid={'actlist-item-'+props.id} onClick={() => invertState()} className={cssSelector}>
            <div className="moviecard-inner">
                <div className="moviecard-front">
                    <img className="movieimage grow" src={imgs[idval]}></img>
                    
                    <p className="cardlabel"><strong>Name:</strong></p>
                    <p>{`${props.firstName} ${props.lastName}`}</p>
                </div>
                <div className="moviecard-back">
                    <p className="cardlabel"><strong>Starring in:</strong></p>
                    <ul>
                        {
                            props.films.map((film: {
                                id: string;
                                title: string;
                            }) => (
                                <div key={film.id}>
                                    <div className="moviecardactorlist">
                                    <Link to={"/movie?title="+film.id}><button data-testid={'actlist-item-'+props.id+'-'+film.id} className="moviecardbutton" ><li >{film.title}</li></button></Link>
                                    </div>
                                </div>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default ActorCard;

