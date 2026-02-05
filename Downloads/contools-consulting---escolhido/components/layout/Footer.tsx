import React from 'react';
import { CONTACT_INFO } from '../../constants';
import { Linkedin, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white text-dark pt-24 pb-12 px-6 border-t border-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
             <h2 className="text-acid font-bold tracking-widest uppercase mb-6 text-sm bg-dark inline-block px-1 rounded-sm">Contact Us</h2>
             <h3 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
               WE'LL BE GLAD<br />TO WORK<br /> WITH YOU.
             </h3>
          </div>

          <div className="flex flex-col justify-end space-y-8">
            <div className="grid gap-6">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center justify-between p-6 border border-gray-300 rounded-lg hover:border-acid hover:text-acid transition-colors group">
                 <span className="text-xl">{CONTACT_INFO.phone}</span>
                 <ArrowUpRight className="opacity-50 group-hover:opacity-100" />
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center justify-between p-6 border border-gray-300 rounded-lg hover:border-acid hover:text-acid transition-colors group break-all">
                 <span className="text-lg md:text-xl">{CONTACT_INFO.email}</span>
                 <ArrowUpRight className="opacity-50 group-hover:opacity-100" />
              </a>
               <a href={`https://${CONTACT_INFO.website}`} target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 border border-gray-300 rounded-lg hover:border-acid hover:text-acid transition-colors group">
                 <span className="text-xl">{CONTACT_INFO.website}</span>
                 <ArrowUpRight className="opacity-50 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/company/contoolsconsulting/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-acid hover:text-dark transition-colors"><Linkedin size={20} /></a>
            <a href="https://www.instagram.com/contoolsconsulting/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-acid hover:text-dark transition-colors"><Instagram size={20} /></a>
            <a href="https://www.facebook.com/contoolsbrasil" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-acid hover:text-dark transition-colors"><Facebook size={20} /></a>
            <a href="https://api.whatsapp.com/send/?phone=5511976074635" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-acid hover:text-dark transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>

          <div className="text-dark/50 text-sm flex gap-6">
            <span>© {new Date().getFullYear()} Contools Consulting.</span>
            <a href="#" className="hover:text-dark transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};