import React from 'react';

const Engineering = () => {
    return (
        <section id="engineering" className="min-h-screen py-20 bg-slate-900 border-t border-slate-800 flex items-center">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Engineering Course</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                        <h3 className="text-2xl font-bold text-white mb-4">Projects</h3>
                        <p className="text-slate-400">School projects and technical implementations.</p>
                    </div>
                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                        <h3 className="text-2xl font-bold text-white mb-4">Productions</h3>
                        <p className="text-slate-400">Industrial production and process management.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Engineering;
