import { Link } from "react-router-dom";
import './App.css'
import { useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const navigationArray = [
    { title: "Movies", link: "/movies" },
    { title: "About", link: "/actors" }
  ];

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