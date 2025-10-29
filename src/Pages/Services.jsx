import React from 'react';
import { Routes, Route } from 'react-router';
import Navbar from '../components/Global/Navbar';
import Footer from '../components/Global/Footer';
import Header from '../components/Services/ServicesHeader';
import PreFooter from '../components/Services/PreFooter';
import MainBody from '../components/Services/MainBody';
import ServicesList from '../components/Services/ServicesList';


const Features = () => {
    return (
        <div id="services">
            <title>services</title>
            <Navbar />
            <Header />  

            <MainBody />
            <ServicesList />

            <PreFooter />
            <Footer />
        </div>
    );
};

export default Features;
