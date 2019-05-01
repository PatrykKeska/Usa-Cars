import React from 'react'
import '../styles/Offers.css'

const Offers = () => {

    const img1Src = "https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6Im8zeHFnN21ldXg1NjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.sMncbi8AYw-bu_24ltKJKWpfY1cXlH3UTXOTk3UUKj4/image;s=1080x720;cars_;/922450246_;slot=9;filename=eyJmbiI6Im8zeHFnN21ldXg1NjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.sMncbi8AYw-bu+24ltKJKWpfY1cXlH3UTXOTk3UUKj4_rev001.jpg";

    const img2Src = 'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6Imt5OXhtcXM0eXR3bzItT1RPTU9UT1BMIn0.L40POCABs3At5H_jWSLjxo6n6A0v_Q0MtLckfmhUi-c/image;s=1080x720;cars_;/904747297_;slot=8;filename=eyJmbiI6Imt5OXhtcXM0eXR3bzItT1RPTU9UT1BMIn0.L40POCABs3At5H+jWSLjxo6n6A0v+Q0MtLckfmhUi-c_rev001.jpg';

    const img3Src = 'https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6IjY4NjEyb2U2d3N3ay1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.L69JQCKAA3G3WAjC6i1ToUbB4wL0lbZJvE_qxcU2Um0/image;s=1080x720;cars_;/895001517_;slot=4;filename=eyJmbiI6IjY4NjEyb2U2d3N3ay1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.L69JQCKAA3G3WAjC6i1ToUbB4wL0lbZJvE+qxcU2Um0_rev001.jpg';

    const img4Src = "https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6Ind5ejFzZmk1Y2djOTItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.c468HD5UQTSagwrpB20KsTx_Rr3DJ91WPUGUIi5xaOw/image;s=1080x720;cars_;/923124691_;slot=4;filename=eyJmbiI6Ind5ejFzZmk1Y2djOTItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.c468HD5UQTSagwrpB20KsTx+Rr3DJ91WPUGUIi5xaOw_rev001.jpg"

    const hanldeClick = (e) => {
        const div1 = document.querySelector('.offers-div-1');
        const div2 = document.querySelector('.offers-div-2');
        const div3 = document.querySelector('.offers-div-3');
        const div4 = document.querySelector('.offers-div-4');


        if (e.target.className === 'offers-btn1') {
            div1.classList.toggle('offers-div-off');
            setTimeout(() => {
                div1.classList.toggle('offers-div-on')
            }, 100)

        }
        if (e.target.className === 'offers-btn2') {
            div2.classList.toggle('offers-div-off');
            setTimeout(() => {
                div2.classList.toggle('offers-div-on')
            }, 100)

        }
        if (e.target.className === 'offers-btn3') {
            div3.classList.toggle('offers-div-off');
            setTimeout(() => {
                div3.classList.toggle('offers-div-on')
            }, 100)
        }
        if (e.target.className === 'offers-btn4') {
            div4.classList.toggle('offers-div-off');
            setTimeout(() => {
                div4.classList.toggle('offers-div-on')
            }, 100)
        }

    }



    return (
        <section className="offers-section">
            <h3 className="offers-h3">Zapraszamy do zapoznia się z aktualnymi ofertami</h3>

            <button onClick={hanldeClick} className="offers-btn1">bmw x3</button>
            <div className="offers-div-1 offers-div-off ">
                <img src={img1Src} alt="car" />
                <p className="description">BMW X3 F25 Z ROKU 2017 Przebieg to 16 tyś kilometrów, silnik 2.0 benzyna 245 km, automat 4x4 xdrive...</p>
                <a href="https://www.otomoto.pl/oferta/bmw-x3-2-0-benzyna-250-km-4x4-xdrive-ID6BOP67.html">Sprawdź aukcję</a>
            </div>

            <button onClick={hanldeClick} className="offers-btn2">Volkswagen Jetta</button>
            <div className="offers-div-2 offers-div-off ">
                <img src={img2Src} alt="car" />
                <p className="description">VW JETTA 2.0 BENZYNA-211 KM Pełna wersja wyposażenia, skrzynia biegów DSG, koła 18-cali. Przebieg to zaledwie 18 tys kilometrów... </p>
                <a href="https://www.otomoto.pl/oferta/volkswagen-jetta-wersja-sport-gli-2-0-benzyna-pelne-wyposarzenie-ID6AOcbt.html">Sprawdź aukcję</a>
            </div>

            <button onClick={hanldeClick} className="offers-btn3">Ford Escape-Granatowy</button>
            <div className="offers-div-3 offers-div-off ">
                <img src={img3Src} alt="car" />
                <p className="description"> FORD Escape europejska kuga. Silnik 1,6 BENZYNA ECOBOOST 181 KM-bardzo oszczędny i dynamiczny,  napęd 4X4. Najlepsza wersja TITANIUM...</p>
                <a href="https://www.otomoto.pl/oferta/ford-kuga-escape-1-6-ecoboost-wersja-titanium-4x4-ID6AiRVW.html">Sprawdź aukcję</a>
            </div>


            <button onClick={hanldeClick} className="offers-btn4">Ford Escape-Bordowy</button>
            <div className="offers-div-4 offers-div-off ">
                <img src={img4Src} alt="car" />
                <p className="description">Ford Escape 2017 rok. Najnowszy model - 2.0 Benzyna ECOBOOST 250 KM ,skrzynia biegów AUTOMAT, Samochód w najlepszej wersji Titanium</p>
                <a href="https://www.otomoto.pl/oferta/ford-kuga-escape-2-0-benzyna-wersja-titanium-ID6BRlDH.html">Sprawdź aukcję</a>
            </div>
        </section>
    );
}

export default Offers;