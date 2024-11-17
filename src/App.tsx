import './App.css';
import BentoGrid from './_components/BentoGrid';
import ContactForm from './_components/ContactForm';
import Footer from './_components/Footer';
import Hero from './_components/Hero';
import Testimonials from './_components/Testimonials';

function App() {
    return (
        <>
            <Hero />
            <BentoGrid />
            <Testimonials />
            <ContactForm />
            <Footer />
        </>
    );
}

export default App;
