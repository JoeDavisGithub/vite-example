import { Link } from "react-router-dom";
import './App.css'
const Header = () => {
  

  return (
    
        
        <div className="topnav">

          <Link to={"/actors/page"}>
            <p className="actorNav">Actors</p>
          </Link>
          <Link to={"/movies/page"}>
            <p className="movieNav">Movies</p>
          </Link>
          <Link to={"/actorcreate"}>
            <p className="actorcreateNav">Create Actor</p>
          </Link>
          
        </div>
  );
};

export default Header;