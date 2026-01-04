import React from 'react';
import { experienceData } from '../data/portfolio';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section className="py-28 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Professional Experience</h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">My journey in the professional world.</p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative pl-6 sm:pl-0">
                    {/* Center Line for Desktop */}
                    <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 transform -translate-x-1/2"></div>

                    {/* Left Border for Mobile */}
                    <div className="sm:hidden absolute left-6 top-0 bottom-0 w-px bg-slate-200"></div>

                    <div className="space-y-12">
                        {experienceData.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col sm:flex-row items-center gap-8 ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
                            >
                                {/* Content Card */}
                                <div className="flex-1 w-full pl-12 sm:pl-0">
                                    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow relative">
                                        {/* Connector Dot */}
                                        <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-sm z-10 
                                    ${index % 2 === 0 ? 'sm:-left-[50px] -left-[33px]' : 'sm:-right-[50px] -left-[33px]'}
                                `}></div>

                                        <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                                            <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                                            <span className="text-blue-600 font-semibold text-sm bg-blue-50 px-3 py-1 rounded-full">{job.date}</span>
                                        </div>
                                        <h4 className="text-lg text-slate-600 mb-4 font-medium">{job.company} {job.location && <span className="text-slate-400">• {job.location}</span>}</h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            {job.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Space for other side on desktop */}
                                <div className="hidden sm:block flex-1"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
