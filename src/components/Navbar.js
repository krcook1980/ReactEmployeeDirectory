import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
   return(
    <nav className="navbar nav-expand-lg navbar-dark bg-dark">
    <Link className="nabvar-brand" to="/">Home</Link>
    <div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                    Search
                </Link>
            </li>
        </ul>
     </div>  
</nav>
   )
}

export default NavBar;