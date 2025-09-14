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

  const syllabus = [
    {
      unit: 'UT1',
      title: 'Análisis Exploratorio de Datos (EDA)',
      topics: [
        'Carga y exploración de datasets (CSV, JSON, SQLite)',
        'Técnicas básicas de EDA con pandas',
        'Visualizaciones informativas (matplotlib/seaborn)',
        'Documentación con MkDocs y mejores prácticas',
        'Interpretación de resultados de análisis',
        'Configuración de entornos colaborativos con GitHub'
      ],
      duration: '2 semanas'
    },
    {
      unit: 'UT2',
      title: 'Limpieza y Calidad de Datos',
      topics: [
        'Distinción entre MCAR, MAR y MNAR en datasets reales',
        'Detección de patrones de missing data y outliers',
        'Estrategias de imputación según el contexto',
        'Pipelines de limpieza reproducibles',
        'Prevención de data leakage con validación cruzada',
        'Identificación y mitigación de sesgo en datasets históricos',
        'Evaluación de fairness con métricas estándar',
        'Documentación de decisiones éticas en tratamiento de datos'
      ],
      duration: '3 semanas'
    },
    {
      unit: 'UT3',
      title: 'Almacenamiento y Gestión de Datos',
      topics: [
        'Data warehouses y data lakes',
        'Bases de datos NoSQL',
        'Estrategias de particionamiento',
        'Optimización de consultas'
      ],
      duration: '3 semanas'
    },
    {
      unit: 'UT4',
      title: 'Visualización y Análisis Avanzado',
      topics: [
        'Dashboards interactivos',
        'Machine Learning en producción',
        'Monitoreo y observabilidad',
        'Arquitecturas de ML'
      ],
      duration: '2 semanas'
    }
  ];

  return (
    <section id="course" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Curso</span> de Ingeniería de Datos
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
                    Ingeniería de Datos Avanzada
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Curso especializado en el diseño, implementación y mantenimiento de sistemas de datos a gran escala
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">Objetivos del Curso</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                        <span className="text-gray-700">Dominar las arquitecturas modernas de datos</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                        <span className="text-gray-700">Implementar pipelines de datos robustos</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                        <span className="text-gray-700">Aplicar mejores prácticas de ingeniería</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">Metodología</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2"></div>
                        <span className="text-gray-700">Clases teóricas y prácticas</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2"></div>
                        <span className="text-gray-700">Proyectos hands-on</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2"></div>
                        <span className="text-gray-700">Casos de estudio reales</span>
                      </li>
                    </ul>
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
                    <span className="text-4xl font-bold text-white">DR</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Dr. Data Rodriguez</h3>
                  <p className="text-xl text-primary-600 font-medium">Profesor de Ingeniería de Datos</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">Experiencia Profesional</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                        <span>15+ años en ingeniería de datos y Big Data</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                        <span>Ex-Google, ex-Microsoft, actualmente en startup unicornio</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                        <span>Autor de 3 libros sobre arquitecturas de datos</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-900">Especialidades</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Apache Spark', 'Kafka', 'Kubernetes', 'Python', 'Scala', 'AWS', 'GCP', 'Machine Learning'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Filosofía de Enseñanza</h4>
                  <p className="text-gray-700 leading-relaxed">
                    "Creo en el aprendizaje hands-on y en la aplicación práctica de conceptos teóricos. 
                    Mi objetivo es preparar a los estudiantes para enfrentar los desafíos reales de la 
                    industria, no solo para aprobar exámenes. La ingeniería de datos es un campo en 
                    constante evolución, y mi enfoque es enseñar los fundamentos sólidos que perdurarán 
                    independientemente de las tecnologías específicas."
                  </p>
                </div>
              </div>
            )}

            {activeSection === 'syllabus' && (
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
                  Programa del Curso
                </h3>
                
                <div className="space-y-6">
                  {syllabus.map((unit, index) => (
                    <div key={unit.unit} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                            {unit.unit}
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-900">{unit.title}</h4>
                            <p className="text-primary-600 font-medium">{unit.duration}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Temas Principales:</h5>
                          <ul className="space-y-1">
                            {unit.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-start space-x-2 text-gray-700">
                                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2"></div>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 mb-2">Actividades:</h5>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Laboratorios prácticos</li>
                            <li>• Proyecto individual</li>
                            <li>• Casos de estudio</li>
                            <li>• Evaluación técnica</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
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
