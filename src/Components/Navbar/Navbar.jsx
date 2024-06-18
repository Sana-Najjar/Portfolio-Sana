import React, { useState,useRef } from "react";
import {Link as AnchorLink }  from "react-scroll";
import './Navbar.css'
import logosana from '../../assets/logosana.webp'
import dict from "../../utils/dict"
import aboutleft2 from '../../assets/about-left2.png';
import menu_open from "../../assets/menu_open.png";
import menu_close from "../../assets/menu_close.png"

const Navbar = ({onChangeLocale}) => {
  
  const locale = window.localStorage.getItem('locale') || 'fr';
  const translations = dict[locale] || dict['fr'];
  const [menu,setMenu]= useState(translations.navAccueil);
 const menuRef = useRef();
 const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
}

  const onClick = (locale) => {
    window.localStorage.setItem('locale', locale);
    window.location.reload();
    onChangeLocale(locale);
  }
 

    return (
        <div className='navbar'>
          <img src={logosana} alt="" />
          <img src={menu_open} onClick={toggleMenu} alt="" className="nav-mob-open"/>
          <ul ref={menuRef} className={`nav-menu ${isOpen ? 'show' : ''}`}>
             <img src={menu_close} onClick={toggleMenu} alt="" className="nav-mob-close"/>
             <li>
               <AnchorLink className='anchor-link' to='Accueil' >
               <p onClick={() => setMenu(translations.navAccueil)}>{translations.navAccueil}</p>
               </AnchorLink>
                 {menu === translations.navAccueil ? <img src={aboutleft2} alt="Icon" /> : null}
            </li>
            <li>
               <AnchorLink className='anchor-link'  to='Présentation' >
               <p onClick={() => setMenu(translations.navPresentation)}>{translations.navPresentation}</p>
               </AnchorLink>
                {menu === translations.navPresentation ? <img src={aboutleft2} alt="Icon" /> : null}
            </li>
            <li>
               <AnchorLink className='anchor-link'  to='Réalisations'>
               <p onClick={() => setMenu(translations.navRealisations)}>{translations.navRealisations}</p>
              </AnchorLink>
               {menu === translations.navRealisations ? <img src={aboutleft2} alt="Icon" /> : null}
            </li>
            <li>
               <AnchorLink className='anchor-link'  to='Contact' >
               <p onClick={() => setMenu(translations.navContact)}>{translations.navContact}</p>
               </AnchorLink>
                {menu === translations.navContact ? <img src={aboutleft2} alt="Icon" /> : null}
            </li>
          </ul>
          <div className="nav-connect"><AnchorLink className='anchor-link'  to='Contact' >
               {translations.navConnect}</AnchorLink></div>
          <div className="language-buttons">
            <button onClick={() => onClick('fr')}>FR</button>
            <button onClick={() => onClick('en')}>EN</button>
          </div>

        </div>
    )
}

export default Navbar