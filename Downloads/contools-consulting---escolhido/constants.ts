import { ServiceItem, FAQItem, ClientItem } from './types';

export const SERVICES: ServiceItem[] = [
  { id: 1, title: "Legal representation of foreign companies" },
  { id: 2, title: "Legal representation for shareholders and board members" },
  { id: 3, title: "Local director for foreign companies" },
  { id: 4, title: "Tax address" },
  { id: 5, title: "Paralegal services" },
  { id: 6, title: "Liquidator and deactivation of CNPJ – National Registration of Legal Entities" },
  { id: 7, title: "Coworking" },
  { id: 8, title: "Consulting in Benefits/Insurance" },
  { id: 9, title: "Health plans" },
  { id: 10, title: "Banking correspondent" },
  { id: 11, title: "Customized remittances and exchange services, with agility and security" },
];

export const FAQS: FAQItem[] = [
  {
    question: "What are the requirements to open a company in Brazil?",
    answer: "Legal representative, CNPJ, fiscal address, business bank account, tax compliance."
  },
  {
    question: "What services does Contools offer?",
    answer: "Company formation, legal representation, tax & accounting, compliance, banking support."
  },
  {
    question: "Do I need a legal representative?",
    answer: "Yes, a Brazilian resident is required. Contools provides this service."
  },
  {
    question: "How long does company registration take?",
    answer: "Around 30-60 days, Contools speeds up the process."
  },
  {
    question: "Does Contools help with bank accounts?",
    answer: "Yes, we assist with documents, bank selection, and compliance."
  },
  {
    question: "How is foreign company taxation in Brazil?",
    answer: "Corporate tax 15-25%, other taxes vary by business type."
  }
];

export const CLIENTS: ClientItem[] = [
  { name: "Paramount", logoText: "PARAMOUNT", logoImage: "/images/clients/paramount.png" },
  { name: "MGM Resorts", logoText: "MGM RESORTS", logoImage: "/images/clients/mgm-resorts.png" },
  { name: "Versace", logoText: "VERSACE", logoImage: "/images/clients/versace.png" },
  { name: "ConAir", logoText: "CONAIR", logoImage: "/images/clients/conair.png" },
  { name: "Louboutin", logoText: "LOUBOUTIN", logoImage: "/images/clients/louboutin.png" },
  { name: "Sabis", logoText: "SABIS", logoImage: "/images/clients/sabis.png" },
  { name: "Grant Thornton", logoText: "GRANT THORNTON", logoImage: "/images/clients/Grant Thornton.png" },
  { name: "Global Tech", logoText: "GLOBAL TECH", logoImage: "/images/clients/global tech.png" },
];

export const CONTACT_INFO = {
  phone: "+55 11 2729-1936",
  email: "graciele.domingos@contools.com.br",
  instagram: "@contoolsconsulting",
  website: "contools.com.br",
};