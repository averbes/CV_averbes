import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center bg-white text-zinc-900 pt-20 relative overflow-hidden">
            <div className="container mx-auto px-4 z-10">
                <div className="max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-blue-600 font-bold tracking-widest text-sm md:text-base mb-4 uppercase"
                    >
                        Hola, soy Alejandro
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black font-outfit mb-6 leading-[0.9] tracking-tighter"
                    >
                        <span className="text-zinc-900">Ingeniero de Sistemas</span> <br />
                        <span className="text-blue-600 block mt-2">
                            Soporte IT & Desarrollo de aplicaciones bajo el metodo de Vibecoding
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-zinc-500 max-w-2xl text-lg md:text-xl font-medium leading-relaxed mb-10"
                    >
                        Especialista en Soporte IT Nivel 2 y desarrollo ágil de soluciones digitales mediante el método de Vibecoding. Experto en la
                        orquestación de herramientas de Inteligencia Artificial (LLMs) para la creación de software, priorizando la arquitectura lógica y la
                        experiencia de usuario sobre la sintaxis de código manual. Capacidad comprobada para transformar ideas complejas en plataformas funcionales de manera acelerada..
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a href="#portfolio" className="px-10 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl">
                            Ver Proyectos
                        </a>
                        <a href="#contact" className="px-10 py-4 border-2 border-zinc-100 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-50 transition-all shadow-sm">
                            Hablemos
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Subtle background glow to match the soft feel */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default Hero;
