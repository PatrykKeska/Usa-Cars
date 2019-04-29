import React from 'react'

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import '../styles/Lightbox.css';
import '../styles/FlexCarsGallery.css';


import Jeep1 from '../images/Gallery/Jeep/Jeep1.JPG'
import Jeep2 from '../images/Gallery/Jeep/Jeep2.JPG'
import Jeep3 from '../images/Gallery/Jeep/Jeep3.jpg'
import Jeep4 from '../images/Gallery/Jeep/Jeep4.jpg'
import Jeep5 from '../images/Gallery/Jeep/Jeep5.jpg'
import Jeep6 from '../images/Gallery/Jeep/Jeep6.jpg'
import Jeep7 from '../images/Gallery/Jeep/Jeep7.jpg'
import Jeep8 from '../images/Gallery/Jeep/Jeep8.jpg'
import Jeep9 from '../images/Gallery/Jeep/Jeep9.jpg'
import Jeep10 from '../images/Gallery/Jeep/Jeep10.jpg'
import Jeep11 from '../images/Gallery/Jeep/Jeep11.jpg'
import Jeep12 from '../images/Gallery/Jeep/Jeep12.jpg'



import JeepSmall1 from '../images/Gallery/Jeep/Small/JeepSmall1.JPG';
import JeepSmall2 from '../images/Gallery/Jeep/Small/JeepSmall2.JPG';
import JeepSmall3 from '../images/Gallery/Jeep/Small/JeepSmall3.jpg';
import JeepSmall4 from '../images/Gallery/Jeep/Small/JeepSmall4.jpg';
import JeepSmall5 from '../images/Gallery/Jeep/Small/JeepSmall5.jpg';
import JeepSmall6 from '../images/Gallery/Jeep/Small/JeepSmall6.jpg';
import JeepSmall7 from '../images/Gallery/Jeep/Small/JeepSmall7.jpg';
import JeepSmall8 from '../images/Gallery/Jeep/Small/JeepSmall8.jpg';
import JeepSmall9 from '../images/Gallery/Jeep/Small/JeepSmall9.jpg';
import JeepSmall10 from '../images/Gallery/Jeep/Small/JeepSmall10.jpg';
import JeepSmall11 from '../images/Gallery/Jeep/Small/JeepSmall11.jpg';
import JeepSmall12 from '../images/Gallery/Jeep/Small/JeepSmall12.jpg';




class JeepGallery extends React.Component {
    state = {
        photoIndex: 0,
        isOpen: false,
        images: [
            Jeep1, Jeep2, Jeep3, Jeep4, Jeep5, Jeep6, Jeep7, Jeep8, Jeep9, Jeep10, Jeep11, Jeep12,
        ],
        smallImages: [
            JeepSmall1, JeepSmall2, JeepSmall3, JeepSmall4, JeepSmall5, JeepSmall6, JeepSmall7, JeepSmall8, JeepSmall9, JeepSmall10, JeepSmall11, JeepSmall12,
        ]
    }

    renderImages = () => {
        let photoIndex = -1;
        const { smallImages } = this.state;

        return smallImages.map(imageSrc => {
            photoIndex++;
            const privateKey = photoIndex;
            return (
                <MDBCol md="4" key={photoIndex}>
                    <figure>
                        <img src={smallImages[photoIndex]} alt="Gallery" className="img-fluid" onClick={() =>
                            this.setState({ photoIndex: privateKey, isOpen: true })
                        }
                        />
                    </figure>
                </MDBCol>
            );
        })
    }

    render() {
        const { photoIndex, isOpen, images } = this.state;
        return (
            <MDBContainer className="mt-5">
                <div className="mdb-lightbox">
                    <MDBRow>
                        {this.renderImages()}
                    </MDBRow>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        imageTitle={photoIndex + 1 + "/" + images.length}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                        }
                    />
                )}
            </MDBContainer>
        );
    }
}

export default JeepGallery;
