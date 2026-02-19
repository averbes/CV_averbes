import React from 'react';
import { Bot, Zap, Monitor, Shield, Wrench, Building, Search, FileKey } from 'lucide-react';

const services = [
    {
        icon: <Bot className="w-8 h-8 text-purple-500" />,
        title: "IA & Agentes Autónomos",
        description: "Creación de bots para WhatsApp y automatización de procesos con agentes de IA (OpenAI)."
    },
    {
        icon: <Zap className="w-8 h-8 text-yellow-500" />,
        title: "Desarrollo con IA",
        description: "Desarrollo más rápido, creativo y robusto utilizando herramientas de IA de vanguardia."
    },
    {
        icon: <Monitor className="w-8 h-8 text-blue-500" />,
        title: "Desarrollo Full Stack",
        description: "Aplicaciones web completas (Frontend y Backend) modernas, escalables y responsivas."
    },
    {
        icon: <Shield className="w-8 h-8 text-red-500" />,
        title: "Seguridad de Redes",
        description: "Seguridad avanzada, firewalls, antivirus e implementación de IDS."
    },
    {
        icon: <Wrench className="w-8 h-8 text-orange-500" />,
        title: "Mantenimiento Hardware",
        description: "Mantenimientos preventivos y correctivos a equipos de cómputo y CCTV."
    },
    {
        icon: <Building className="w-8 h-8 text-gray-400" />,
        title: "Gestión TI & Gobierno",
        description: "Aplicación de mejores prácticas ITIL en entornos gubernamentales."
    },
    {
        icon: <Search className="w-8 h-8 text-green-500" />,
        title: "Recuperación de Datos",
        description: "Recuperación de información en medios magnéticos con confidencialidad."
    },
    {
        icon: <FileKey className="w-8 h-8 text-indigo-500" />,
        title: "Licenciamiento & SO",
        description: "Gestión y licenciamiento oficial para Windows y software corporativo."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-black mb-16 text-left font-outfit text-zinc-900 tracking-tight">Servicios Especializados</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-zinc-50 p-10 rounded-3xl border border-zinc-100 hover:bg-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group">
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                            <h3 className="text-2xl font-bold mb-3 text-zinc-900 leading-tight">{service.title}</h3>
                            <p className="text-zinc-500 text-base leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
