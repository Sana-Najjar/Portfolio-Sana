import React from "react";
import './Navbar.css'
import logosana from '../../assets/logosana.webp'
const Navbar = ({onChangeLocale}) => {
  const onClick = (locale) => {
    const currentLocale = window.localStorage.setItem('locale', locale);
    window.location.reload();
    onChangeLocale(locale);
  }

    return (
        <div className='navbar'>
          <img src={logosana} alt="" />
          <ul className="nav-menu">
            <li>Accueil</li>
            <li>Présentation</li>
            <li>Réalisations</li>
            <li>Compétences</li>
            <li>Contact</li>
          </ul>
          <div className="nav-connect">Connect With Me</div>
          <div>
            <button onClick={() => onClick('fr')}>FR</button>
            <button onClick={() => onClick('en')}>EN</button>
          </div>

        </div>
    )
}

export default Navbar