import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
            <div className="container mx-auto px-4 py-5 flex justify-between items-center">
                <div className="text-2xl font-black font-outfit text-zinc-900 tracking-tighter">Alejandro<span className="text-blue-600">.</span></div>
                <ul className="hidden md:flex items-center space-x-10">
                    <li><a href="#about" className="text-zinc-600 font-semibold hover:text-blue-600 transition-colors">Sobre mí</a></li>
                    <li><a href="#services" className="text-zinc-600 font-semibold hover:text-blue-600 transition-colors">Servicios</a></li>
                    <li><a href="#portfolio" className="text-zinc-600 font-semibold hover:text-blue-600 transition-colors">Portafolio</a></li>
                    <li><a href="#contact" className="px-8 py-3 bg-white border border-zinc-200 text-zinc-900 rounded-full font-bold hover:shadow-md transition-all">Contacto</a></li>
                    <li className="text-2xl cursor-pointer">🌙</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
