import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-2xl text-blue-400 mb-4 font-medium"
                >
                    Hola, soy Alejandro
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold font-outfit mb-6 leading-tight"
                >
                    Ingeniero de Sistemas <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        Soporte IT & Desarrollo de aplicaciones bajo el metodo de Vibecoding
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-400 max-w-2xl mx-auto text-lg mb-8"
                >
                    Especialista en Soporte IT Nivel 2 y desarrollo ágil de soluciones digitales mediante el método de Vibecoding. Experto en la
                    orquestación de herramientas de Inteligencia Artificial (LLMs) para la creación de software, priorizando la arquitectura lógica y la
                    experiencia de usuario sobre la sintaxis de código manual. Capacidad comprobada para transformar ideas complejas en plataformas funcionales de manera acelerada..
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex justify-center gap-4"
                >
                    <a href="#portfolio" className="px-8 py-3 bg-blue-600 rounded-full font-medium hover:bg-blue-700 transition-colors">
                        Ver Proyectos
                    </a>
                    <a href="#contact" className="px-8 py-3 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors">
                        Hablemos
                    </a>
                </motion.div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
};

export default Hero;
