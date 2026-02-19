import React from 'react';

const projects = [
    {
        title: "Mundo Vacacional CK",
        category: "Web App / Turismo",
        image: "/mundo-vacacional.png",
        link: "https://www.mundovacacionalck.com/"
    },
    {
        title: "InteliaSalud",
        category: "Web App / Salud",
        image: "/inteliasalud.png",
        link: "https://www.inteliasalud.com/"
    },
    {
        title: "Prueba Firma",
        category: "Web App / Utilidad",
        image: "/prueba-firma.png",
        link: "https://prueba-firma.netlify.app/"
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-black mb-16 text-left font-outfit text-zinc-900 tracking-tight">Proyectos Destacados</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block overflow-hidden rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-xl"
                        >
                            <div className="aspect-video bg-zinc-100 relative overflow-hidden">
                                {/* Fallback for missing image */}
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-300 font-bold bg-zinc-100 group-hover:bg-zinc-50 transition-colors px-6 text-center">
                                    {project.title}
                                </div>
                                {project.image && <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => e.target.style.display = 'none'}
                                />}
                                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white font-bold bg-blue-600 px-6 py-3 rounded-full text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Ver Proyecto</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">{project.category}</span>
                                <h3 className="text-2xl font-black mt-3 font-outfit text-zinc-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
