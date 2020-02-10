import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

function Navigator() {
    return(
        <nav>
            <h3>Logo/Title</h3>
            <ul className="nav-links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navigator
 