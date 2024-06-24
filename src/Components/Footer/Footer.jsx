import React from "react";
import './Footer.css'
import logosana from '../../assets/logosana.webp'
import dict from "../../utils/dict"

const Footer = () => {

    const locale = window.localStorage.getItem('locale') || 'fr';
    const translations = dict[locale] || dict['fr'];

    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logosana} alt="" />
                    <p>{translations.footerMsg} </p>
                </div>
            </div>
            <hr />


        </div>
    )
}

export default Footer