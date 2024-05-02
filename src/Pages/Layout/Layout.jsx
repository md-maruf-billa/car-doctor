import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';

const Layout = () => {
    return (
        <div className='max-w-6xl mx-auto font-common-font'>
            <NavBar/>
            <Outlet/>
            
        </div>
    );
};

export default Layout;