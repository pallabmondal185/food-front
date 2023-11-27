import React from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Index = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Index
