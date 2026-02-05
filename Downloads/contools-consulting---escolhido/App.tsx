import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { VideoSection } from './components/sections/VideoSection';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { ValueProp } from './components/sections/ValueProp';
import { FAQ } from './components/sections/FAQ';
import { Clients } from './components/sections/Clients';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { ContactModal } from './components/ui/ContactModal';
import { ContactProvider, useContact } from './context/ContactContext';

function AppContent() {
  const { isContactModalOpen, closeContactModal } = useContact();

  return (
    <div className="min-h-screen bg-white text-dark selection:bg-acid selection:text-black overflow-x-hidden w-full">
      <Header />
      <main className="overflow-x-hidden w-full">
        <Hero />
        <VideoSection />
        <Services />
        <About />
        <ValueProp />
        <FAQ />
        <Clients />
      </main>
      <Footer />
      <WhatsAppButton />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
}

function App() {
  return (
    <ContactProvider>
      <AppContent />
    </ContactProvider>
  );
}

export default App;