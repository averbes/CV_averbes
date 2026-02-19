import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <a href="/" className="text-2xl font-bold font-outfit mb-4 block">Alejandro<span className="text-blue-500">.</span></a>
                        <p className="text-gray-400 max-w-sm">
                            Ingeniero de Sistemas y Desarrollador apasionado por crear experiencias digitales excepcionales.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a href="linkedin.com/in/alejandro-verbel-sierra" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com/averbes/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://twitter.com/alejandroverbel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Navegación</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#about" className="hover:text-blue-400 transition-colors">Sobre mí</a></li>
                            <li><a href="#services" className="hover:text-blue-400 transition-colors">Servicios</a></li>
                            <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portafolio</a></li>
                            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacidad</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Términos</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Cookies</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Alejandro Verbel. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
