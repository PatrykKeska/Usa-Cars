import React, { Component } from 'react';
import "../styles/HomePage.css"
import Footer from '../layouts/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTools, faShippingFast, faHandshake, } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
library.add(faSearch, faTools, faShippingFast, faHandshake)




class HomePage extends Component {
    state = {
        active: false,
    }

    scrollEffect = () => {

        if (this.state.active) {
            const $page = $('.main-section-page');
            const $divSearching = $('.searching')
            const $divShipping = $('.shipping')
            const $divRepair = $('.repair')
            const $divExperience = $('.experience')
            const $Footer = $('.footer-div-wrapper');
            const scrollValue = $(window).scrollTop();
            const $PageFromTop = $page.offset().top;
            const $divSearchingFromTop = $divSearching.offset().top;
            const $divShippingFromTop = $divShipping.offset().top;
            const $divRepairFromTop = $divRepair.offset().top;
            const $divExperienceFromTop = $divExperience.offset().top;

            const $divSearchingHeight = $divSearching.outerHeight();
            const $divRepairHeight = $divRepair.outerHeight();
            const $divShippingHeight = $divShipping.outerHeight();
            const $divExperienceHeight = $divExperience.outerHeight();
            if (window.innerWidth <= 900) {

                if (scrollValue > $PageFromTop / 1.5) {
                    $divSearching.addClass('scrollActive')

                    if (scrollValue > $PageFromTop) {
                        $divShipping.addClass('scrollActive')
                    }
                    // else {
                    //     $divShipping.removeClass('scrollActive')

                }
                if (scrollValue > $divSearchingFromTop - $divSearchingHeight) {
                    $divShipping.addClass('scrollActive')
                }
                // else {
                //     $divShipping.removeClass('scrollActive')
                // }

                if (scrollValue > $divShippingFromTop - $divShippingHeight) {
                    $divRepair.addClass('scrollActive')
                }
                // else {
                //     $divRepair.removeClass('scrollActive')
                // }
                if (scrollValue > $divRepairFromTop - $divRepairHeight) {
                    $divExperience.addClass('scrollActive')
                }
                // else {
                //     $divExperience.removeClass('scrollActive')
                // }
                // } else if (scrollValue > 100) {
                //     $divSearching.removeClass('scrollActive')
                // }
                if (scrollValue > $divExperienceFromTop - $divExperienceHeight) {
                    $Footer.addClass('footer-div-wrapper-on')
                }
                //  else {
                //     $Footer.removeClass('footer-div-wrapper-on');


                // }

            } else if (window.innerWidth >= 900) {
                if (scrollValue > $PageFromTop / 1.5) {
                    $divSearching.removeClass('scrollActive');
                    $divSearching.addClass('desktop-scroll-active');
                    $divShipping.removeClass('scrollActive');
                    $divShipping.addClass('desktop-scroll-active');
                }
                //  else {
                //     $divSearching.removeClass('desktop-scroll-active');
                //     $divShipping.removeClass('desktop-scroll-active');
                // }



                if (scrollValue > $divShippingFromTop - $divShippingHeight * 1) {
                    $divRepair.removeClass('scrollActive')
                    $divExperience.removeClass('scrollActive')
                    $divRepair.addClass('desktop-scroll-active');
                    $divExperience.addClass('desktop-scroll-active');

                }
                // else {
                //     $divRepair.removeClass('desktop-scroll-active');
                //     $divExperience.removeClass('desktop-scroll-active')
                // }

            }




        }
    }


    componentDidMount() {
        this.setState({
            active: true,
        })

        document.addEventListener('scroll', this.scrollEffect)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scrollEffect)
        this.setState({
            active: false,
        })
    }
    render() {


        return (

            < div className="home-page-wrapper" >

                <div className="searching">
                    <h3> <span className='home-page-h3-span'> <FontAwesomeIcon icon="search"></FontAwesomeIcon></span>Wyszukujemy</h3>
                    <p>doradzamy w wyborze, analizujemy aukcje pod kątem stanu technicznego pojazdu oraz opłacalności ewentualnych napraw.</p>
                </div>

                <div className="shipping">
                    <h3> <span className='home-page-h3-span'><FontAwesomeIcon icon="shipping-fast"></FontAwesomeIcon></span>Sprowadzamy</h3>
                    Załatwiamy formalności w USA oraz organizujemy wysyłkę do Polski.Zajmujemy się Wszystkimi formalnościami związanymi z Cłem,Akcyzą i Vatem
            </div>

                <div className="repair">
                    <h3><span className='home-page-h3-span'><FontAwesomeIcon icon="tools"></FontAwesomeIcon></span>Pomagamy w Naprawie</h3>
                    Dobieramy oraz sprowadzamy odpowiednie części, zajmujemy się kompleksową naprawą.
            </div>

                <div className="experience">
                    <h3><span className='home-page-h3-span'><FontAwesomeIcon icon="handshake"></FontAwesomeIcon></span>Doświadczenie</h3>
                    Mamy za sobą  wieloletnie doświadczenie, dziesiątki sprowadzonych samochodów
                    oraz  grono zadowolonych klientów. Z nami Masz pewność udanego i bezpiecznego zakupu.
            </div>
                <Footer />
            </div >

        );

    }
}


export default HomePage;
