import React from 'react';
import { Brain } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-cyber-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-neon-purple to-neon-blue rounded-full flex items-center justify-center animate-pulse">
            <Brain className="h-12 w-12 text-white animate-glow" />
          </div>
          <div className="absolute -inset-4">
            <div className="w-32 h-32 rounded-full bg-neon-purple opacity-20 animate-ping"></div>
          </div>
        </div>
        <div className="mt-8 relative">
          <div className="h-2 w-48 bg-cyber-800 rounded-full overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-neon-purple via-neon-blue to-neon-pink animate-gradient"></div>
          </div>
          <p className="text-white mt-4 font-medium animate-pulse">Cargando...</p>
        </div>
      </div>
    </div>
  );
}