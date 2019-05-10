import React from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from "mdbreact";
import Lightbox from "react-image-lightbox";
import '../styles/Lightbox.css';
import '../styles/FlexCarsGallery.css';
import Audi1 from '../images/Gallery/Audi/AudiWHite1.JPG';
import Audi2 from '../images/Gallery/Audi/AudiWHite2.JPG';
import Audi3 from '../images/Gallery/Audi/AudiWHite3.JPG';
import Audi4 from '../images/Gallery/Audi/AudiWHite4.JPG';
import Audi5 from '../images/Gallery/Audi/AudiWHite5.JPG';
import Audi6 from '../images/Gallery/Audi/AudiWHite6.JPG';
import Audi7 from '../images/Gallery/Audi/AudiWHite7.JPG';
import Audi8 from '../images/Gallery/Audi/AudiWHite8.JPG';
import Audi9 from '../images/Gallery/Audi/AudiWHite9.JPG';
import Audi10 from '../images/Gallery/Audi/AudiWHite10.JPG';
import Audi11 from '../images/Gallery/Audi/AudiWHite11.JPG';
import Audi12 from '../images/Gallery/Audi/b9Audi1.jpg';
import Audi13 from '../images/Gallery/Audi/b9Audi2.jpg';
import Audi14 from '../images/Gallery/Audi/b9Audi3.jpg';
import Audi15 from '../images/Gallery/Audi/b9Audi4.jpg';

import AudiSmall1 from '../images/Gallery/Audi/Small/AudiWHiteSmall1.JPG';
import AudiSmall2 from '../images/Gallery/Audi/Small/AudiWHiteSmall2.JPG';
import AudiSmall3 from '../images/Gallery/Audi/Small/AudiWHiteSmall3.JPG';
import AudiSmall4 from '../images/Gallery/Audi/Small/AudiWHiteSmall4.JPG';
import AudiSmall5 from '../images/Gallery/Audi/Small/AudiWHiteSmall5.JPG';
import AudiSmall6 from '../images/Gallery/Audi/Small/AudiWHiteSmall6.JPG';
import AudiSmall7 from '../images/Gallery/Audi/Small/AudiWHiteSmall7.JPG';
import AudiSmall8 from '../images/Gallery/Audi/Small/AudiWHiteSmall8.JPG';
import AudiSmall9 from '../images/Gallery/Audi/Small/AudiWHiteSmall9.JPG';
import AudiSmall10 from '../images/Gallery/Audi/Small/AudiWHiteSmall10.JPG';
import AudiSmall11 from '../images/Gallery/Audi/Small/AudiWHiteSmall11.JPG';
import AudiSmall12 from '../images/Gallery/Audi/Small/b9AudiSmall1.jpg';
import AudiSmall13 from '../images/Gallery/Audi/Small/b9AudiSmall2.jpg';
import AudiSmall14 from '../images/Gallery/Audi/Small/b9AudiSmall3.jpg';
import AudiSmall15 from '../images/Gallery/Audi/Small/b9AudiSmall4.jpg';


class AudiGallery extends React.Component {
    state = {
        photoIndex: 0,
        isOpen: false,
        images: [
            Audi1, Audi2, Audi3, Audi4, Audi5, Audi6, Audi7, Audi8, Audi9, Audi10, Audi11,Audi12,Audi13,Audi14,Audi15,
        ],
        smallImages: [
            AudiSmall1, AudiSmall2, AudiSmall3, AudiSmall4, AudiSmall5, AudiSmall6, AudiSmall7, AudiSmall8, AudiSmall9, AudiSmall10, AudiSmall11,AudiSmall12,AudiSmall13,AudiSmall14,AudiSmall15,
        ]
    }

    renderImages = () => {
        let photoIndex = -1;
        const {
            smallImages
        } = this.state;

        return smallImages.map(imageSrc => {
            photoIndex++;
            const privateKey = photoIndex;
            return (<MDBCol md="4"
                key={
                    photoIndex
                } >
                < figure >
                    <
                        img src={
                            imageSrc
                        }
                        alt="Gallery"
                        className="img-fluid"
                        onClick={
                            () =>
                                this.setState({
                                    photoIndex: privateKey,
                                    isOpen: true
                                })
                        }
                    /> </figure > </MDBCol>
            );
        })
    }

    render() {

        const {
            photoIndex,
            isOpen,
            images
        } = this.state;
        return (<MDBContainer className="mt-5" >
            <div className="mdb-lightbox" >
                <MDBRow> {
                    this.renderImages()
                } </MDBRow> </div > {
                isOpen && (<
                    Lightbox mainSrc={
                        images[photoIndex]
                    }
                    nextSrc={
                        images[(photoIndex + 1) % images.length]
                    }
                    prevSrc={
                        images[(photoIndex + images.length - 1) % images.length]
                    }
                    imageTitle={
                        photoIndex + 1 + "/" + images.length
                    }
                    onCloseRequest={
                        () => this.setState({
                            isOpen: false
                        })
                    }
                    onMovePrevRequest={
                        () =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                    }
                    onMoveNextRequest={
                        () =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                    }
                />
                )
            } </MDBContainer>
        );
    }
}

export default AudiGallery;