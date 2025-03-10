import { Link } from "react-router-dom";
import './App.css'
const Header = () => {
  

  return (
    
        
        <div className="topnav">

          <Link to={"/actors"}>
            <a >Actors</a>
          </Link>
          <Link to={"/movies"}>
            <a >Movies</a>
          </Link>
          
        </div>
  );
};

export default Header;