import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contacto" className="py-20 bg-cyber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold gradient-text mb-4">Contacto</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            ¿Listo para transformar tu negocio con IA? Contáctanos y descubre cómo podemos ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-cyber-800 p-8 rounded-lg neon-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nombre</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-cyber-700 border-neon-purple text-white focus:ring-neon-blue focus:border-neon-blue transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-cyber-700 border-neon-purple text-white focus:ring-neon-blue focus:border-neon-blue transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mensaje</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-cyber-700 border-neon-purple text-white focus:ring-neon-blue focus:border-neon-blue transition-colors duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 border border-transparent rounded-md bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium hover:from-neon-blue hover:to-neon-purple transition-all duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-400 text-center">¡Mensaje enviado con éxito!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center">Error al enviar el mensaje. Por favor, intenta nuevamente.</p>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-cyber-800 p-6 rounded-lg neon-border card-hover">
              <h3 className="text-xl font-semibold text-white mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:tomasdamianramirez13@gmail.com" 
                  className="flex items-center text-gray-300 hover:text-neon-blue transition-colors duration-300"
                >
                  <Mail className="h-6 w-6 text-neon-purple mr-3" />
                  <span>tomasdamianramirez13@gmail.com</span>
                </a>
                <a 
                  href="tel:+543777590250" 
                  className="flex items-center text-gray-300 hover:text-neon-blue transition-colors duration-300"
                >
                  <Phone className="h-6 w-6 text-neon-purple mr-3" />
                  <span>+543777590250</span>
                </a>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-6 w-6 text-neon-purple mr-3" />
                  <span>Argentina</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}