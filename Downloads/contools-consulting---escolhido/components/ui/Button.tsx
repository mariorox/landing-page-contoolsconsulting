import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'link';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 group";
  
  const variants = {
    // Primary:
    // Light Mode: Acid BG -> Hover: Dark BG (Text White).
    primary: "bg-acid text-dark hover:bg-dark hover:text-white hover:scale-105 border border-transparent",

    // Outline: Dark Blue text/border
    outline: "border border-dark/30 text-dark hover:border-acid hover:text-acid bg-transparent",

    link: "text-dark hover:text-acid underline-offset-4 hover:underline px-0 py-2 justify-start",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      <span className="mr-2">{children}</span>
      {variant !== 'link' && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </button>
  );
};