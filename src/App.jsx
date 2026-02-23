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
        <div className="bg-white dark:bg-[#030303] text-zinc-900 dark:text-white min-h-screen font-inter selection:bg-blue-500/30 transition-colors duration-300">
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
