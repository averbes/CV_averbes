import React from 'react';

const TechStack = () => {
    const categories = [
        {
            title: "Frontend",
            technologies: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"]
        },
        {
            title: "Backend",
            technologies: ["Node.js", "NestJS"]
        },
        {
            title: "Backend as a Service (BaaS)",
            technologies: ["Supabase", "Firebase", "Azure", "Convex"]
        },
        {
            title: "Automatización & IA",
            technologies: ["n8n", "ChatGPT", "Gemini"]
        },
        {
            title: "Bases de Datos",
            technologies: ["MongoDB"]
        },
        {
            title: "Pasarelas de Pago",
            technologies: ["Mercado Pago"]
        }
    ];

    return (
        <section className="py-24 bg-zinc-50/50 border-y border-zinc-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-black mb-16 text-left font-outfit text-zinc-900 tracking-tight">Tech Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12">
                    {categories.map((category, index) => (
                        <div key={index} className="flex flex-col items-start group">
                            <h3 className="text-sm font-bold text-blue-600 mb-6 uppercase tracking-widest">{category.title}</h3>
                            <div className="flex flex-wrap justify-start gap-4">
                                {category.technologies.map((tech, idx) => (
                                    <span key={idx} className="px-5 py-2 bg-white rounded-xl text-sm font-semibold text-zinc-600 border border-zinc-200 shadow-sm group-hover:border-blue-200 transition-all duration-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
