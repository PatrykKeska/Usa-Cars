import React from 'react';
import errorImg from '../images/error.png'
import '../styles/ErrorPage.css'



const ErrorPage = () => {
    return (
        <div className="errorPage">
            <img className='errorImage' src={errorImg} alt="error background" />
        </div>
    );
}

export default ErrorPage;