import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#030303] text-white pt-24 pb-12 relative overflow-hidden font-inter border-t border-white/5">
            {/* Ambient background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

                    {/* Brand Section */}
                    <div className="lg:col-span-5">
                        <motion.a
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            href="/"
                            className="text-3xl font-black font-outfit mb-8 block text-white tracking-tighter"
                        >
                            Alejandro<span className="text-blue-500">.</span>
                        </motion.a>
                        <p className="text-zinc-500 max-w-sm text-lg leading-relaxed font-medium mb-10">
                            Ingeniero de Sistemas fusionando la disciplina de la infraestructura TI con la agilidad disruptiva del <span className="text-white italic">Vibecoding</span>.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {[
                                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/alejandro-verbel/", color: "hover:bg-blue-600" },
                                { icon: <Github size={20} />, href: "https://github.com/averbes/", color: "hover:bg-zinc-800" },
                                { icon: <Twitter size={20} />, href: "https://twitter.com/alejandroverbel", color: "hover:bg-sky-500" },
                                { icon: <Mail size={20} />, href: "mailto:averbel@example.com", color: "hover:bg-red-500" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-12 h-12 rounded-2xl bg-zinc-900/50 border border-white/5 flex items-center justify-center text-zinc-400 transition-all duration-300 ${social.color} hover:text-white hover:border-transparent shadow-lg`}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="lg:col-span-2 lg:col-start-7">
                        <h4 className="text-blue-500 font-black mb-8 uppercase tracking-[0.3em] text-[10px] md:text-xs">Navegación</h4>
                        <ul className="space-y-4">
                            {['Sobre mí', 'Servicios', 'Portafolio', 'Tecnologías'].map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={`#${item.toLowerCase().replace(' ', '').replace('í', 'i')}`}
                                        className="text-zinc-500 hover:text-white transition-colors flex items-center group font-medium"
                                    >
                                        {item}
                                        <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal/Contact Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-blue-500 font-black mb-8 uppercase tracking-[0.3em] text-[10px] md:text-xs">Contacto</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-zinc-500 hover:text-white transition-colors font-medium">Privacidad</a></li>
                            <li><a href="#" className="text-zinc-500 hover:text-white transition-colors font-medium">Términos de Uso</a></li>
                            <li><a href="#" className="text-zinc-500 hover:text-white transition-colors font-medium">Contrátame</a></li>
                        </ul>
                    </div>

                    {/* Quick Call to Action */}
                    <div className="lg:col-span-2">
                        <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-6 rounded-3xl relative overflow-hidden group">
                            <div className="relative z-10">
                                <p className="text-xs font-black text-blue-500 uppercase tracking-widest mb-2">Disponible</p>
                                <p className="text-sm font-bold text-white mb-4">¿Tienes un proyecto en mente?</p>
                                <a href="https://wa.me/573115356374" className="text-xs font-black text-blue-400 flex items-center gap-2 hover:gap-3 transition-all">
                                    HABLEMOS <ArrowUpRight className="w-3 h-3" />
                                </a>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-600 text-xs font-medium tracking-wide">
                        © {currentYear} Alejandro Verbel. Forjado bajo el método de <span className="text-zinc-400">Vibecoding</span>.
                    </p>
                    <div className="flex gap-8">
                        <span className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            Sistemas Operacionales
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
