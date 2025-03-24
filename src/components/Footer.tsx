import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Auckland Building</h3>
            <p className="text-primary-foreground/80">
              Professional building, renovation and repair services across the Auckland region.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-primary-foreground/80 mb-2">
              09 123 4567
            </p>
            <p className="text-primary-foreground/80 mb-2">
              info@aucklandbuilding.co.nz
            </p>
            <p className="text-primary-foreground/80">
              Auckland, New Zealand
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Areas We Serve</h3>
            <p className="text-primary-foreground/80">
              Auckland CBD, North Shore, West Auckland, East Auckland, South Auckland
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/70">
          <p>© {currentYear} Contact JXMStudio to finish website!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
