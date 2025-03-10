import { Link } from "react-router-dom";
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
    let imgs = ["src/assets/film2.png", "src/assets/film3.png", "src/assets/film4.png", "src/assets/film5.png",
        "src/assets/film6.png", "src/assets/film7.png", "src/assets/film8.png", "src/assets/film9.png", "src/assets/film10.png", "src/assets/film11.png"];
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