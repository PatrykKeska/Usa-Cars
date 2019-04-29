import React from 'react'

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import '../styles/Lightbox.css';
import '../styles/FlexCarsGallery.css';
import BmwBlack1 from '../images/Gallery/Bmw/BmwBlack1.JPG';
import BmwBlack2 from '../images/Gallery/Bmw/BmwBlack2.JPG';
import BmwBlack3 from '../images/Gallery/Bmw/BmwBlack3.JPG';
import BmwBlack4 from '../images/Gallery/Bmw/BmwBlack4.JPG';
import BmwWhite1 from '../images/Gallery/Bmw/BmwWhite1.JPG';
import BmwWhite2 from '../images/Gallery/Bmw/BmwWhite2.JPG';
import BmwMix1 from '../images/Gallery/Bmw/BmwMix1.JPG';
import BmwMix2 from '../images/Gallery/Bmw/BmwMix2.JPG';
import BmwMix3 from '../images/Gallery/Bmw/BmwMix3.JPG';
import BmwMix4 from '../images/Gallery/Bmw/BmwMix4.JPG';
import BmwMix5 from '../images/Gallery/Bmw/BmwMix5.JPG';
import BmwMix6 from '../images/Gallery/Bmw/BmwMix6.JPG';
import BmwMix7 from '../images/Gallery/Bmw/BmwMix7.JPG';
import BmwMix8 from '../images/Gallery/Bmw/BmwMix8.JPG';




import BmwBlackSmall1 from '../images/Gallery/Bmw/Small/BmwBlackSmall1.JPG';
import BmwBlackSmall2 from '../images/Gallery/Bmw/Small/BmwBlackSmall2.JPG';
import BmwBlackSmall3 from '../images/Gallery/Bmw/Small/BmwBlackSmall3.JPG';
import BmwBlackSmall4 from '../images/Gallery/Bmw/Small/BmwBlackSmall4.JPG';
import BmwWhiteSmall1 from '../images/Gallery/Bmw/Small/BmwWhiteSmall1.JPG';
import BmwWhiteSmall2 from '../images/Gallery/Bmw/Small/BmwWhiteSmall2.JPG';
import BmwMixSmall1 from '../images/Gallery/Bmw/Small/BmwMixSmall1.JPG';
import BmwMixSmall2 from '../images/Gallery/Bmw/Small/BmwMixSmall2.JPG';
import BmwMixSmall3 from '../images/Gallery/Bmw/Small/BmwMixSmall3.JPG';
import BmwMixSmall4 from '../images/Gallery/Bmw/Small/BmwMixSmall4.JPG';
import BmwMixSmall5 from '../images/Gallery/Bmw/Small/BmwMixSmall5.JPG';
import BmwMixSmall6 from '../images/Gallery/Bmw/Small/BmwMixSmall6.JPG';
import BmwMixSmall7 from '../images/Gallery/Bmw/Small/BmwMixSmall7.JPG';
import BmwMixSmall8 from '../images/Gallery/Bmw/Small/BmwMixSmall8.JPG';





class BmwGallery extends React.Component {
    state = {
        photoIndex: 0,
        isOpen: false,
        images: [
            BmwBlack1,
            BmwBlack2,
            BmwBlack3,
            BmwBlack4,
            BmwWhite1,
            BmwWhite2,
            BmwMix1,
            BmwMix2,
            BmwMix3,
            BmwMix4,
            BmwMix5,
            BmwMix6,
            BmwMix7,
            BmwMix8,


        ],
        smallImages: [
            BmwBlackSmall1,
            BmwBlackSmall2,
            BmwBlackSmall3,
            BmwBlackSmall4,
            BmwWhiteSmall1,
            BmwWhiteSmall2,
            BmwMixSmall1,
            BmwMixSmall2,
            BmwMixSmall3,
            BmwMixSmall4,
            BmwMixSmall5,
            BmwMixSmall6,
            BmwMixSmall7,
            BmwMixSmall8,


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

export default BmwGallery;
