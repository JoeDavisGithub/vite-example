import { Link } from "react-router-dom";
import ParMovieCard from './ParMovieCard'
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

interface IndividudalActorProps {
    fullName: string;
    id: string;
    films: { id: string; title: string }[];
   
}


const IndividualActor = (props: IndividudalActorProps) => {
    let imgs = [actor2, actor3, actor4, actor5,
        actor6, actor7, actor8, actor9, actor10, actor11];
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
                            <div data-testid={'indactlist-item-'+film.id} key={film.id}>

                                <Link to={"/movie?title=" + film.id}><ParMovieCard id={film.id} title={film.title} /></Link>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}
export default IndividualActor