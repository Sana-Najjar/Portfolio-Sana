import React from "react";
import './Contact.css'
import aboutleft from "../../assets/about-left.png"
import mail_icon from "../../assets/mail_icon.png"
import location_icon from "../../assets/location_icon.png"
import call_icon from "../../assets/call_icon.png"
import dict from "../../utils/dict"
const Contact = () => {

    const locale = window.localStorage.getItem('locale') || 'fr';
    const translations = dict[locale] || dict['fr'];

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4b916156-9a16-4905-bda2-c4174fe82907");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };






    return (
        <div id='Contact' className="contact">
            <div className="contact-title">
                <h1>Contact</h1>
                <img src={aboutleft} alt=""/>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>{translations.contactTitre}</h1>
                    <p>{translations.contactText}</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon } alt="" /> <p>najjarsana@hotmail.fr</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>0782173168</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>France,Paris</p>
                        </div>

                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">{translations. formNom}</label>
                    <input type="text" placeholder={translations.inputNom} name="name"/>
                    <label htmlFor="">{translations.formMail}</label>
                    <input type="email" placeholder={translations.inputMail} name="email"/>
                    <label htmlFor="">{translations.formText}</label>
                    <textarea name="message" rows="8" placeholder={translations.inputMsg} />
                    <button type='submit' className="contact-submit">{translations.formBtn}</button>
                </form>

            </div>

        </div>
    )
}

export default Contact