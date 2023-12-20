import React from 'react';
import './Header.css';
import Spline from '@splinetool/react-spline';
function Header () {
    return (
        <header className="header">
        <div className="branding">
        <Spline scene="https://prod.spline.design/7aRfIG0KgFAc1-mS/scene.splinecode" />
        </div>
        <h1>I'm a Front-End Developer and UI/UX Enthusiast</h1>
        <p>Focused on creating intuitive and dynamic user experiences</p>
      </header>
    );
}
export default Header;