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
    console.log(idval)
    //let lastDigit = Number(props.id.slice(-1));
    let imgs = [actor2, actor3, actor4, actor5,
        actor6, actor7, actor8, actor9, actor10, actor11];
    
    function invertState(){
        setClicked(!clicked); 
        console.log(clicked);
    }

    let cssSelector = "moviecard" 
    if(clicked===true){cssSelector+=" moviecardClicked"}

    return (
        <div onClick={() => invertState()} className={cssSelector}>
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
                                    <Link to={"/movie?title="+film.id}><button className="moviecardbutton" ><li >{film.title}</li></button></Link>
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

// function MovieCard(props:MovieCardProps) {
//     let val = Math.floor(Math.random() * 10);
//     let imgs = [img2,img3,img4,img5,img6,img7,img8,img9,img10,img11];
//     let imgs2 = ["./assets/film2.png","./assets/film3.png","./assets/film3.png","./assets/film4.png","./assets/film5.png","./assets/film6.png"
//         ,"./assets/film7.png","./assets/film8.png","./assets/film9.png","./assets/film10.png","./assets/film11.png"];
//     console.log(val)
//     return (
//         <div>
//             <img src={imgs2[val]}></img>
//         </div>
//       );
//     }


// <div className="moviebox">
//             <div className="movieboxWithin">
//                 <img className="movieimage" src={imgs[idval]}></img>
//                 <p className="cardlabel"><strong>Title:</strong></p>
//                 <p>{props.title}</p>
//                 <p className="cardlabel"><strong>Description:</strong></p>
//                 <p>{props.description}</p>
//                 {/* <p>{props.actors.map(actor => `${actor.fullName}`).join(', ')}</p> */}
//                 <p className="cardlabel"><strong>Starring:</strong></p>
//                 <ul>
//                 {
//                     props.actors.map((actor: {
//                         id: string;
//                         fullName: string;
//                     }) => (
//                         <div key={actor.id}>
//                             <li>{actor.fullName}</li>
//                         </div>
//                     ))}
//                 </ul>
//             </div>
//         </div>