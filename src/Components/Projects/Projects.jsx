import React from "react";
import './Projects.css'
import aboutleft from '../../assets/about-left.png'
import projets_data from '../../data/projetData'

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-title">
                <h1>Mes projets</h1>
                <img src={aboutleft} alt=""/>
            </div>
            <div className="projects-container">
                {projets_data.map((project,index)=>{
                    return <img key={index} src={project.p_img} alt="" />
                })}
            </div>
            

        </div>
    )
}

export default Projects