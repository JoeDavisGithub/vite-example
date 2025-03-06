import './App.css'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

interface ActorCardProps {
    id: string;
    firstName: string;
    lastName: string;
    films: { id: string; title: string }[];
}
// shadow-sm p-3 mb-5 bg-white rounded 

function ActorCard(props: ActorCardProps) {
    let val = Math.floor(Math.random() * 10);
    let idval = Number(props.id) % 10;
    const [clicked, setClicked] = useState(false);
    console.log(idval)
    //let lastDigit = Number(props.id.slice(-1));
    let imgs = ["src/assets/actor2.png", "src/assets/actor3.png", "src/assets/actor4.png", "src/assets/actor5.png",
        "src/assets/actor6.png", "src/assets/actor7.png", "src/assets/actor8.png", "src/assets/actor9.png", "src/assets/actor10.png", "src/assets/actor11.png"];
    
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
                                    <button className="moviecardbutton" ><Link to={"/movie?title="+film.id}><li >{film.title}</li></Link></button>
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