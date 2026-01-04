import React from 'react';
import { Leaf } from 'lucide-react';

const Sustainability = () => {
    return (
        <section id="sustainability" className="min-h-screen py-20 bg-slate-900 border-t border-slate-800 flex items-center">
            <div className="container mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <Leaf className="text-green-500" size={48} />
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Sustainability & Civic Engagement</h2>
                </div>
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500/30"></div>
                    <div className="pl-8 py-4">
                        <h3 className="text-2xl font-bold text-white mb-2">Civic Engagement</h3>
                        <p className="text-slate-400">Description of civic engagement activities.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
