
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2')` }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          LuminaLens
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          Capturando os Momentos que Contam a Sua História
        </p>
        <a 
          href="#portfolio" 
          className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Veja nosso trabalho
        </a>
      </div>
    </section>
  );
};

export default Hero;
