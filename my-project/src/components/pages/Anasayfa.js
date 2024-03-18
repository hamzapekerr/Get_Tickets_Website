import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards';
import Footer from '../Footer';
import Boxes from '../Boxes';

function Anasayfa() {
    return (
        <>
            <HeroSection />
            <Boxes />
            <Cards />
            <Footer />

        </>
    )
}

export default Anasayfa;