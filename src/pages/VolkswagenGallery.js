import React from 'react'

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import '../styles/Lightbox.css';
import '../styles/FlexCarsGallery.css';

import CC1 from '../images/Gallery/Volkswagen/CC1.JPG';
import CC2 from '../images/Gallery/Volkswagen/CC2.JPG';
import CC3 from '../images/Gallery/Volkswagen/CC3.JPG';
import CC4 from '../images/Gallery/Volkswagen/CC4.JPG';
import JettaBlack1 from '../images/Gallery/Volkswagen/JettaBlack1.JPG';
import JettaBlack2 from '../images/Gallery/Volkswagen/JettaBlack2.JPG';
import JettaBlack3 from '../images/Gallery/Volkswagen/JettaBlack3.JPG';
import JettaBlack4 from '../images/Gallery/Volkswagen/JettaBlack4.JPG';
import JettaBlack5 from '../images/Gallery/Volkswagen/JettaBlack5.JPG';
import JettaBlack6 from '../images/Gallery/Volkswagen/JettaBlack6.JPG';
import JettaBlack7 from '../images/Gallery/Volkswagen/JettaBlack7.JPG';
import Passat1 from '../images/Gallery/Volkswagen/Passat1.jpg';
import Passat2 from '../images/Gallery/Volkswagen/Passat2.jpg';
import Passat3 from '../images/Gallery/Volkswagen/Passat3.jpg';
import Passat4 from '../images/Gallery/Volkswagen/Passat4.jpg';
import Passat5 from '../images/Gallery/Volkswagen/Passat5.jpg';
import Passat6 from '../images/Gallery/Volkswagen/Passat6.jpg';
import Passat7 from '../images/Gallery/Volkswagen/Passat7.jpg';
import PassatTdiGray1 from '../images/Gallery/Volkswagen/PassatTdiGray1.jpg';
import PassatTdiGray2 from '../images/Gallery/Volkswagen/PassatTdiGray2.jpg';
import PassatTdiGray3 from '../images/Gallery/Volkswagen/PassatTdiGray3.jpg';
import PassatTdiGray4 from '../images/Gallery/Volkswagen/PassatTdiGray4.jpg';
import PassatTdiGray5 from '../images/Gallery/Volkswagen/PassatTdiGray5.jpg';
import TiguanBrown1 from '../images/Gallery/Volkswagen/TiguanBrown1.JPG';
import TiguanBrown2 from '../images/Gallery/Volkswagen/TiguanBrown2.JPG';
import TiguanBrown3 from '../images/Gallery/Volkswagen/TiguanBrown3.JPG';
import TiguanBrown4 from '../images/Gallery/Volkswagen/TiguanBrown4.JPG';
import TiguanBrown5 from '../images/Gallery/Volkswagen/TiguanBrown5.JPG';
import TiguanBrown6 from '../images/Gallery/Volkswagen/TiguanBrown6.JPG';
import TiguanBrown7 from '../images/Gallery/Volkswagen/TiguanBrown7.JPG';
import TiguanBrown8 from '../images/Gallery/Volkswagen/TiguanBrown8.JPG';



import CCSmall1 from '../images/Gallery/Volkswagen/Small/CCSmall1.JPG';
import CCSmall2 from '../images/Gallery/Volkswagen/Small/CCSmall2.JPG';
import CCSmall3 from '../images/Gallery/Volkswagen/Small/CCSmall3.JPG';
import CCSmall4 from '../images/Gallery/Volkswagen/Small/CCSmall4.JPG';
import JettaBlackSmall1 from '../images/Gallery/Volkswagen/Small/JettaBlackSmall1.JPG';
import JettaBlackSmall2 from '../images/Gallery/Volkswagen/Small/JettaBlackSmall2.JPG';
import JettaBlackSmall3 from '../images/Gallery/Volkswagen/Small/JettaBlackSmall3.JPG';
import JettaBlackSmall4 from '../images/Gallery/Volkswagen/Small/JettaBlackSmall4.JPG';
import JettaBlackSmall5 from '../images/Gallery/Volkswagen/Small/JettaBlackSmall5.JPG';
import JettaBlackSmall6 from '../images/Gallery/Volkswagen/Small/JettaBlackSmall6.JPG';
import JettaBlackSmall7 from '../images/Gallery/Volkswagen/Small/JettaBlackSmall7.JPG';
import PassatSmall1 from '../images/Gallery/Volkswagen/Small/PassatSmall1.jpg';
import PassatSmall2 from '../images/Gallery/Volkswagen/Small/PassatSmall2.jpg';
import PassatSmall3 from '../images/Gallery/Volkswagen/Small/PassatSmall3.jpg';
import PassatSmall4 from '../images/Gallery/Volkswagen/Small/PassatSmall4.jpg';
import PassatSmall5 from '../images/Gallery/Volkswagen/Small/PassatSmall5.jpg';
import PassatSmall6 from '../images/Gallery/Volkswagen/Small/PassatSmall6.jpg';
import PassatSmall7 from '../images/Gallery/Volkswagen/Small/PassatSmall7.jpg';
import PassatTdiGraySmall1 from '../images/Gallery/Volkswagen/Small/PassatTdiGraySmall1.jpg';
import PassatTdiGraySmall2 from '../images/Gallery/Volkswagen/Small/PassatTdiGraySmall2.jpg';
import PassatTdiGraySmall3 from '../images/Gallery/Volkswagen/Small/PassatTdiGraySmall3.jpg';
import PassatTdiGraySmall4 from '../images/Gallery/Volkswagen/Small/PassatTdiGraySmall4.jpg';
import PassatTdiGraySmall5 from '../images/Gallery/Volkswagen/Small/PassatTdiGraySmall5.jpg';
import TiguanBrownSmall1 from '../images/Gallery/Volkswagen/Small/TiguanBrownSmall1.JPG';
import TiguanBrownSmall2 from '../images/Gallery/Volkswagen/Small/TiguanBrownSmall2.JPG';
import TiguanBrownSmall3 from '../images/Gallery/Volkswagen/Small/TiguanBrownSmall3.JPG';
import TiguanBrownSmall4 from '../images/Gallery/Volkswagen/Small/TiguanBrownSmall4.JPG';
import TiguanBrownSmall5 from '../images/Gallery/Volkswagen/Small/TiguanBrownSmall5.JPG';
import TiguanBrownSmall6 from '../images/Gallery/Volkswagen/Small/TiguanBrownSmall6.JPG';
import TiguanBrownSmall7 from '../images/Gallery/Volkswagen/Small/TiguanBrownSmall7.JPG';
import TiguanBrownSmall8 from '../images/Gallery/Volkswagen/Small/TiguanBrownSmall8.JPG';








class VolkswagenGallery extends React.Component {
    state = {
        photoIndex: 0,
        isOpen: false,
        images: [
            CC1,
            CC2,
            CC3,
            CC4,
            JettaBlack1,
            JettaBlack2,
            JettaBlack3,
            JettaBlack4,
            JettaBlack5,
            JettaBlack6,
            JettaBlack7,
            Passat1,
            Passat2,
            Passat3,
            Passat4,
            Passat5,
            Passat6,
            Passat7,
            PassatTdiGray1,
            PassatTdiGray2,
            PassatTdiGray3,
            PassatTdiGray4,
            PassatTdiGray5,
            TiguanBrown1,
            TiguanBrown2,
            TiguanBrown3,
            TiguanBrown4,
            TiguanBrown5,
            TiguanBrown6,
            TiguanBrown7,
            TiguanBrown8,

        ],
        smallImages: [
            CCSmall1,
            CCSmall2,
            CCSmall3,
            CCSmall4,
            JettaBlackSmall1,
            JettaBlackSmall2,
            JettaBlackSmall3,
            JettaBlackSmall4,
            JettaBlackSmall5,
            JettaBlackSmall6,
            JettaBlackSmall7,
            PassatSmall1,
            PassatSmall2,
            PassatSmall3,
            PassatSmall4,
            PassatSmall5,
            PassatSmall6,
            PassatSmall7,
            PassatTdiGraySmall1,
            PassatTdiGraySmall2,
            PassatTdiGraySmall3,
            PassatTdiGraySmall4,
            PassatTdiGraySmall5,
            TiguanBrownSmall1,
            TiguanBrownSmall2,
            TiguanBrownSmall3,
            TiguanBrownSmall4,
            TiguanBrownSmall5,
            TiguanBrownSmall6,
            TiguanBrownSmall7,
            TiguanBrownSmall8,

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
                        <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={() =>
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

export default VolkswagenGallery;
