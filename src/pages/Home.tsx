import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Blog />
      <Contact />
    </main>
  );
}