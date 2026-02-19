import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-zinc-900/50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 text-center md:text-left">
                        <span className="text-blue-400 font-medium tracking-wider text-sm">MI FILOSOFÍA</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 font-outfit">Sobre mi enfoque</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-white">Experiencia Integral en Tecnología.</h3>
                            <p className="text-gray-400 mb-4">
                                Combino la capacidad de construcción del <strong className="text-white">Desarrollo Full Stack con el metodo de vibecoding</strong> con la disciplina operativa del <strong className="text-white">Soporte IT Nivel 2</strong>.
                            </p>
                            <p className="text-gray-400">
                                Mi trayectoria en el <strong className="text-white">sector gobierno</strong> me ha permitido aplicar estándares rigurosos y metodologías como <strong className="text-white">ITIL</strong> para garantizar la continuidad y eficiencia de los servicios tecnológicos.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-zinc-800 p-6 rounded-2xl text-center border border-white/5">
                                <span className="block text-4xl font-bold text-blue-500 mb-2">15+</span>
                                <span className="text-sm text-gray-400">Años de Exp.</span>
                            </div>
                            <div className="bg-zinc-800 p-6 rounded-2xl text-center border border-white/5">
                                <span className="block text-4xl font-bold text-purple-500 mb-2">3+</span>
                                <span className="text-sm text-gray-400">Proyectos</span>
                            </div>
                            <div className="bg-zinc-800 p-6 rounded-2xl text-center border border-white/5 col-span-2">
                                <span className="block text-4xl font-bold text-green-500 mb-2">100%</span>
                                <span className="text-sm text-gray-400">Compromiso</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
