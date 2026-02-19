import React from 'react';
import { Gauge, ShieldCheck, Layout, Wrench } from 'lucide-react';

const Principles = () => {
    const principles = [
        {
            icon: <Gauge className="w-6 h-6 text-blue-500" />,
            title: "Rendimiento primero",
            description: "Medimos, optimizamos y automatizamos: menos TTFB, más conversiones."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
            title: "Robustez",
            description: "Tipos estrictos, testing y pipelines estables en cada entrega."
        },
        {
            icon: <Layout className="w-6 h-6 text-blue-500" />,
            title: "Diseño claro",
            description: "UI brutalista, jerarquías limpias y accesibles."
        },
        {
            icon: <Wrench className="w-6 h-6 text-green-500" />,
            title: "Mantenibilidad",
            description: "Arquitectura modular, DX cuidada y documentación real."
        }
    ];

    return (
        <section className="py-20 border-b border-white/5">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-12 text-center font-outfit">Principios</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {principles.map((item, index) => (
                        <div key={index} className="p-6 bg-zinc-950 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors">
                            <div className="mb-4 bg-zinc-900 w-12 h-12 flex items-center justify-center rounded-lg">{item.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Principles;
