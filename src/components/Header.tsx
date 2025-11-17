import React, { useState, useEffect } from 'react';
import { CameraIcon } from './IconComponents';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'Sobre' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#services', label: 'Serviços' },
    { href: '#ideas', label: 'Ideias' },
    { href: '#contact', label: 'Contato' },
  ];

  const linkClasses = "px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 text-2xl font-bold text-white">
          <CameraIcon className="w-8 h-8 text-cyan-400" />
          <span>LuminaLens</span>
        </a>
        <nav className="hidden md:flex items-center">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className={linkClasses}>{link.label}</a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-sm">
          <nav className="flex flex-col items-center py-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className={`${linkClasses} w-full text-center`}>{link.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
