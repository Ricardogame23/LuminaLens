
import React from 'react';
import { InstagramIcon, FacebookIcon, TwitterIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
            <FacebookIcon className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
            <TwitterIcon className="w-6 h-6" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} LuminaLens. Todos os direitos reservados.</p>
        <p className="text-sm mt-1">Criando memórias visuais que duram uma vida inteira.</p>
      </div>
    </footer>
  );
};

export default Footer;
