import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-zinc-100 pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-16 mb-16">
                    <div className="md:col-span-2">
                        <a href="/" className="text-2xl font-black font-outfit mb-6 block text-zinc-900 tracking-tighter">Alejandro<span className="text-blue-600">.</span></a>
                        <p className="text-zinc-500 max-w-sm text-lg leading-relaxed">
                            Ingeniero de Sistemas y Desarrollador apasionado por crear experiencias digitales excepcionales bajo el método de Vibecoding.
                        </p>
                        <div className="flex gap-6 mt-8">
                            <a href="https://www.linkedin.com/in/alejandro-verbel/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-600 transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://github.com/averbes/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                                <Github size={24} />
                            </a>
                            <a href="https://twitter.com/alejandroverbel" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-400 transition-colors">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-zinc-900 font-bold mb-8 uppercase tracking-widest text-xs">Navegación</h4>
                        <ul className="space-y-4 text-zinc-500 font-medium">
                            <li><a href="#about" className="hover:text-blue-600 transition-colors">Sobre mí</a></li>
                            <li><a href="#services" className="hover:text-blue-600 transition-colors">Servicios</a></li>
                            <li><a href="#portfolio" className="hover:text-blue-600 transition-colors">Portafolio</a></li>
                            <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-zinc-900 font-bold mb-8 uppercase tracking-widest text-xs">Legal</h4>
                        <ul className="space-y-4 text-zinc-500 font-medium">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Privacidad</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Términos</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Cookies</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-100 pt-12 text-center text-zinc-400 text-sm font-medium">
                    <p>© {new Date().getFullYear()} Alejandro Verbel. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
