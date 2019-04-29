import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FordGallery from './FordGallery'
import AudiGallery from './AudiGallery'
import VolkswagenGallery from './VolkswagenGallery'
import BmwGallery from './BmwGallery'
import MercedesGallery from './MercedesGallery'
import JeepGallery from './JeepGallery'
const Products = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/Gallery/FordGallery" component={FordGallery} />
                <Route exact path="/Gallery/AudiGallery" component={AudiGallery} />
                <Route exact path="/Gallery/VolkswagenGallery" component={VolkswagenGallery} />
                <Route exact path="/Gallery/BmwGallery" component={BmwGallery} />
                <Route exact path="/Gallery/MercedesGallery" component={MercedesGallery} />
                <Route exact path="/Gallery/JeepGallery" component={JeepGallery} />

            </Switch>
        </div>
    );
}

export default Products;