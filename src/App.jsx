import { Routes, Route } from 'react-router';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

const App = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />

            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default App;
