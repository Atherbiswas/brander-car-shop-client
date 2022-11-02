import React from 'react';
import Contact from '../../Contact/Contact';
import Services from '../../Services/Services';
import Team from '../../Team/Team';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Team></Team>
        </div>
    );
};

export default Home;