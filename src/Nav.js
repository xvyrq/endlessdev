import React from "react";
import './Nav.css';

function Nav() {
    return (
        <nav className="navbar">
        <div className="navbar-brand"><img className="endlessLogoNav" src="/endlessdevLogo.webp" alt="Endless Dev Logo"/>Endless Design</div>
        <ul className="navbar-nav">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#projects">Projects</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
}

export default Nav