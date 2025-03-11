import './App.css'
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

interface ParActorCardProps {
    id: string;
    title: string;
}

function ParActorCard(props: ParActorCardProps) {
    let idval = Number(props.id) % 10;
    console.log(idval)
    //let lastDigit = Number(props.id.slice(-1));
    let imgs = [actor2, actor3, actor4, actor5,
        actor6, actor7, actor8, actor9, actor10, actor11];
    
   

    

    return (
            <div className="parmoviecard">
            <div className="moviecard-inner">
                <div className="moviecard-front">
                    <img className="parmovieimage grow" src={imgs[idval]}></img>
                    
                    <p className="cardlabel"></p>
                    <p>{props.title}</p>
                </div>
                
            </div>
            </div>
    );
}
export default ParActorCard;

