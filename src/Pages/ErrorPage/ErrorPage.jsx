import React from 'react';
import errorImage from '../../assets/icons/error.png'
import NavBar from '../../Components/NavBar/NavBar';

const ErrorPage = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div>
                <NavBar/>
            </div>
            <div className='min-h-[calc(100vh-210px)] flex justify-center items-center'>
                <img src={errorImage} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;