
import React, { useState, useMemo } from 'react';
import type { ImageType } from '../types';
import ImageModal from './ImageModal';

const images: ImageType[] = [
  { id: 1, src: 'https://picsum.photos/800/600?random=1', alt: 'Casamento na praia', category: 'Casamentos' },
  { id: 2, src: 'https://picsum.photos/800/600?random=2', alt: 'Retrato corporativo', category: 'Retratos' },
  { id: 3, src: 'https://picsum.photos/800/600?random=3', alt: 'Conferência de tecnologia', category: 'Eventos' },
  { id: 4, src: 'https://picsum.photos/800/600?random=4', alt: 'Família no parque', category: 'Retratos' },
  { id: 5, src: 'https://picsum.photos/800/600?random=5', alt: 'Noivos ao pôr do sol', category: 'Casamentos' },
  { id: 6, src: 'https://picsum.photos/800/600?random=6', alt: 'Lançamento de produto', category: 'Eventos' },
  { id: 7, src: 'https://picsum.photos/800/600?random=7', alt: 'Retrato de artista', category: 'Retratos' },
  { id: 8, src: 'https://picsum.photos/800/600?random=8', alt: 'Decoração de casamento', category: 'Casamentos' },
  { id: 9, src: 'https://picsum.photos/800/600?random=9', alt: 'Festa de aniversário', category: 'Eventos' },
];

const categories = ['Todos', 'Casamentos', 'Retratos', 'Eventos'];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const filteredImages = useMemo(() => {
    if (activeFilter === 'Todos') {
      return images;
    }
    return images.filter(image => image.category === activeFilter);
  }, [activeFilter]);

  const openModal = (image: ImageType) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nosso Portfólio</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
        </div>
        
        <div className="flex justify-center mb-12 space-x-2 md:space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${activeFilter === category ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map(image => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => openModal(image)}>
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-end p-4">
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <h3 className="text-white text-lg font-bold">{image.alt}</h3>
                  <p className="text-cyan-300 text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </section>
  );
};

export default Portfolio;
