import React from 'react';

const Activities = () => {
    return (
        <section id="activities" className="min-h-screen py-20 bg-slate-800 flex items-center">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Sport & Activities</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="aspect-video bg-slate-700 rounded-xl flex items-center justify-center">
                        <span className="text-slate-400">Activity 1</span>
                    </div>
                    <div className="aspect-video bg-slate-700 rounded-xl flex items-center justify-center">
                        <span className="text-slate-400">Activity 2</span>
                    </div>
                    <div className="aspect-video bg-slate-700 rounded-xl flex items-center justify-center">
                        <span className="text-slate-400">Activity 3</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;
