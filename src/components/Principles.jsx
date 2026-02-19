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
        <section className="py-24 bg-white border-b border-zinc-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-black mb-16 text-left font-outfit text-zinc-900 tracking-tight">Principios</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {principles.map((item, index) => (
                        <div key={index} className="p-10 bg-zinc-50 rounded-3xl border border-zinc-100 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                            <div className="mb-6 bg-white w-14 h-14 flex items-center justify-center rounded-2xl shadow-sm border border-zinc-100 group-hover:scale-110 transition-transform">{item.icon}</div>
                            <h3 className="text-2xl font-bold mb-3 text-zinc-900 leading-tight">{item.title}</h3>
                            <p className="text-zinc-500 text-base leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Principles;
