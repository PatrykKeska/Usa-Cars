import React from 'react'
import '../styles/Footer.css'
import UsaFlag from '../images/icons/united-states.png'
import PolandFlag from '../images/icons/poland.png'
import TransferIcon from '../images/icons/share.png'



const Footer = () => {
    return (
        <div className="footer-div-wrapper">
            <h4 className='footer-h4'>
                Zapraszamy do skorzytania z naszych usług!
        </h4>

            <span className="footer-span-usa"><img src={UsaFlag} alt="Flag of USA" /></span>

            <span className="footer-span-transfer">
                <img src={TransferIcon} alt="Transfer icon" />

            </span>
            <span className="footer-span-poland">
                <img src={PolandFlag} alt="Flag of Poland" />
            </span>
            <p className="footer-p-description">
                Samochody z naszych ofert można obejrzeć w województwie małopolskim,   w powiecie limanowskim.
            </p>
            <a href="https://www.google.com/maps/place/Cukiernia+K-SMAK+S%C5%82opnice/@49.7124146,20.3485112,570m/data=!3m2!1e3!4b1!4m5!3m4!1s0x4716031dfdaf3ec3:0xf719337a5ce31954!8m2!3d49.7124112!4d20.3506999">
                Uzyj  Google Maps</a>
        </div>
    );
}

export default Footer;