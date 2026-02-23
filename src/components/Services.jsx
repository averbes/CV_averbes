import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Monitor, Shield, Wrench, Building, Search, FileKey } from 'lucide-react';

const services = [
    {
        icon: <Bot className="w-8 h-8" />,
        title: "IA & Agentes Autónomos",
        description: "Creación de bots para WhatsApp y automatización de procesos complejos con agentes de IA escalables.",
        color: "from-purple-500 to-indigo-500"
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Desarrollo con IA",
        description: "Implementación de soluciones aceleradas bajo el método de Vibecoding, reduciendo tiempos de entrega.",
        color: "from-yellow-400 to-orange-500"
    },
    {
        icon: <Monitor className="w-8 h-8" />,
        title: "Desarrollo Full Stack",
        description: "Arquitecturas web modernas con React, Node.js y Next.js integradas con ecosistemas en la nube.",
        color: "from-blue-400 to-cyan-500"
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Seguridad de Redes",
        description: "Blindaje de infraestructuras críticas, firewalls, antivirus e implementación de sistemas IDS/IPS.",
        color: "from-red-500 to-rose-600"
    },
    {
        icon: <Wrench className="w-8 h-8" />,
        title: "Soporte IT Nivel 2",
        description: "Mantenimiento especializado de hardware corporativo, CCTV y optimización de sistemas operativos.",
        color: "from-orange-400 to-amber-600"
    },
    {
        icon: <Building className="w-8 h-8" />,
        title: "Gestión Corporativa",
        description: "Estandarización de procesos tecnológicos bajo ITIL, optimizando la eficiencia en el sector gobierno.",
        color: "from-zinc-400 to-slate-500"
    },
    {
        icon: <Search className="w-8 h-8" />,
        title: "Data Recovery",
        description: "Recuperación forense de información y diagnóstico avanzado en medios magnéticos y SSD.",
        color: "from-green-400 to-emerald-600"
    },
    {
        icon: <FileKey className="w-8 h-8" />,
        title: "Licenciamiento Cloud",
        description: "Administración de suscripciones Microsoft 365, Azure y cumplimiento de licenciamiento corporativo.",
        color: "from-indigo-400 to-blue-600"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-[#030303] text-white relative overflow-hidden font-inter">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="max-w-4xl mb-20">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-500 font-black tracking-[0.4em] text-[10px] md:text-xs uppercase"
                    >
                        CAPACIDADES TÉCNICAS
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black mt-4 font-outfit text-white tracking-tighter"
                    >
                        Servicios <span className="text-zinc-500">Especializados</span>
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-blue-600 rounded-full mt-6" />
                </div>

                {/* Bento-style Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 hover:border-blue-500/30 transition-all duration-500 overflow-hidden flex flex-col h-full"
                        >
                            {/* Neon Spotlight Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Icon Wrapper */}
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.color} p-[2px] mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]`}>
                                <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center text-white">
                                    {service.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-black mb-4 font-outfit text-white group-hover:text-blue-400 transition-colors leading-tight">
                                {service.title}
                            </h3>

                            <p className="text-zinc-500 text-sm leading-relaxed font-medium mb-auto">
                                {service.description}
                            </p>

                            {/* Bottom interactive bar */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
