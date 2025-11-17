import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5 seconds
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Entre em Contato</h2>
          <p className="text-gray-400 mb-10">
            Tem um projeto em mente? Adoraríamos ouvir sobre ele. Preencha o formulário abaixo e entraremos em contato.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          {isSubmitted ? (
            <div className="text-center bg-green-900/50 border border-green-500 text-green-300 px-4 py-3 rounded-lg" role="alert">
              <strong className="font-bold">Obrigado! </strong>
              <span className="block sm:inline">Sua mensagem foi enviada com sucesso.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Nome</label>
                <input type="text" name="name" id="name" placeholder="Seu Nome" required value={formData.name} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-md border border-gray-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" placeholder="Seu Email" required value={formData.email} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-md border border-gray-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Mensagem</label>
                <textarea name="message" id="message" rows={5} placeholder="Sua Mensagem" required value={formData.message} onChange={handleChange} className="w-full bg-gray-700 text-white rounded-md border border-gray-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
