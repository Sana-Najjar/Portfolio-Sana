import React, { useState } from 'react';
import './Projects.css';
import aboutleft from '../../assets/about-left.png';
import projets_data from '../../data/projetData';
import Modal from '../Modal/Modal';
import dict from '../../utils/dict';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const locale = window.localStorage.getItem('locale') || 'fr';
    const translations = dict[locale] || dict['fr'];

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div id='Réalisations' className="projects">
            <div className="projects-title">
                <h1>{translations.navRealisations}</h1>
                <img src={aboutleft} alt="" />
            </div>
            <div className="projects-container">
                {projets_data.map((project, index) => (
                    <div key={index} className="project-item" onClick={() => openModal(project)}>
                        <img src={project.p_img} alt={project.p_name} />
                        <div className="project-info">
                            <h2>{project.p_name}</h2>
                            <p>{translations.aboutProjet}</p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProject && <Modal project={selectedProject} onClose={closeModal} />}
        </div>
    );
}

export default Projects;
