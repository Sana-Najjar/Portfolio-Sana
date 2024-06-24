import React from "react";
import './About.css'
import developpeur from '../../assets/developpeur-web.webp'
import aboutleft from '../../assets/about-left.png'
import dict from "../../utils/dict";

const About = () => {

    const locale = window.localStorage.getItem('locale') || 'fr';
    const translations = dict[locale] || dict['fr'];

    return (
        <div id='Présentation' className="about">
            <div className="about-title">
                <h1>{translations.aboutTitle}</h1>
                <img src={aboutleft} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={developpeur} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>{translations.aboutParagraph1}</p>
                        <p>{translations.aboutParagraph2}</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p> <hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"> <p>React JS</p> <hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Sass</p> <hr style={{ width: "40%" }} /></div>
                        <div className="about-skill"><p>Redux</p> <hr style={{ width: "30%" }} /></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
