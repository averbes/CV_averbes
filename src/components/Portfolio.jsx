import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Trophy, ShoppingBag } from 'lucide-react';

const projects = [
    {
        title: "Torneo Veterano",
        category: "Dashboard Deportivo",
        image: "/torneoveteranos.JPG",
        link: "https://torneo-veterano.onrender.com/",
        tech: ["React", "Tailwind", "Firebase"],
        icon: <Trophy className="w-5 h-5" />
    },
    {
        title: "Torneo Alto Bosque",
        category: "Gestión de Torneos",
        image: "/torneo altobosque.JPG",
        link: "https://torneo-alto-bosque.vercel.app/",
        tech: ["Vite", "Node.js", "MongoDB"],
        icon: <Globe className="w-5 h-5" />
    },
    {
        title: "Hele Store",
        category: "E-commerce Premium",
        image: "/helestrore.JPG",
        link: "https://hele-store.vercel.app/",
        tech: ["Next.js", "Supabase", "Stripe"],
        icon: <ShoppingBag className="w-5 h-5" />
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 bg-white dark:bg-[#030303] text-zinc-900 dark:text-white relative overflow-hidden font-inter transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none opacity-50 dark:opacity-100" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mb-20 text-left">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-600 dark:text-blue-500 font-black tracking-[0.4em] text-[10px] md:text-xs uppercase"
                    >
                        PROYECTOS RECIENTES
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black mt-4 font-outfit text-zinc-900 dark:text-white tracking-tighter"
                    >
                        Portafolio de <br className="hidden md:block" />
                        <span className="text-zinc-500">Soluciones Digitales</span>
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-zinc-50 dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200 dark:border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-sm"
                        >
                            {/* Card Image Wrapper */}
                            <div className="aspect-[16/10] relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 dark:opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#030303] via-transparent to-transparent opacity-80" />

                                {/* Overlay Tech Tags */}
                                <div className="absolute top-6 left-6 flex gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/60 dark:bg-black/60 backdrop-blur-md border border-zinc-200 dark:border-white/10 rounded-full text-[8px] font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-600/10 dark:bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-500">
                                            {project.icon}
                                        </div>
                                        <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest leading-none">
                                            {project.category}
                                        </span>
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-zinc-100 dark:bg-white/5 rounded-full hover:bg-blue-600 transition-colors text-zinc-900 dark:text-white hover:text-white"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>

                                <h3 className="text-2xl font-black text-zinc-900 dark:text-white font-outfit mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium">
                                    <Globe className="w-3.5 h-3.5" />
                                    <span className="truncate">{project.link.replace('https://', '')}</span>
                                </div>
                            </div>

                            {/* Bottom hover bar */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <p className="text-zinc-500 font-medium italic">
                        Desarrollando soluciones robustas bajo el método de <span className="text-zinc-900 dark:text-white">Vibecoding</span>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
