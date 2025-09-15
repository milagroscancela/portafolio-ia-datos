'use client';

import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import About from '../../components/About';
import Skills from '../../components/Skills';
import PreviousKnowledge from '../../components/PreviousKnowledge';
import Course from '../../components/Course';
import Notes from '../../components/Notes';
import Activities from '../../components/Activities';
import Portfolio from '../../components/Portfolio';
import Footer from '../../components/Footer';
// import CustomCursor from '../../components/CustomCursor';

export default function HomePage() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time for smooth animations
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen gradient-bg flex items-center justify-center">
  //       <div className="text-center">
  //         <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mx-auto mb-4"></div>
  //         <h2 className="text-2xl font-bold gradient-text">Cargando Portafolio...</h2>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen">
      {/* <CustomCursor /> */}
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 gradient-bg dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6 animate-fade-in">
              <span className="text-black dark:text-white">Portafolio de Milagros Cancela</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 mb-8 animate-slide-up">
              Explorando el mundo de los datos, transformando información en insights valiosos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <a
                href="#about"
                className="btn-primary text-lg px-8 py-4"
              >
                Conoce mi Historia
              </a>
              <a
                href="#portfolio"
                className="btn-secondary text-lg px-8 py-4"
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
      <Activities />
      <Footer />
    </div>
  );
}
