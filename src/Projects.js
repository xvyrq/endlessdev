import React from "react";
import './Projects.css';

const projects = [
    // Your projects here
    // Example: { title: 'Project 1', imageUrl: 'url_to_image', description: 'Description of Project 1' },
    { title: 'Project 1', imageUrl: 'url_to_image', description: 'Description of Project 1' },
    { title: 'Project 2', imageUrl: 'url_to_image', description: 'Description of Project 1' },
    { title: 'Project 3', imageUrl: 'url_to_image', description: 'Description of Project 1' },
    { title: 'Project 4', imageUrl: 'url_to_image', description: 'Description of Project 1' }
];

const Projects = () => {
    return (
        <div>
        <h1 className="projectsTitle">Projects and Previous Work</h1>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <img src={project.imageUrl} alt={project.title} className="project-image" />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
        </div>
    );
};
export default Projects;