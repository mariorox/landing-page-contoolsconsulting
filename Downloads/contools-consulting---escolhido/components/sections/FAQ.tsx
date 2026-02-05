import React, { useState } from 'react';
import { FAQS } from '../../constants';
import { Button } from '../ui/Button';
import { Plus, Minus } from 'lucide-react';
import { useContact } from '../../context/ContactContext';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { openContactModal } = useContact();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 border-b border-gray-200 bg-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-dark">F.A.Q.</h2>
        
        <div className="space-y-4 mb-12">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-gray-50 border-acid' : 'bg-transparent border-gray-200'}`}
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => toggle(index)}
              >
                <span className={`text-lg font-medium pr-8 ${openIndex === index ? 'text-dark' : 'text-dark/80'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 text-acid transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? <Minus /> : <Plus />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-dark/70 leading-relaxed border-t border-gray-200 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={openContactModal}>
             Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};