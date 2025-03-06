import ActorCard from './ActorCard';
import './App.css'

interface ActorCardContainerProps {
    actors: { id: string; firstName: string; lastName: string; films: { id: string; title: string }[] }[];
}


function ActorCardContainer(props: ActorCardContainerProps) {
    return (
        <span className="moviewidth"> <div >
            {
                props.actors.map((actor: {
                    id: string;
                    firstName: string;
                    lastName: string;
                    films: { id: string; title: string }[];
                }) => (
                    <div className="movierow" key={actor.id}>
                        <ActorCard id={actor.id} firstName={actor.firstName} lastName={actor.lastName} films={actor.films} />
                    </div>
                ))}
        </div></span>
    );
}

export default ActorCardContainer;