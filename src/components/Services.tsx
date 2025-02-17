import React from 'react';
import { Globe, Smartphone, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: Globe,
    title: 'Desarrollo de Páginas Web con IA',
    description: 'Creamos sitios web inteligentes y optimizados que se adaptan a las necesidades de tus usuarios y mejoran la conversión.',
  },
  {
    icon: Smartphone,
    title: 'Aplicaciones Móviles Inteligentes',
    description: 'Desarrollamos apps con machine learning integrado para ofrecer experiencias personalizadas y automatizadas.',
  },
  {
    icon: MessageSquare,
    title: 'Chatbots y Automatización',
    description: 'Implementamos asistentes virtuales inteligentes que mejoran la atención al cliente y automatizan procesos.',
  },
];

export default function Services() {
  const navigate = useNavigate();

  const handleServiceClick = (index: number) => {
    // Scroll to contact section when clicking "Descubre más"
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 bg-cyber-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-text mb-4">Nuestros Servicios</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluciones tecnológicas avanzadas para impulsar tu negocio al siguiente nivel
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-6 bg-cyber-700 rounded-lg card-hover neon-border cursor-pointer"
              onClick={() => handleServiceClick(index)}
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="w-20 h-20 bg-gradient-to-br from-neon-purple to-neon-blue rounded-full flex items-center justify-center animate-glow">
                  <service.icon className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <button 
                  className="text-neon-blue hover:text-neon-purple font-medium transition-colors duration-300 group inline-flex items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick(index);
                  }}
                >
                  Descubre más →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}