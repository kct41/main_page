import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import React from "react";

function Nav() {

    function night() {
        const app = document.querySelector('.App');
        app.classList.toggle('night');
    }

    return (
        <nav className="Nav">
            <ul>
                <li><NavLink to="/" style={({ isActive }) => ({color : isActive ? '#6BB8BC' : ''})}>HOME</NavLink></li>
                <li><NavLink to="/about" style={({ isActive }) => ({color : isActive ? '#6BB8BC' : ''})}>ABOUT ME</NavLink></li>
                <li><NavLink to="/portfolio" style={({ isActive }) => ({color : isActive ? '#6BB8BC' : ''})}>PORTFOLIO</NavLink></li>
                <li className="dayNight" onClick={night}>
                    <FontAwesomeIcon className="icon" icon={faMoon}/>
                    <FontAwesomeIcon className="icon" icon={faSun}/>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;