import React from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../hooks/useDarkMode';

const TechStack = () => {
    const [theme] = useDarkMode();
    const categories = [
        {
            title: "Frontend",
            techs: [
                { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white", lightIcon: "https://cdn.simpleicons.org/nextdotjs/black" },
                { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
                { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
                { name: "shadcn/ui", icon: "https://cdn.simpleicons.org/shadcnui/white", lightIcon: "https://cdn.simpleicons.org/shadcnui/black" }
            ]
        },
        {
            title: "Backend",
            techs: [
                { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
                { name: "NestJS", icon: "https://cdn.simpleicons.org/nestjs/E0234E" },
                { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/05998B" }
            ]
        },
        {
            title: "Automatización & IA",
            techs: [
                { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/FF6D5A" },
                { name: "ChatGPT", icon: "https://cdn.simpleicons.org/openai/412991" },
                { name: "Claude", icon: "https://cdn.simpleicons.org/anthropic/white", lightIcon: "https://cdn.simpleicons.org/anthropic/black" },
                { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini/8E75FF" }
            ]
        },
        {
            title: "Bases de Datos",
            techs: [
                { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
                { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A045" }
            ]
        },
        {
            title: "Pasarelas de Pago",
            techs: [
                { name: "PayPal", icon: "https://cdn.simpleicons.org/paypal/003087" },
            ]
        }
    ];

    return (
        <section id="techstack" className="py-24 bg-white dark:bg-[#030303] text-zinc-900 dark:text-white relative overflow-hidden font-inter transition-colors duration-300">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mb-20 text-center mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-600 dark:text-blue-500 font-black tracking-[0.3em] text-[10px] md:text-xs uppercase mb-4 block"
                    >
                        STACK TECNOLÓGICO
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black font-outfit text-zinc-900 dark:text-white tracking-tighter mb-6 transition-colors"
                    >
                        Tecnologías y herramientas
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mx-auto transition-colors"
                    >
                        Experiencia con tecnologías modernas y herramientas empresariales
                    </motion.p>
                </div>

                {/* Grid 3xX structure */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-zinc-50 dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200 dark:border-white/5 p-8 rounded-[2rem] hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden shadow-sm"
                        >
                            {/* Inner glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <h3 className="text-xl font-black mb-8 text-zinc-900 dark:text-white font-outfit tracking-tight flex items-center gap-3 transition-colors">
                                <span className="w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full" />
                                {category.title}
                            </h3>

                            {/* Tech Sub-grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {category.techs.map((tech, techIdx) => (
                                    <div
                                        key={techIdx}
                                        className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.03] hover:bg-blue-600/10 hover:border-blue-500/20 transition-all duration-300 relative group/tech shadow-sm"
                                    >
                                        <div className="w-8 h-8 md:w-10 md:h-10 mb-3 flex items-center justify-center">
                                            <img
                                                src={tech.lightIcon ? (theme === 'dark' ? tech.icon : tech.lightIcon) : tech.icon}
                                                alt={tech.name}
                                                className="w-full h-full object-contain filter group-hover/tech:brightness-110"
                                            />
                                        </div>
                                        <span className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-wider group-hover/tech:text-zinc-900 dark:group-hover/tech:text-white transition-colors text-center truncate w-full">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom aesthetic line */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-600 dark:via-blue-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
