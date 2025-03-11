import { Link } from "react-router-dom";
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


interface IndividudalFilmProps {
    id: string;
    title: string;
    description: string;
    actors: { id: string; fullName: string }[];
    year:string;
    length:string;
    rentalrate:string;
    replacementcost:string;
    rating:string;
    specialfeatures:string[];
}


const IndividualFilm = (props: IndividudalFilmProps) => {
    let imgs = [film2, film3, film4, film5,
        film6, film7, film8, film9, film10, film11];
    let idval = Number(props.id) % 10;
    return (
        <>
            <div className="indindvdisplay">
                <div className="indvdleftside" ><img className="indvdimage" src={imgs[idval]} /><p className="indvdlabel">{props.title}<br/>{props.year}</p></div>

                <span className="moviemeta">
                    <div className="movieinfo">
                    <p>length: {Math.floor(Number(props.length)/60)+" hours "+Number(props.length)%60+" minutes" }</p>
                    <p>Rental Rate: £{props.rentalrate}</p>
                    <p>Replacement Cost: £{props.replacementcost}</p>
                    <p>Rating: {props.rating}</p>
                    <div>
                    <p>Special Features: {props.specialfeatures.join(' / ')}</p>
                    </div>
                    </div>
                    <div className="actorlistholder">
                        <ul className="actorlist">
                            {
                                props.actors.map((actor: {
                                    id: string;
                                    fullName: string;
                                }) => (
                                        <Link className="link" to={"/actor?name=" + actor.id}><li className="movieactorli">{actor.fullName}</li></Link>
                                ))}
                        </ul>
                    </div>
                </span>
            </div>
        </>
    )
}
export default IndividualFilm