import React from 'react';
import { projectsData } from '../data/portfolio';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <section className="py-28 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">Showcasing my work in software development and innovation.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] transition-all group flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="h-64 bg-slate-100 relative overflow-hidden group-hover:shadow-inner">
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10 duration-500"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed bg-slate-50/50 p-4 rounded-lg flex-1 border border-slate-50">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs font-semibold px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                                    <span className="text-sm text-slate-500 font-medium italic">
                                        {project.details}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
