import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-zinc-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-14 text-left">
                        <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">MI FILOSOFÍA</span>
                        <h2 className="text-4xl md:text-5xl font-black mt-3 font-outfit text-zinc-900 tracking-tight">Sobre mi enfoque</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-zinc-900 leading-tight">Experiencia Integral en Tecnología.</h3>
                            <p className="text-zinc-500 text-lg leading-relaxed">
                                Combino la capacidad de construcción del <strong className="text-zinc-900 font-bold">Desarrollo Full Stack con el metodo de vibecoding</strong> con la disciplina operativa del <strong className="text-zinc-900 font-bold">Soporte IT Nivel 2</strong>.
                            </p>
                            <p className="text-zinc-500 text-lg leading-relaxed">
                                Mi trayectoria en el <strong className="text-zinc-900 font-bold">sector gobierno</strong> me ha permitido aplicar estándares rigurosos y metodologías como <strong className="text-zinc-900 font-bold">ITIL</strong> para garantizar la continuidad y eficiencia de los servicios tecnológicos.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-8 rounded-3xl text-left border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                                <span className="block text-5xl font-black text-blue-600 mb-2">15+</span>
                                <span className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Años de Exp.</span>
                            </div>
                            <div className="bg-white p-8 rounded-3xl text-left border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                                <span className="block text-5xl font-black text-purple-600 mb-2">3+</span>
                                <span className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Proyectos</span>
                            </div>
                            <div className="bg-white p-8 rounded-3xl text-left border border-zinc-100 shadow-sm hover:shadow-md transition-shadow col-span-2">
                                <span className="block text-5xl font-black text-green-600 mb-2">100%</span>
                                <span className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Compromiso</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
