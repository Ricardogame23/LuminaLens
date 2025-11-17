
import React from 'react';
import type { ServiceType } from '../types';
import { WeddingIcon, PortraitIcon, EventIcon } from './IconComponents';

const services: ServiceType[] = [
  {
    title: 'Fotografia de Casamento',
    description: 'Cobertura completa do seu dia especial, desde a preparação até a festa, com um estilo documental e artístico para capturar cada emoção.',
    price: 'A partir de R$ 3.500',
    icon: WeddingIcon,
  },
  {
    title: 'Sessões de Retrato',
    description: 'Retratos individuais, de família, ou corporativos. Criamos imagens que revelam a personalidade e a essência de cada pessoa.',
    price: 'A partir de R$ 800',
    icon: PortraitIcon,
  },
  {
    title: 'Cobertura de Eventos',
    description: 'Fotografia profissional para eventos corporativos, festas e conferências. Garantimos a captura dos momentos mais importantes.',
    price: 'A partir de R$ 1.200',
    icon: EventIcon,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossos Serviços</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-6 flex justify-center">
                <div className="bg-gray-800 rounded-full p-4">
                   <service.icon className="w-12 h-12 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
              <p className="text-cyan-400 font-semibold">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
