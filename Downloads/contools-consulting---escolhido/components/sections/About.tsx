import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative py-24 px-6 border-b border-gray-200 bg-dark transition-colors duration-300 overflow-hidden">

      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
          alt="Business Meeting"
          className="w-full h-full object-cover opacity-10 pointer-events-none grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark opacity-90"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.h2
              className="text-acid font-bold tracking-widest uppercase mb-6 text-sm bg-dark/50 inline-block px-1 rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Contools Consulting
            </motion.h2>
            <motion.h3
              className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-acid"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              THE BRIDGE THAT CONNECTS YOUR COMPANY TO BRAZIL.
            </motion.h3>
            <motion.div
              className="w-20 h-1 bg-acid mb-8"
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 80 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button onClick={scrollToContact} variant="primary">
                Get in touch and find out how we can help
              </Button>
            </motion.div>
          </div>
          
          <div className="space-y-8 text-lg md:text-xl text-white font-normal leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Contools is an expert in legal representation of foreign companies in Brazil.
              This is a fundamental legal activity for these companies to operate in accordance with the Brazilian legislation, ensuring that they can operate in the country with safety.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Contools represents legal entities, as well as their legal representatives, in all necessary jurisdictions with the utmost reliability and professionalism.
            </motion.p>
            <motion.div
              className="p-8 border border-acid/30 rounded-2xl bg-dark/50 backdrop-blur-sm mt-8 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl md:text-3xl font-medium italic text-acid text-center">
                "We are the bridge that connects your company to Brazil."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};