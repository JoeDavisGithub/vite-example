import './App.css'
interface ParMovieCardProps {
    id: string;
    title: string;
}
// shadow-sm p-3 mb-5 bg-white rounded 

function ParMovieCard(props: ParMovieCardProps) {
    let idval = Number(props.id) % 10;
    console.log(idval)
    //let lastDigit = Number(props.id.slice(-1));
    let imgs = ["src/assets/film2.png", "src/assets/film3.png", "src/assets/film4.png", "src/assets/film5.png",
        "src/assets/film6.png", "src/assets/film7.png", "src/assets/film8.png", "src/assets/film9.png", "src/assets/film10.png", "src/assets/film11.png"];
    
   

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


// function ParMovieCard(props: ParMovieCardProps) {
//     let val = Math.floor(Math.random() * 10);
//     let idval = Number(props.id) % 10;
//     const [clicked, setClicked] = useState(false);
//     console.log(idval)
//     //let lastDigit = Number(props.id.slice(-1));
//     let imgs = ["src/assets/film2.png", "src/assets/film3.png", "src/assets/film4.png", "src/assets/film5.png",
//         "src/assets/film6.png", "src/assets/film7.png", "src/assets/film8.png", "src/assets/film9.png", "src/assets/film10.png", "src/assets/film11.png"];
    
//     function invertState(){
//         setClicked(!clicked); 
//         console.log(clicked);
//     }

//     let cssSelector = "moviecard" 
//     if(clicked===true){cssSelector+=" moviecardClicked"}

//     return (

//             <div className="moviecard-inner">
//                 <div className="moviecard-front">
//                     <img className="movieimage grow" src={imgs[idval]}></img>
                    
//                     <p className="cardlabel"><strong>Title:</strong></p>
//                     <p>{props.title}</p>
//                 </div>
                
//             </div>
     
//     );
// }
// export default ParMovieCard;
