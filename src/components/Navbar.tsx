import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLink {
  title: string;
  href: string;
}

const navLinks: NavLink[] = [
  { title: 'About', href: '/about' },
  { title: 'Services', href: '/services' },
  { title: 'Reviews', href: '/reviews' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Only try to detect sections if we're on the homepage
      if (location.pathname === '/') {
        // Find which section is currently in view
        const sections = ['hero', 'about', 'services', 'reviews', 'quote'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (!element) return false;
          
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        });
        
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'glass-nav py-2' : 'bg-black/30 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="/" 
            className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
              isScrolled || location.pathname !== '/' ? 'text-primary' : 'text-white hover:text-gray-200'
            }`}
          >
            Auckland Building
          </Link>
          
          <div className="flex items-center space-x-1 md:space-x-4">
            <div className="hidden md:flex space-x-1 md:space-x-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                const isNonHomePage = location.pathname !== '/';
                
                return (
                  <Link
                    key={link.title}
                    to={link.href}
                    className={`nav-link ${isNonHomePage || isScrolled ? 'text-gray-800 hover:text-brand-blue' : 'text-white hover:text-gray-200'} ${isActive ? 'active' : ''}`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
            
            <Link 
              to="/quote"
              className={`btn-primary text-sm ${isScrolled ? 'py-2 px-4' : 'py-2.5 px-5'} ml-3`}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
