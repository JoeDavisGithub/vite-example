import MovieCard from './MovieCard';
import './App.css'

interface MovieCardContainerProps {
    movies: { id: string; title: string; description: string; actors: { id: string; fullName: string }[] }[];
}


function MovieCardContainer(props: MovieCardContainerProps) {
    return (
        <span className="moviewidth"> 
            {
                props.movies.map((movie: {
                    id: string;
                    title: string;
                    description: string;
                    actors: { id: string; fullName: string }[];
                }) => (
                    <div className="movierow" key={movie.id}>
                        <MovieCard id={movie.id} title={movie.title} description={movie.description} actors={movie.actors} />
                    </div>
                ))}
        </span>
    );
}

export default MovieCardContainer;