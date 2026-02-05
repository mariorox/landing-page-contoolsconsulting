import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const ValueProp: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="py-24 px-6 border-b border-gray-200 bg-gray-50 relative overflow-hidden transition-colors duration-300">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-acid/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-dark">WE ARE EXPERTS</h2>
        <p className="text-xl text-dark/70 max-w-3xl mx-auto mb-16 leading-relaxed">
          We are a modern up-to-date Brazilian company ready to reduce bureaucracy, simplify and accelerate the start of the operations of foreign companies and startups in Brazil.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Qualified professionals who are experts in the field",
            "Trust of major players in the international market",
            "Provides peace of mind and efficiency to all business partners"
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-acid/10 block rounded-2xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <div className="rounded-2xl h-full w-full p-8 overflow-hidden bg-gradient-to-br from-white via-white to-acid/5 border border-gray-200 group-hover:border-acid/50 relative z-50 transition-all duration-300 shadow-sm group-hover:shadow-md">
                <div className="relative z-50 flex flex-col items-center">
                  <CheckCircle2 className="w-12 h-12 text-acid mb-6" />
                  <p className="text-dark font-medium text-center">{item}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};