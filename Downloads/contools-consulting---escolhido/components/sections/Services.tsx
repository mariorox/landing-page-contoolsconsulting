import React from 'react';
import { SERVICES } from '../../constants';
import { Button } from '../ui/Button';
import { ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-0 border-b border-gray-200 transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[800px]">
        {/* Sticky Sidebar */}
        <div className="lg:col-span-4 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-200 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] flex flex-col justify-between bg-white transition-colors duration-300 relative overflow-hidden">
          
          {/* Background Overlay */}
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
               alt="Corporate Architecture" 
               className="w-full h-full object-cover opacity-5 pointer-events-none grayscale"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50"></div>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-acid font-bold tracking-widest uppercase mb-4 text-sm bg-dark inline-block px-1 rounded-sm">What We Do</h2>
              <h3 className="text-5xl font-bold mb-6 text-dark">OUR<br/>SERVICES</h3>
              <p className="text-dark/70 mb-8 max-w-xs">
                Comprehensive legal and administrative support tailored for international companies.
              </p>
            </div>
            <Button onClick={scrollToContact} className="hidden lg:inline-flex">
              Schedule a Free Consultation
            </Button>
          </div>
        </div>

        {/* Services List */}
        <div className="lg:col-span-8 bg-gray-50 transition-colors duration-300">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className="group border-b border-gray-200 p-8 lg:p-12 flex items-start justify-between hover:bg-white transition-colors cursor-default"
            >
              <div className="flex gap-6 items-baseline">
                <span className="text-sm font-mono text-dark/40">{(index + 1).toString().padStart(2, '0')}</span>
                <h4 className="text-xl md:text-3xl font-medium text-dark group-hover:text-acid transition-colors">
                  {service.title}
                </h4>
              </div>
              <ArrowUpRight className="text-dark/40 group-hover:text-dark opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0 ml-4" />
            </div>
          ))}
          <div className="p-8 lg:hidden bg-white">
             <Button onClick={scrollToContact} fullWidth>
                Schedule a Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};