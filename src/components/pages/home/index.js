import React from 'react';
import Carousal from './Carousal';
import About from '../about/About';
import Feature from '../feature/Feature';
import Menu from '../menu/MenuHeader';
import Chef from '../chef/ChiefSchefs';
import Contact from '../contact/ContactPage';
import Booking from '../booking/Booking';
import BlogHome from './BlogHome';

const Index = () => {
    return (
        <div>
            <Carousal />
            <Booking />
            <About />
            <Feature />
            <Menu />
            <Chef />
            <Contact />
            <BlogHome />
        </div >
    )
}

export default Index
