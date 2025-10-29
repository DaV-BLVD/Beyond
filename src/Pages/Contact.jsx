import React from 'react';
import Navbar from '../components/Global/Navbar';
import Header from '../components/Contact/Header';
import Body from '../components/Contact/Body';
import FAQ from '../components/Contact/FAQ';
import Form from '../components/Contact/Form'
import Footer from '../components/Global/Footer'

const Contact = () => {
    return (
        <div id="contact">
            
            <title>Contact</title>

            <Navbar />
            <Header />
            <Body />
            <FAQ />
            <Form />
            <Footer />
        </div>
    );
};

export default Contact;
