import React from "react";
import './Header.css'
import profile from '../../assets/profile.png'
import dict from "../../utils/dict"

const Header = () => {
  console.log(dict)
    return (
        <div className="header">
          <img src={profile} alt="" />
          <h1><span>{dict.hello}</span> {dict.webMaster}.</h1>
          <blockquote>L'apprentissage est la seule chose que l'esprit n'épuise jamais,ne craint jamais et ne regrette jamais</blockquote>
          <blockquotep>Leonard de Vinci</blockquotep>
          <div className="header-action">
            <div className="header-connect">Connect with me</div>
            <div className="header-resume">My resume</div>
          </div>
        </div>
    )
}
export default Header