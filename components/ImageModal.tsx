
import React, { useEffect } from 'react';
import type { ImageType } from '../types';

interface ImageModalProps {
  image: ImageType;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative bg-gray-900 rounded-lg shadow-2xl max-w-4xl max-h-[90vh] w-full animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <img 
          src={image.src} 
          alt={image.alt} 
          className="w-full h-auto object-contain max-h-[calc(90vh-4rem)] rounded-t-lg" 
        />
        <div className="p-4 bg-gray-800 rounded-b-lg">
          <h3 className="text-white text-lg font-bold">{image.alt}</h3>
          <p className="text-cyan-400">{image.category}</p>
        </div>
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-cyan-500 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-cyan-400 transition-colors duration-300 shadow-lg"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ImageModal;
