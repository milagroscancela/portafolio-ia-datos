'use client';

import { useState } from 'react';

const Course = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Descripción' },
    { id: 'expectations', label: 'Expectativas' },
    { id: 'instructor', label: 'Docente' },
    { id: 'syllabus', label: 'Programa' },
  ];


  return (
    <section id="course" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-black dark:text-white">Curso</span> de Ingeniería de Datos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorando las mejores prácticas y tecnologías en el campo de la ingeniería de datos
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`tab-button ${
                  activeSection === section.id ? 'selected' : ''
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 shadow-lg">
            {activeSection === 'overview' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Ingeniería de Datos
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    El curso Ingeniería de datos se centra en los aspectos fundamentales para la preparación, tratamiento y representación de los datos; los cuales son esenciales en cualquier proyecto.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Objetivos del curso</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Espero ser capaz de dominar las técnicas de preparación y limpieza de datos para usarlos en modelos de IA.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'expectations' && (
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
                  Mis Expectativas del Curso
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h4 className="text-xl font-bold text-primary-600 mb-4">Aprendizaje Técnico</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Profundizar en arquitecturas de datos modernas</li>
                        <li>• Dominar herramientas como Apache Kafka, Spark</li>
                        <li>• Implementar soluciones cloud (AWS, GCP, Azure)</li>
                        <li>• Aplicar patrones de diseño en ingeniería de datos</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h4 className="text-xl font-bold text-secondary-600 mb-4">Desarrollo Profesional</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Mejorar habilidades de liderazgo técnico</li>
                        <li>• Aprender mejores prácticas de la industria</li>
                        <li>• Desarrollar pensamiento crítico en arquitecturas</li>
                        <li>• Prepararme para roles senior</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h4 className="text-xl font-bold text-accent-600 mb-4">Proyectos Prácticos</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Construir un pipeline completo end-to-end</li>
                        <li>• Implementar monitoreo y observabilidad</li>
                        <li>• Trabajar con datos reales de gran volumen</li>
                        <li>• Aplicar principios de DevOps en datos</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h4 className="text-xl font-bold text-primary-600 mb-4">Red y Colaboración</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Conectar con otros profesionales del área</li>
                        <li>• Participar en discusiones técnicas</li>
                        <li>• Compartir experiencias y casos de uso</li>
                        <li>• Construir un portafolio sólido</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'instructor' && (
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">JK</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Juan Francisco Kurucz</h3>
                  <p className="text-xl text-primary-600 font-medium">Docente del curso</p>
                </div>
              </div>
            )}

            {activeSection === 'syllabus' && (
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
                  Programa del Curso
                </h3>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-8 shadow-md">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Syllabus Oficial 2025</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Descarga el programa completo del curso con todos los detalles, cronograma y evaluaciones.
                    </p>
                    <a
                      href="/syl/Syllabus 2025.pdf"
                      download="Syllabus_Ingenieria_Datos_2025.pdf"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-fuchsia-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Descargar Syllabus PDF
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
