import React from "react";
import './Footer.css'
import logosana from '../../assets/logosana.webp'
import usericon from '../../assets/usericon.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logosana} alt=""/>
                    <p>Réalisé par Sana NAJJAR </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={usericon} alt="" />
                        <input type="email" placeholder="Entrez votre email"/>
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr/>
            

        </div>
    )
}

export default Footer