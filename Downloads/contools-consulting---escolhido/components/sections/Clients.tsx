import React, { useState } from 'react';
import { CLIENTS } from '../../constants';
import { Button } from '../ui/Button';
import { useContact } from '../../context/ContactContext';

export const Clients: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const { openContactModal } = useContact();

  // Duplicate clients for infinite loop effect (6 times for smooth loop)
  const duplicatedClients = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="py-24 px-6 border-b border-gray-200 bg-gray-50 transition-colors duration-300">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 6));
          }
        }
        .carousel-container {
          animation: scroll 10s linear infinite;
          will-change: transform;
        }
        .carousel-container.paused {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-acid font-bold tracking-widest uppercase mb-4 text-sm bg-dark inline-block px-1 rounded-sm">Our Clients</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Trusted by global companies</h3>
          <p className="text-dark/70">From the Americas, Europe, and Asia.</p>
        </div>
      </div>

      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-white py-12 mb-16">
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`carousel-container ${isPaused ? 'paused' : ''} flex gap-1`}>
            {duplicatedClients.map((client, idx) => (
              <div
                key={idx}
                className="min-w-[200px] h-32 flex items-center justify-center group relative overflow-hidden cursor-pointer flex-shrink-0"
              >
                {client.logoImage ? (
                  <img
                    src={client.logoImage}
                    alt={client.name}
                    className={`object-contain transition-all z-10 grayscale group-hover:grayscale-0 group-hover:opacity-100 opacity-80 ${
                      client.name === 'Grant Thornton'
                        ? 'max-w-[50%] max-h-[50%]'
                        : 'max-w-[70%] max-h-[70%]'
                    }`}
                  />
                ) : (
                  <span className="text-dark/40 font-bold text-lg text-center uppercase tracking-widest group-hover:text-dark transition-colors z-10 px-4">
                    {client.logoText}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <Button onClick={openContactModal}>
             Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};