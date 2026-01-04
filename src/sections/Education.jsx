import React from 'react';
import { educationData } from '../data/portfolio';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const Education = () => {
    return (
        <section className="py-28 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Academic Background</h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">My educational achievements and qualifications.</p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all flex flex-col md:flex-row gap-6 md:gap-10 items-start"
                        >
                            <div className="bg-blue-50 p-4 rounded-xl text-blue-600 shrink-0">
                                <GraduationCap size={32} />
                            </div>

                            <div className="flex-1 w-full">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">{edu.school}</h3>
                                        <h4 className="text-xl text-blue-600 mb-2 font-medium">{edu.degree}</h4>
                                    </div>
                                    <div className="flex flex-col gap-1 md:text-right mt-2 md:mt-0 text-slate-500 text-sm">
                                        <div className="flex items-center gap-2 md:justify-end">
                                            <Calendar size={14} />
                                            <span>{edu.period || edu.year}</span>
                                        </div>
                                        <div className="flex items-center gap-2 md:justify-end">
                                            <MapPin size={14} />
                                            <span>{edu.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {edu.description && (
                                    <div className="flex items-center gap-2 text-slate-700 mb-4 font-medium">
                                        <Award size={16} className="text-orange-500" />
                                        {edu.description}
                                    </div>
                                )}

                                {edu.details.length > 0 && (
                                    <div>
                                        <h5 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Key Modules</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.details.map((detail, i) => (
                                                <span key={i} className="text-sm px-3 py-1 bg-slate-50 rounded-lg text-slate-600 border border-slate-100 font-medium">
                                                    {detail}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
