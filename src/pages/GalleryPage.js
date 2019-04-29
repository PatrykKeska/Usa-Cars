import React from 'react'
import { Link, } from 'react-router-dom'
import Product from '../pages/Product'


const GalleryPage = ({ match }) => {

    return (
        <>
            <Link className="products-back-to-list" to='/Gallery'>Powrót Do Listy </Link>
            <div className="products-gallery-wrapper">
                <Product id={match.params.id} />
                <div className="products-gallery-photos">

                </div>
            </div>

        </>
    );
}

export default GalleryPage;