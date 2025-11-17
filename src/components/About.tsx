import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sobre a LuminaLens</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Na LuminaLens, acreditamos que cada imagem conta uma história. Somos uma equipe de fotógrafos apaixonados dedicados a capturar a beleza, a emoção e a autenticidade de cada momento. Com um olhar artístico e atenção meticulosa aos detalhes, transformamos ocasiões especiais em memórias atemporais. Seja um casamento, um retrato de família ou um evento corporativo, nossa missão é entregar fotografias que você irá valorizar para sempre.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
