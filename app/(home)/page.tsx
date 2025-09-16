'use client';

import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import About from '../../components/About';
import Skills from '../../components/Skills';
import PreviousKnowledge from '../../components/PreviousKnowledge';
import Course from '../../components/Course';
import Notes from '../../components/Notes';
import Portfolio from '../../components/Portfolio';
import Footer from '../../components/Footer';
import CustomCursor from '../../components/CustomCursor';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold gradient-text">Cargando Portafolio...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 gradient-bg dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-black text-violet-600 dark:text-violet-400 mb-6 animate-fade-in transform hover:scale-105 transition-all duration-300">
              <span className="text-violet-600 dark:text-violet-400 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent animate-pulse">Portafolio de Milagros Cancela</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-black mb-8 animate-slide-up transform hover:scale-105 transition-all duration-300">
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-black dark:to-gray-800 bg-clip-text text-transparent">Explorando el mundo de los datos, transformando información en insights valiosos</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <a
                href="#about"
                className="btn-primary text-xl font-bold px-10 py-5 transform hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-bounce"
              >
                Conoce mi Historia
              </a>
              <a
                href="#portfolio"
                className="btn-secondary text-xl font-bold px-10 py-5 transform hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-bounce"
              >
                Ver Proyectos
              </a>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <PreviousKnowledge />
      <Course />
      <Notes />
      <Portfolio />
      <Footer />
    </div>
  );
}
