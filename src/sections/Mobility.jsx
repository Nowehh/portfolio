import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Plane, Map, Info } from 'lucide-react';
import { mobilityData } from '../data/portfolio';

const Mobility = () => {
    return (
        <section className="py-28 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">International Mobility</h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">Embracing global opportunities and cultural exchange.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
                    {/* Upcoming Mobility */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                                <Plane size={16} />
                                <span>Upcoming Adventure</span>
                            </div>

                            <h3 className="text-3xl font-bold mb-4">{mobilityData.upcoming.title}</h3>
                            <p className="text-blue-100 mb-6 text-lg">{mobilityData.upcoming.description}</p>

                            <div className="flex items-center gap-2 text-sm font-medium bg-black/20 w-fit px-4 py-2 rounded-lg">
                                <Info size={16} />
                                <span>{mobilityData.upcoming.period}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Travel History */}
                    <div className="grid gap-6">
                        {mobilityData.trips.map((trip, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow"
                            >
                                <div className="p-3 bg-orange-50 text-orange-500 rounded-xl shrink-0">
                                    <Map size={24} />
                                </div>
                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="text-lg font-bold text-slate-900">{trip.location}</h4>
                                        <span className="text-sm font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">{trip.date}</span>
                                    </div>
                                    <p className="text-slate-600 text-sm">{trip.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mobility;
