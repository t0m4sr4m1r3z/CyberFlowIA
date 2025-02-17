import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="inicio" className="relative bg-cyber-900 pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5"
          style={{ transform: 'scale(1.1)' }}
        ></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-float">
          Transformamos negocios con IA:
          <span className="block gradient-text mt-2">Automatización, Chatbots y Soluciones Digitales</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Potencia tu empresa con soluciones de inteligencia artificial diseñadas para impulsar tu crecimiento y eficiencia.
        </p>
        <div className="mt-10">
          <a
            href="https://calendly.com/cyberflowia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-neon-purple text-base font-medium rounded-md text-white bg-cyber-800 hover:bg-neon-purple hover:text-cyber-900 transition-all duration-300 group"
          >
            Solicitar una consulta gratuita
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}