import React from "react";
import './About.css'
import about from '../../assets/about.png'
import aboutleft from '../../assets/about-left.png'

const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h1>Présentation</h1>
                <img src={aboutleft} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={about} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Je m'appelle Sana Najjar, je suis passionné par le domaine de l'informatique et du web. J'ai un diplôme en informatique, et récemment j'ai suivi une formation d'intégrateur web chez OpenClassrooms, où j'ai approfondi mes compétences en développement web. Grâce à cette formation, j'ai pu réaliser plusieurs projets concrets, ce qui m'a permis de renforcer mes compétences et de me familiariser avec les meilleures pratiques du secteur.</p>
                        <p>Je suis particulièrement intéressé par le développement front-end et j'aime transformer des conceptions graphiques en sites web fonctionnels et attrayants. Mon objectif est d'intégrer le monde professionnel et de continuer à apprendre et à évoluer.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p>JavaScript</p> <hr style={{width:"50%"}} /></div>
                        <div className="about-skill"> <p>React JS</p> <hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>Redux</p> <hr style={{width:"30%"}} /></div>
                        <div className="about-skill"><p>Sass</p> <hr style={{width:"40%"}} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
