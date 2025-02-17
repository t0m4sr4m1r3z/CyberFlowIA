import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Misión',
    description: 'Transformar empresas mediante soluciones de IA innovadoras que impulsen su crecimiento y eficiencia operativa.'
  },
  {
    icon: Lightbulb,
    title: 'Visión',
    description: 'Ser líderes globales en la implementación de soluciones de IA que revolucionen la forma en que las empresas operan y crecen.'
  },
  {
    icon: Users,
    title: 'Equipo',
    description: 'Un grupo diverso de expertos en IA, desarrollo y diseño, comprometidos con la excelencia y la innovación.'
  }
];

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-cyber-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold gradient-text mb-4">Sobre Nosotros</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            CyberFlow IA nació con la visión de democratizar la inteligencia artificial, haciéndola accesible y práctica para empresas de todos los tamaños.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-cyber-800 p-6 rounded-lg neon-border card-hover"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-neon-purple to-neon-blue rounded-full flex items-center justify-center animate-glow">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">{value.title}</h3>
              <p className="text-gray-400 text-center">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-cyber-800 rounded-lg p-8 neon-border">
            <h3 className="text-2xl font-bold text-white mb-6">Nuestra Historia</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                Desde 2023, CyberFlow IA ha estado a la vanguardia de la revolución de la IA, ayudando a empresas a adaptarse y prosperar en la era digital.
              </p>
              <p className="text-gray-300">
                Nuestro equipo de expertos combina años de experiencia en desarrollo de software, machine learning y diseño de experiencias de usuario para crear soluciones que no solo son tecnológicamente avanzadas, sino también intuitivas y efectivas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}