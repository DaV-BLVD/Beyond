import React from 'react';
import { Routes, Route } from 'react-router';
import Navbar from '../components/Global/Navbar';
import Header from '../components/About-components/Header';
import BodyAbout from '../components/About-components/BodyAbout';
import ServiceRange from '../components/About-components/ServiceRange';
import Footer from '../components/Global/Footer';
import ForYourBusiness from '../components/About-components/ForYourBusiness';

const About = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <BodyAbout />
            <ServiceRange />
            <ForYourBusiness />
            <Footer />
        </div>
    );
};

export default About;
