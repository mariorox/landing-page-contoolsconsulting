import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export const VideoSection: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 border-b border-gray-200 bg-white transition-colors duration-300 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-acid/5 blur-[150px] rounded-full -z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-acid font-bold tracking-widest uppercase mb-4 text-sm bg-dark inline-block px-2 py-1 rounded-sm">
            Learn More
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold mb-6 text-dark leading-tight">
            See How We Help<br />Global Companies
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-6xl aspect-video rounded-lg overflow-hidden shadow-2xl shadow-dark/20 mb-12 hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-all duration-500"
          style={{
            backgroundImage: 'url(https://img.youtube.com/vi/fvkGyFC7JZg/maxresdefault.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/fvkGyFC7JZg?rel=0&modestbranding=1"
            title="How to open a company in Brazil - Contools"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button onClick={scrollToContact} className="bg-acid text-dark hover:bg-acid/90">
            Schedule a Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};