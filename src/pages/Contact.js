import React from 'react';
import '../styles/Contact.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faPhoneSquare, faEnvelope, faMapMarkedAlt)


const Contact = () => {


    return (

        <div className="contact-div-wrapper">

            <h3 className="contact-h3-call-us">Zadzwoń</h3>
            <a className="contact-a-call-us" href="tel:661157984"> <FontAwesomeIcon icon="phone-square"></FontAwesomeIcon>661 157 984</a>



            <h3 className="contact-h3-write-us">Napisz do nas</h3>
            <form action="https://formspree.io/kris_flo@op.pl" method="POST">
                <input placeholder="Podaj Imię" type="text" name="name" />
                <input placeholder="Podaj E-mail" type="email" name="_replyto" />
                <textarea name="message" placeholder="Twoja Wiadomość..."></textarea>
                <button type="submit">Wyślij</button>
            </form>



            <h3 className="contact-h3-find-us">Zlokalizuj nas</h3>
            <a className="contact-a-find-us" href="https://www.google.com/maps/place/Cukiernia+K-SMAK+S%C5%82opnice/@49.7124146,20.3485112,570m/data=!3m2!1e3!4b1!4m5!3m4!1s0x4716031dfdaf3ec3:0xf719337a5ce31954!8m2!3d49.7124112!4d20.3506999">
                <FontAwesomeIcon icon="map-marked-alt"></FontAwesomeIcon>Google Maps</a>

        </div>
    );
}


export default Contact;