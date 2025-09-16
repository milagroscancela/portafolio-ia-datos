'use client';

import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('bio');

  const tabs = [
    { id: 'bio', label: 'Biografía' },
    { id: 'education', label: 'Formación' },
    { id: 'achievements', label: 'Logros' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/milagroscancela',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/milagros-cancela-cano-56035331b/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
      {
        name: 'Email',
        href: 'mailto:milagros.cancela@correo.ucu.edu.uy',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
      },
  ];

  return (
    <section id="about" className="py-20 gradient-bg dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-violet-600 dark:text-violet-400 mb-4 transform hover:scale-105 transition-all duration-300">
              Sobre <span className="text-violet-600 dark:text-violet-400 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent animate-pulse">mí</span>
            </h2>
            <p className="text-xl text-gray-800 dark:text-white max-w-2xl mx-auto">
              Estudiante de ingeniería en IA y Ciencia de Datos apasionada por la transformación de datos en insights valiosos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="gradient-border rounded-2xl p-1">
                <div className="bg-white rounded-xl p-8 text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                    <img 
                      src="/foto_linkedin.png" 
                      alt="Milagros Cancela" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Milagros Cancela</h3>
                  <p className="text-primary-600 font-medium">Estudiante de Ingeniería en IA y Ciencia de Datos</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`tab-button ${
                      activeTab === tab.id ? 'selected' : ''
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                {activeTab === 'bio' && (
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                    Actualmente estoy cursando mi segundo año en la carrera de Ingeniería en Inteligencia Artificial y Ciencia de Datos. 
                    Soy una persona exigente y autocrítica; fanática de la lectura. Me gusta trabajar con datos y, en un futuro, me gustaría 
                    poder entrenar y crear modelos de IA. Espero poder sacarle el mayor jugo posible a este curso y aprender a preparar, 
                    tratar y representar datos de una manera excelente.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    Asimismo, soy una estudiante entusiasta y comprometida con fuerte vocación por la ciencia, la tecnología y el impacto social.
                    Busco aplicar mis conocimientos en contextos reales, colaborar en proyectos significativos y seguir creciendo
                    profesionalmente en las áreas de datos, inteligencia artificial o ciberseguridad, en entornos remotos o globales.
                    </p>
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary-500 pl-4">
                      <h4 className="font-bold text-gray-900">Ingeniería en Inteligencia Artificial y Ciencia de Datos</h4>
                      <p className="text-gray-600">Universidad Católica del Uruguay - 03/2024 ~ Actualidad</p>
                      <p className="text-sm text-gray-700 dark:text-white">Especialización en IA</p>
                    </div>
                    <div className="border-l-4 border-secondary-500 pl-4">
                      <h4 className="font-bold text-gray-900">Certificación en Ciberseguridad de Google </h4>
                      <p className="text-gray-600">Coursera - 2025 ~ (En curso)</p>
                    </div>
                    <div className="border-l-4 border-accent-500 pl-4">
                      <h4 className="font-bold text-gray-900">Programación en Python</h4>
                      <p className="text-gray-600">Udemy - 2024</p>
                    </div>
                  </div>
                )}

                {activeTab === 'achievements' && (
                  <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h4 className="font-bold text-gray-900">Becaria (80%) por mérito académico al ganar el Desafío Ada Byron</h4>
                    <p className="text-gray-600">Universidad Católica del Uruguay - 12/2023</p>
                    <p className="text-sm text-gray-500">Proyecto de drones detectores de plomo en el aire mediante sensores químicos de precisión.
                         (Proyecto seleccionado por su innovación y potencial impacto social).</p>
                  </div>
                  <div className="border-l-4 border-secondary-500 pl-4">
                    <h4 className="font-bold text-gray-900">Antel Tech Challenge 2025 </h4>
                    <p className="text-gray-600">Desarrollamos una herramienta de inteligencia artificial que permite realizar consultas en lenguaje natural
                         sobre datos de ANCAP, generando visualizaciones que facilitan la toma de decisiones de manera clara y ágil.</p>
                  </div>
                  </div>
                )}
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
                  >
                    {link.icon}
                    <span className="font-medium text-gray-700">{link.name}</span>
                  </a>
                ))}
                <a
                  href="/cv.pdf"
                  download="Milagros_Cancela_CV.pdf"
                  className="btn-primary flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Descargar CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
