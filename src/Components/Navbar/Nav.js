import React, {useRef} from "react";
import "./Nav.css";
import { FcNews } from "react-icons/fc";
import { Link } from "react-router-dom";
function Nav() {
 
  const navref=useRef();
  // Function for navbar animation using scroll event listner on windows......................
  function animateNav(){
    if(window.pageYOffset>45){
        navref.current.style.top=0;
        navref.current.style.width="100%"
    }
    else{
        navref.current.style.top="10px";
        navref.current.style.width="98%"
    }
}
document.addEventListener('scroll',animateNav)


  return (
    // Using symantic tag nav for navbar introduced in html 5 based on bootsrap library
    <nav ref={navref} className="navbar navbar-dark bg-secondary">
      <div className="container-fluid">
        <h3 className="navbar-brand">
          <FcNews />
          InShorts
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Categories
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to={{pathname:"/"}} className="nav-link" aria-current="page">
                  All
                </Link>
              </li>
              <li className="nav-item">
                <Link to={{pathname:"/Category/national"}} className="nav-link">National</Link>
              </li>
              <li className="nav-item">
                <Link to={{pathname:"/Category/business"}} className="nav-link" aria-current="page">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link to={{pathname:"/Category/sports"}} className="nav-link">Sports</Link>
              </li>
              <li className="nav-item">
                <Link to={{pathname:"/Category/world"}} className="nav-link" aria-current="page">
                  World
                </Link>
              </li>
              <li className="nav-item">
                <Link to={{pathname:"/Category/technology"}} className="nav-link" aria-current="page">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link to={{pathname:"/Category/entertainment"}} className="nav-link" aria-current="page">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link to={{pathname:"/Category/science"}} className="nav-link" aria-current="page">
                  Science
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
