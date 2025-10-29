import { Routes, Route } from 'react-router';
import Navbar from '../components/Global/Navbar';
import Header from '../components/Home/Header';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import KeyOfferings from '../components/Home/keyOfferings';
import Services from '../components/Home/Services';
import Projects from '../components/Home/Projects';
import FindMore from '../components/Home/FindMore';
import Footer from '../components/Global/Footer';
import SecondaryHeader from '../components/Home/SecondaryHeader';

const Home = () => {
    return (
        <div id="home">
            <title>Home</title>
            <Navbar />
            <Header />
            <SecondaryHeader />
            <WhyChooseUs />
            <Services />
            <KeyOfferings />
            <Projects />
            <FindMore />
            <Footer />
        </div>
    );
};

export default Home;
