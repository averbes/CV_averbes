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
            title: "Automatización & IA",
            technologies: ["n8n", "ChatGPT", "Claude", "Gemini"]
        },
        {
            title: "Bases de Datos",
            technologies: ["PostgreSQL", "MongoDB"]
        },
        {
            title: "Pasarelas de Pago",
            technologies: ["Stripe", "Mercado Pago", "PayPal"]
        }
    ];

    return (
        <section className="py-20 bg-zinc-900/30 border-y border-white/5">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center font-outfit">Tech Stack</h2>
                <div className="flex flex-wrapjustify-center gap-8 md:gap-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                        {categories.map((category, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <h3 className="text-lg font-medium text-blue-400 mb-4">{category.title}</h3>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {category.technologies.map((tech, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
