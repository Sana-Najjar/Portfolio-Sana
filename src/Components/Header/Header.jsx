import React from "react";
import { Link as AnchorLink } from "react-scroll";
import './Header.css'
import profile from '../../assets/profile.png'
import dict from "../../utils/dict"

const Header = () => {
    const locale = window.localStorage.getItem('locale') || 'fr';
    const translations = dict[locale] || dict['fr'];

    return (
      <div id='Accueil' className="header">
          <img src={profile} alt="" />
          <h1><span>{translations.hello}</span> {translations.webMaster}.</h1>
          <p>"{translations.citation}"</p>
          <p>Leonard de Vinci</p>
          <div className="header-action">
            <div className="header-connect"><AnchorLink className='anchor-link'  to='Contact' >{translations.btnConnect}</AnchorLink></div>
            <div className="header-resume">{translations.btnResume}</div>
          </div>
      </div>
    )
}
export default Header