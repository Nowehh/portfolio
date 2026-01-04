import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone, Download } from 'lucide-react';
import { profileData } from '../data/portfolio';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBg})` }}
            />

            {/* Overlay Gradient to ensure text readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-50/80 via-slate-50/50 to-slate-50/90 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 relative inline-block"
                >
                    {/* Profile Image with Ring */}
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-500 shadow-lg">
                        <img
                            src={profileImg}
                            alt={profileData.name}
                            className="w-full h-full rounded-full object-cover border-4 border-white"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm text-blue-600 rounded-full text-sm font-medium mb-6 shadow-sm border border-blue-50">
                        Available for Summer Internship 2026
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 leading-tight max-w-4xl mx-auto tracking-tight">
                        {profileData.name}
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-slate-600 font-medium mb-8">
                        {profileData.title}
                    </h2>

                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-sm font-medium">
                        {profileData.intro}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-12 text-slate-700">
                        <div className="flex items-center gap-2 group cursor-pointer hover:text-blue-600 transition-colors">
                            <div className="p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                                <Mail size={18} className="text-blue-500" />
                            </div>
                            <a href={`mailto:${profileData.contact.email}`}>{profileData.contact.email}</a>
                        </div>
                        <div className="flex items-center gap-2 group cursor-pointer hover:text-blue-600 transition-colors">
                            <div className="p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                                <Phone size={18} className="text-blue-500" />
                            </div>
                            <span>{profileData.contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-white rounded-full shadow-sm">
                                <MapPin size={18} className="text-blue-500" />
                            </div>
                            <span>{profileData.contact.location}</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/projects"
                            className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 flex items-center justify-center gap-2 group"
                        >
                            View My Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="/assets/CV_Pro_Noe_Rigoletti.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white/90 backdrop-blur border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-white hover:border-slate-300 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                        >
                            <Download size={18} />
                            Download CV
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
