import React from 'react';
import Navbar from '../components/Global/Navbar';
import Header from '../components/Projects/Header';
import ProjectsList from '../components/Projects/ProjectsList';
import Footer from '../components/Global/Footer';

const Projects = () => {
    return (
        <div id="projects">
            
            <title>Projects</title>

            <Navbar />
            <Header />
            <ProjectsList />
            <Footer />
        </div>
    );
};

export default Projects;
