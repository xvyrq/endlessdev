import React, { useState } from "react";
import './Nav.css';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img className="endlessLogoNav" src="/endlessdevLogo.webp" alt="Endless Dev Logo"/>
                Endless Design
            </div>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className={`navbar-nav ${isOpen ? "open" : ""}`}>
                <li className="nav-item"><a href="#home">Home</a></li>
                <li className="nav-item"><a href="#about">About</a></li>
                <li className="nav-item"><a href="#projects">Projects</a></li>
                <li className="nav-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
