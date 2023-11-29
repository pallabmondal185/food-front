import React from 'react';
import Carousal from './Carousal';
import About from '../about';
import Feature from '../feature';
import Menu from '../menu';
import Chef from '../chef';
import Contact from '../contact';
import Booking from '../booking';
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
