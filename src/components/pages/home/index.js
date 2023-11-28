import React from 'react';
import Carousal from './Carousal';
import BodyHome from './bodyOfHome/index';
import About from '../about';
import Feature from '../feature';
import Menu from '../menu';
import Chef from '../chef';

const Index = () => {
    return (
        <div>
            <Carousal />
            <BodyHome />
            <About />
            <Feature />
            <Menu />
            <Chef />
        </div >
    )
}

export default Index
