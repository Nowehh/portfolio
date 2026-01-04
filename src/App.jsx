import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Career from './sections/Career'; // Was Education
import Mobility from './sections/Mobility';
import { Mail, Linkedin, Github } from 'lucide-react';
import { profileData } from './data/portfolio';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900 flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/career" element={<Career />} />
            <Route path="/mobility" element={<Mobility />} />
            <Route path="/contact" element={
              <section className="py-28 bg-slate-50 min-h-screen flex items-center justify-center">
                <div className="container mx-auto px-6 text-center">
                  <h2 className="text-4xl font-bold text-slate-900 mb-8">Let's Connect</h2>
                  <div className="max-w-xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
                    <p className="text-slate-600 mb-8 text-lg">Feel free to reach out for internship opportunities or collaborations.</p>
                    <div className="flex flex-col gap-6">
                      <a href={`mailto:${profileData.contact.email}`} className="flex items-center justify-center gap-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group">
                        <Mail className="text-blue-600 group-hover:scale-110 transition-transform" />
                        <span className="text-blue-900 font-medium">{profileData.contact.email}</span>
                      </a>
                      <a href={`tel:${profileData.contact.phone}`} className="flex items-center justify-center gap-4 p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors group">
                        <span className="text-slate-900 font-medium">{profileData.contact.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            } />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="py-8 text-center text-slate-500 border-t border-slate-200 bg-white">
        <div className="flex justify-center gap-6 mb-4">
          <a href={profileData.contact.socials.linkedin || "#"} className="text-slate-400 hover:text-blue-600 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={profileData.contact.socials.github || "#"} className="text-slate-400 hover:text-slate-900 transition-colors">
            <Github size={20} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
