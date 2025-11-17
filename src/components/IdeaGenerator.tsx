import React, { useState } from 'react';
import { generatePhotoshootIdea } from '../services/geminiService';
import { LightBulbIcon } from './IconComponents';

const IdeaGenerator: React.FC = () => {
  const [theme, setTheme] = useState('');
  const [idea, setIdea] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!theme.trim()) {
      setError("Por favor, insira um tema.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setIdea('');

    const generatedIdea = await generatePhotoshootIdea(theme);
    
    if (generatedIdea.startsWith('An error occurred')) {
        setError(generatedIdea);
    } else {
        setIdea(generatedIdea);
    }
    
    setIsLoading(false);
  };

  return (
    <section id="ideas" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <LightBulbIcon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Gerador de Ideias Criativas</h2>
          <p className="text-gray-400 mb-8">
            Sem inspiração? Digite um tema e deixe nossa IA criar um conceito de ensaio fotográfico único para você.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={theme}
              onChange={(e) => {
                setTheme(e.target.value)
                setError(null)
              }}
              placeholder="Ex: 'Romance vintage', 'Exploração urbana'"
              className="flex-grow bg-gray-800 text-white border-2 border-gray-700 rounded-full py-3 px-6 focus:outline-none focus:border-cyan-500 transition-colors duration-300"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? 'Gerando...' : 'Gerar Ideia'}
            </button>
          </form>

          {error && <p className="text-red-400 mt-4">{error}</p>}
          
          {isLoading && (
            <div className="mt-8 flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
            </div>
          )}

          {idea && (
            <div className="mt-8 p-6 bg-gray-800 rounded-lg text-left border border-gray-700 animate-fade-in">
              <h4 className="font-bold text-lg text-cyan-400 mb-2">Seu Conceito Criativo:</h4>
              <p className="text-gray-300 leading-relaxed">{idea}</p>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default IdeaGenerator;
