import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${isScrolled ? 'bg-white/90 backdrop-blur-md border-gray-200 shadow-sm' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <img src="/images/logo/contools-logo.png" alt="Contools" className="h-10 w-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
           <a href="#services" className="text-sm font-bold text-dark/70 hover:text-acid transition-colors">Services</a>
           <a href="#about" className="text-sm font-bold text-dark/70 hover:text-acid transition-colors">About</a>
           <a href="#faq" className="text-sm font-bold text-dark/70 hover:text-acid transition-colors">FAQ</a>

           <Button onClick={scrollToContact} className="py-2 px-6 text-xs">Get Started</Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="text-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-200 p-6 flex flex-col gap-6 md:hidden">
          <a href="#services" className="text-lg font-medium text-dark" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#about" className="text-lg font-medium text-dark" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#faq" className="text-lg font-medium text-dark" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <Button onClick={scrollToContact} fullWidth>Schedule Consultation</Button>
        </div>
      )}
    </header>
  );
};