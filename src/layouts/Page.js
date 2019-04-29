import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import GalleryPage from '../pages/GalleryPage'
import ErrorPage from '../pages/ErrorPage'
import GalleryProducts from '../pages/GalleryProducts'
import Offers from '../pages/Offers'
import Contact from '../pages/Contact'

const Page = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Gallery" component={GalleryProducts} />
            <Route exact path="/Gallery/:id" component={GalleryPage} />
            <Route exact path="/Offers" component={Offers} />
            <Route exact path="/Contact" component={Contact} />
            <Route component={ErrorPage} />
        </Switch>

    );
}

export default Page;