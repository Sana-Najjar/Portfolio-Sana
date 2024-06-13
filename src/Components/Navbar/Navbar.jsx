import React from "react";
import './Navbar.css'
import logosana from '../../assets/logosana.webp'
import dict from "../../utils/dict";

const Navbar = ({onChangeLocale}) => {
  const onClick = (locale) => {
    window.localStorage.setItem('locale', locale);
    window.location.reload();
    onChangeLocale(locale);
  }
  const locale = window.localStorage.getItem('locale') || 'fr';
  const translations = dict[locale] || dict['fr'];
  const {
    navAccueil = 'Accueil',
    navPresentation = 'Présentation',
    navRealisations = 'Réalisations',
    navContact = 'Contact',
    navConnect = 'Connect With Me'
  } = translations;

    return (
        <div className='navbar'>
          <img src={logosana} alt="" />
          <ul className="nav-menu">
            <li>{navAccueil}</li>
            <li>{navPresentation}</li>
            <li>{navRealisations}</li>
            <li>{navContact}</li>
          </ul>
          <div className="nav-connect">{navConnect}</div>
          <div className="language-buttons">
            <button onClick={() => onClick('fr')}>FR</button>
            <button onClick={() => onClick('en')}>EN</button>
          </div>

        </div>
    )
}

export default Navbar