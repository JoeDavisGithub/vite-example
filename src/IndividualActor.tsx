import { Link } from "react-router-dom";
import ParMovieCard from './ParMovieCard'
interface IndividudalActorProps {
    fullName: string;
    id: string;
    films: { id: string; title: string }[];
   
}


const IndividualActor = (props: IndividudalActorProps) => {
    let imgs = ["src/assets/actor2.png", "src/assets/actor3.png", "src/assets/actor4.png", "src/assets/actor5.png",
        "src/assets/actor6.png", "src/assets/actor7.png", "src/assets/actor8.png", "src/assets/actor9.png", "src/assets/actor10.png", "src/assets/actor11.png"];
    let idval = Number(props.id) % 10;
    return (
        <>

            <div className="indindvdisplay">
                <div ><img className="indvdimage" src={imgs[idval]} /><p className="indvdlabel">{props.fullName}</p></div>
                <div className="indvdfilmlist">
                    {
                        props.films.map((film: {
                            id: string;
                            title: string;
                        }) => (
                            <div key={film.id}>

                                <Link to={"/movie?title=" + film.id}><ParMovieCard id={film.id} title={film.title} /></Link>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}
export default IndividualActor