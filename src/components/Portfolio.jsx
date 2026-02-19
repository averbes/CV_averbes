import React from 'react';

const projects = [
    {
        title: "Mundo Vacacional CK",
        category: "Web App / Turismo",
        image: "/mundo-vacacional.png", // Placeholder path
        link: "https://www.mundovacacionalck.com/"
    },
    {
        title: "InteliaSalud",
        category: "Web App / Salud",
        image: "/inteliasalud.png", // Placeholder path
        link: "https://www.inteliasalud.com/"
    },
    {
        title: "Prueba Firma",
        category: "Web App / Utilidad",
        image: "/prueba-firma.png", // Placeholder path
        link: "https://prueba-firma.netlify.app/"
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-outfit">Proyectos Destacados</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 hover:border-blue-500/50 transition-colors"
                        >
                            <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                                {/* Fallback for missing image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                                    {project.title}
                                </div>
                                {project.image && <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 hover:opacity-100"
                                    onError={(e) => e.target.style.display = 'none'}
                                />}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                                    <span className="text-white font-medium bg-blue-600 px-4 py-2 rounded-full text-sm">Ver Proyecto</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase">{project.category}</span>
                                <h3 className="text-xl font-bold mt-2 font-outfit text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
