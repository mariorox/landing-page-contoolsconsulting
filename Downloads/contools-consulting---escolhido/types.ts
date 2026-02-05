export interface ServiceItem {
  id: number;
  title: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ClientItem {
  name: string;
  logoText: string;
  logoImage?: string;
}

export interface NavLink {
  label: string;
  href: string;
}