import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

export default function InitialLoadingScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}