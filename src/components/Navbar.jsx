import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [theme, setTheme] = useDarkMode();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/80 dark:bg-[#030303]/80 backdrop-blur-xl border-b border-zinc-200 dark:border-white/5 shadow-sm' : 'py-6 bg-transparent'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-black font-outfit text-zinc-900 dark:text-white tracking-tighter italic transition-colors">
                    Alejandro<span className="text-blue-600 dark:text-blue-500">.</span>
                </div>

                <div className="flex items-center space-x-10">
                    <ul className="hidden md:flex items-center space-x-10">
                        <li><a href="#about" className="text-zinc-600 dark:text-zinc-500 font-bold uppercase tracking-widest text-[10px] hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Sobre mí</a></li>
                        <li><a href="#services" className="text-zinc-600 dark:text-zinc-500 font-bold uppercase tracking-widest text-[10px] hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Servicios</a></li>
                        <li><a href="#portfolio" className="text-zinc-600 dark:text-zinc-500 font-bold uppercase tracking-widest text-[10px] hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Portafolio</a></li>
                        <li>
                            <a href="https://wa.me/573115356374" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black rounded-xl font-black text-[10px] hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-105 transition-all uppercase tracking-[0.2em] shadow-lg active:scale-95">
                                Hablemos
                            </a>
                        </li>
                    </ul>

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 text-zinc-800 dark:text-white hover:scale-110 active:scale-90 transition-all duration-300 group relative overflow-hidden shadow-sm"
                        aria-label="Toggle Theme"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        {theme === 'dark' ? (
                            <Moon className="w-5 h-5 text-blue-400 fill-blue-400 group-hover:rotate-12 transition-transform" />
                        ) : (
                            <Sun className="w-5 h-5 text-yellow-500 fill-yellow-500 group-hover:rotate-90 transition-transform" />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
