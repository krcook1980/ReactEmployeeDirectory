import React from "react";

function NavBar() {
    <div className="navbar">
        <ul className="nav nav-tabs">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Search By:</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Name</a>
                    <a class="dropdown-item" href="#">Date Registered</a>
                    <a class="dropdown-item" href="#">Email</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Date of Birth</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Filter By:</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Location</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </li>
        </ul>
    </div>
}