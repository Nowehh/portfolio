import React from 'react';
import { skillsData } from '../data/portfolio';
import { Code, Cpu, Terminal, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillCategory = ({ title, skills, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay * 0.1 }}
        className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow"
    >
        <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                <Icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm font-medium border border-slate-100"
                >
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section className="py-28 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Technical Proficiency</h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">A comprehensive overview of my technical skills and tools.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <SkillCategory
                        title="Programming Languages"
                        skills={skillsData.languages}
                        icon={Terminal}
                        delay={1}
                    />
                    <SkillCategory
                        title="Artificial Intelligence & Data"
                        skills={skillsData.ai}
                        icon={Cpu}
                        delay={2}
                    />
                    <SkillCategory
                        title="Tools & Environment"
                        skills={skillsData.tools}
                        icon={Code}
                        delay={3}
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-green-50 rounded-xl text-green-600">
                                <Languages size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">Languages</h3>
                        </div>
                        <div className="space-y-4">
                            {skillsData.spoken.map((lang) => (
                                <div key={lang.lang} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                                    <span className="text-slate-700 font-medium">{lang.lang}</span>
                                    <span className="text-xs font-bold px-3 py-1 bg-green-100 text-green-700 rounded-full">
                                        {lang.level}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
