import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold font-outfit">Alejandro<span className="text-blue-500">.</span></div>
                <ul className="hidden md:flex space-x-8">
                    <li><a href="#about" className="hover:text-blue-400 transition-colors">Sobre mí</a></li>
                    <li><a href="#services" className="hover:text-blue-400 transition-colors">Servicios</a></li>
                    <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portafolio</a></li>
                    <li><a href="#contact" className="px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
