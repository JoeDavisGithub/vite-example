import './App.css'
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

interface ParMovieCardProps {
    id: string;
    title: string;
}


function ParMovieCard(props: ParMovieCardProps) {
    let idval = Number(props.id) % 10;
    console.log(idval)
    //let lastDigit = Number(props.id.slice(-1));
    let imgs = [film2, film3, film4, film5,
        film6, film7, film8, film9, film10, film11];
    
   

    return (
            <div className="parmoviecard">
            <div className="parmoviecard-inner">
                <div className="parmoviecard-front">
                    <img className="parmovieimage grow" src={imgs[idval]}></img>
                    
                    <p className="cardlabel"></p>
                    <p>{props.title}</p>
                </div>
                
            </div>
            </div>
    );
}
export default ParMovieCard;

