import React from "react";
import './Modal.css';
import dict from "../../utils/dict";

const Modal = ({ project, onClose }) => {
    if (!project) return null;
    const locale = window.localStorage.getItem('locale') || 'fr';
    const translations = dict[locale] || dict['fr'];


    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>×</button>
                <h2>{project.p_name}</h2>
                <img src={project.p_img} alt={project.p_name} />
                <div className="modal-content">
                    <div className="modal-links">
                        <a href={project.github_link} target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={project.live_link} target="_blank" rel="noopener noreferrer">Live Site</a>
                    </div>
                    <div className="modal-technologies">
                        <h3>{translations.technologiesUsed}</h3>
                        <ul>
                            {project.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;