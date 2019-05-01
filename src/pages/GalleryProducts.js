import React from 'react'
import { Link, } from 'react-router-dom'
import '../styles/GalleryProducts.css'
import Audi from '../images/icons/audi.png'
import Ford from '../images/icons/ford.png'
import Jeep from '../images/icons/Jeep.png'
import Volkswagen from '../images/icons/volkswagen.png';
import Bmw from '../images/icons/bmw.png';
import Mercedes from '../images/icons/mercedes-benz.png';



const cars = [
    {
        id: 1,
        name: 'Ford',
        path: '/Gallery/FordGallery',
        icon: Ford,
    },
    {
        id: 2,
        name: 'Audi',
        path: '/Gallery/AudiGallery',
        icon: Audi,
    },
    {
        id: 3,
        name: 'Volkswagen',
        path: '/Gallery/VolkswagenGallery',
        icon: Volkswagen,
    },
    {
        id: 4,
        name: 'Bmw',
        path: '/Gallery/BmwGallery',
        icon: Bmw,
    },
    {
        id: 5,
        name: 'Mercedes',
        path: '/Gallery/MercedesGallery',
        icon: Mercedes,
    },
    {
        id: 6,
        name: 'Jeep',
        path: '/Gallery/JeepGallery',
        icon: Jeep,
    },
]






const GalleryProducts = () => {

    const List = cars.map(car => (
        <li key={car.id}>
            <Link to={car.path}><img src={car.icon} alt={car.name} /></Link>
        </li>
    ))

    return (
        <div className="gallery-products-div-wrapper">
            <h3>Zapraszamy do obejrzenia Galerii</h3>
            <ul className='ul-gallery-products'>
                {List}
            </ul>
        </div>

    );
}

export default GalleryProducts;