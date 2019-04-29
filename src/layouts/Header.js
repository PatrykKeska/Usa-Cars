import React from 'react'
import "../styles/Header.css"
import $ from 'jquery'



const scrollOpacity = () => {
    const $divBaner = $('.header-baner')
    const mainOffset = $('main').offset().top

    const scrollValue = $(window).scrollTop();
    const $baner = $('.header-baner');
    const $banerHeight = $baner.outerHeight();



    if (scrollValue < mainOffset) {
        $divBaner.css({
            'opacity': 1 - scrollValue / $banerHeight
        })
    }
}

window.addEventListener('scroll', scrollOpacity)


const Header = () => {



    return (

        <>
            <div className="header-baner">
                <h1 className="h1-header-baner"> k-smak cars<span className="h1-header-baner-span">Samochody z USA</span></h1>
            </div>
        </>

    );


}

export default Header;