import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
    return (
        <div className="bg-black text-white min-h-screen font-inter selection:bg-blue-500/30">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <TechStack />
            <Portfolio />
            <Footer />
            <WhatsAppWidget />
        </div>
    );
}

export default App;
