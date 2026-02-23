import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen pt-32 pb-20 bg-[#030303] text-white overflow-hidden relative font-inter flex items-center">
            {/* Background elements - strictly inside hero */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none -mr-40 -mt-40" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none -ml-40 -mb-40" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Intro Block Card */}
                    <div className="lg:col-span-7 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-center relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-blue-500 font-black tracking-[0.3em] text-sm md:text-lg uppercase mb-8 block opacity-90"
                        >
                            HOLA, SOY ALEJANDRO
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-black font-outfit mb-10 leading-[1.05] tracking-tighter text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                        >
                            Ingeniero de <br />
                            <span className="text-zinc-100 opacity-90">Sistemas</span> <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 filter drop-shadow-[0_0_35px_rgba(59,130,246,0.25)]">
                                Soporte IT & <br className="hidden md:block" />
                                Desarrollo bajo el <br className="hidden md:block" />
                                método de Vibecoding
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-zinc-500 text-base md:text-lg font-medium leading-relaxed max-w-xl opacity-90"
                        >
                            Especialista en Soporte IT Nivel 2 y desarrollo ágil de soluciones digitales mediante el método de Vibecoding. Experto en la orquestación de herramientas de IA (LLMs) para la creación de software acelerada.
                        </motion.p>
                    </div>

                    {/* Brain Visual Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-5 bg-zinc-900/60 backdrop-blur-xl border border-white/5 rounded-[2.5rem] flex items-center justify-center p-6 relative group overflow-hidden h-full min-h-[400px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-30 blur-3xl group-hover:opacity-50 transition-opacity duration-700" />

                        <div className="absolute inset-0 p-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-blue-500 to-violet-600 rounded-[2.5rem] blur-md" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-blue-500 to-violet-600 rounded-[2.5rem]" />
                            <div className="absolute inset-[2px] bg-zinc-950 rounded-[2.4rem] h-[calc(100%-4px)] w-[calc(100%-4px)]" />
                        </div>

                        <div className="relative z-10 w-full max-w-[400px] aspect-square flex items-center justify-center overflow-hidden rounded-[2rem]">
                            <img
                                src="https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=1000&auto=format&fit=crop"
                                alt="AI Intelligence"
                                className="w-full h-full object-cover rounded-[2rem] opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(59,130,246,0.3)] pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom floating decoration */}
            <div className="absolute bottom-10 right-10 w-8 h-8 opacity-20 hidden lg:block">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-white" />
                <div className="absolute top-0 left-0 w-[1px] h-full bg-white" />
            </div>
        </section>
    );
};

export default Hero;
