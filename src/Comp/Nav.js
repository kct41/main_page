import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import React from "react";

function Nav() {

    function night() {
        const app = document.querySelector('.App');
        app.classList.toggle('night');
    }

    return (
        <nav className="Nav">
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT ME</Link></li>
                <li><Link to="/portfolio">PORTFOLIO</Link></li>
                <li className="dayNight" onClick={night}>
                    <FontAwesomeIcon className="icon" icon={faMoon}/>
                    <FontAwesomeIcon className="icon" icon={faSun}/>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;