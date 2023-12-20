import React from "react";
import './About.css';


const About = () => {
    return (
        <div className="about">
            <h2>About Me</h2>
            <p>Hello, my name is Luke Manary and I am a passionate Front-End Developer specializing in creating beautiful and user-friendly interfaces. I graduated with a degree in Information Technology, and an emphasis in Software Engineering. I gravitated towards web development over back-end work as I love thinking about user experience and how the user goes about interacting with my sites. </p>
            <p>I'm driven by the desire to create engaging user experiences and am always exploring new technologies and techniques in the field of web development.</p>

            <div className="social-links">
                <a href="https://linkedin.com/in/endlessloop" target="_blank" rel="noopener noreferrer">
                    <img src="/linkedin.png" alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
                </a>
                <a href="https://github.com/xvyrq" target="_blank" rel="noopener noreferrer">
                    <img src="/github-logo.png" alt="GitHub" style={{ width: '24px', height: '24px' }} />
                </a>
                {/* Add other social media or portfolio links if necessary */}
            </div>

            <p>Feel free to reach out to me on LinkedIn or via email at work@lukedev.biz for collaborations or opportunities.</p>
        </div>
    );
};

export default About;