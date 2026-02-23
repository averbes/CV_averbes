import React from 'react';
import { motion } from 'framer-motion';
import { Network, Server, ShieldCheck, Cpu, Code2, Rocket } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#030303] text-white relative overflow-hidden font-inter">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="mb-16 text-left">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-500 font-black tracking-[0.4em] text-[10px] md:text-xs uppercase"
                        >
                            MI FILOSOFÍA & TRAYECTORIA
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black mt-4 font-outfit text-white tracking-tighter"
                        >
                            Sobre mi enfoque <br className="hidden md:block" />
                            <span className="text-zinc-500">Multidisciplinario</span>
                        </motion.h2>
                    </div>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                        {/* Summary Block - Bento Large */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-8 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-outfit leading-tight">
                                Arquitecto de Infraestructuras y <br className="hidden md:block" />
                                pionero en <span className="text-blue-400">Desarrollo Acelerado</span>.
                            </h3>

                            <div className="space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed font-medium">
                                <p>
                                    Ingeniero de Sistemas con <strong className="text-white">+15 años</strong> liderando infraestructuras críticas, gestión de redes y administración de servidores. Mi enfoque fusiona la solidez de la administración de sistemas tradicional con la agilidad disruptiva del <strong className="text-white italic">Vibecoding</strong>.
                                </p>
                                <p>
                                    Domino la orquestación de herramientas de IA y LLMs para automatizar tareas complejas, desde la seguridad en <strong className="text-blue-400">Active Directory</strong> hasta la creación de software robusto. Experto en transformar entornos empresariales en ecosistemas optimizados, escalables y orientados a la máxima eficiencia operativa.
                                </p>
                            </div>

                            {/* Skills Mini-Grid inside Bento */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/5">
                                    <Server className="w-5 h-5 text-blue-500" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-300">Servidores</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/5">
                                    <Network className="w-5 h-5 text-purple-500" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-300">Redes L3</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/5">
                                    <Code2 className="w-5 h-5 text-green-500" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-300">Vibecoding</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/5">
                                    <ShieldCheck className="w-5 h-5 text-red-500" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-300">Ciberseguridad</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stats Bento Cards - Keeping them consistent but styled dark */}
                        <div className="lg:col-span-4 grid grid-cols-1 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-zinc-900/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 flex flex-col justify-center group hover:border-blue-500/30 transition-all"
                            >
                                <span className="block text-6xl font-black text-blue-600 mb-2 group-hover:scale-110 transition-transform font-outfit drop-shadow-[0_0_20px_rgba(37,99,235,0.3)]">15+</span>
                                <span className="text-xs font-black text-zinc-500 uppercase tracking-[0.3em]">Años de Exp.</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-zinc-900/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 flex flex-col justify-center group hover:border-purple-500/30 transition-all font-outfit"
                            >
                                <span className="block text-6xl font-black text-purple-600 mb-2 group-hover:scale-110 transition-transform drop-shadow-[0_0_20px_rgba(147,51,234,0.3)]">3+</span>
                                <span className="text-xs font-black text-zinc-500 uppercase tracking-[0.3em]">Proyectos</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-zinc-900/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 flex flex-col justify-center group hover:border-green-500/30 transition-all"
                            >
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="block text-6xl font-black text-green-600 group-hover:scale-110 transition-transform font-outfit drop-shadow-[0_0_20px_rgba(22,163,74,0.3)]">100%</span>
                                    <Rocket className="w-8 h-8 text-green-500/50" />
                                </div>
                                <span className="text-xs font-black text-zinc-500 uppercase tracking-[0.3em]">Compromiso</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
