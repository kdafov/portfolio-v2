import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BentoGrid from './_components/BentoGrid';
import ContactForm from './_components/ContactForm';
import Footer from './_components/Footer';
import Hero from './_components/Hero';
import Testimonials from './_components/Testimonials';
import Projects from './_components/Projects';
import GamesHub from './_components/GamesHub';

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <BentoGrid />
                            <Testimonials />
                            <ContactForm />
                            <Footer />
                        </>
                    }
                />
                <Route path="/projects" element={<Projects />} />
                <Route path="/games" element={<GamesHub />} />
            </Routes>
        </Router>
    );
}

export default App;
