import React from 'react';
import { Button } from '../ui/Button';
import { useContact } from '../../context/ContactContext';

export const Hero: React.FC = () => {
  const { openContactModal } = useContact();

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 px-6 border-b border-gray-200 overflow-hidden bg-white transition-colors duration-300">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Oswald:wght@700&family=Bebas+Neue&family=Righteous&family=Poppins:wght@700&family=Montserrat:wght@700&family=Inter:wght@700&family=Roboto:wght@700&family=Space+Mono:wght@700&family=IBM+Plex+Mono:wght@700&display=swap');

        @keyframes fontSwap {
          0% { font-family: 'Playfair Display', serif; }
          10% { font-family: 'Oswald', sans-serif; }
          20% { font-family: 'Bebas Neue', sans-serif; }
          30% { font-family: 'Righteous', sans-serif; }
          40% { font-family: 'Poppins', sans-serif; }
          50% { font-family: 'Montserrat', sans-serif; }
          60% { font-family: 'Inter', sans-serif; }
          70% { font-family: 'Roboto', sans-serif; }
          80% { font-family: 'Space Mono', monospace; }
          90% { font-family: 'IBM Plex Mono', monospace; }
          100% { font-family: 'Playfair Display', serif; }
        }

        .font-swap {
          animation: fontSwap 4s infinite;
        }
      `}</style>

      {/* Background Image + Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/img_hero.jpg"
          className="w-full h-full object-cover"
          style={{
            objectPosition: '75% center'
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>




        {/* Bottom gradient for transition */}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-5xl">
          <h2 className="text-acid font-medium tracking-widest uppercase mb-6 text-sm bg-dark/90 inline-block px-2 py-1 lg:p-0 backdrop-blur-sm rounded-sm shadow-lg">
            Global Expansion Experts
          </h2>
          {/* Text forced to white without shadow, relying on image natural darkness */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-8 text-white">
            EXPERTS IN<br />
            EXPANDING YOUR<br />
            BUSINESS TO<br />
            <span className="text-acid font-swap">BRAZIL</span>
          </h1>

          <p className="text-white text-xl mb-10 font-bold max-w-lg">
            All solutions in one place.
          </p>

          <Button onClick={openContactModal} className="w-full sm:w-auto shadow-2xl border-none">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>

      {/* Decorative Grid Lines - slightly more visible on dark photo */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/10 -z-10 hidden lg:block"></div>
    </section>
  );
};