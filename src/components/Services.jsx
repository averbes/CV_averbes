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
        <section id="services" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-outfit">Servicios Especializados</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 hover:bg-zinc-800/50 transition-colors">
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
