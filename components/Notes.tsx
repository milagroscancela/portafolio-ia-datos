'use client';

import { useState } from 'react';

const Notes = () => {
  const [activeCategory, setActiveCategory] = useState('slides');

  const categories = [
    { id: 'slides', label: 'Diapositivas', icon: '📊' },
    { id: 'personal', label: 'Apuntes Personales', icon: '📝' },
    { id: 'readings', label: 'Lecturas', icon: '📚' },
    { id: 'resources', label: 'Recursos', icon: '🔗' },
  ];

  const notesData = {
    slides: [],
    personal: [],
    readings: [
      {
        title: 'UT1: EDA & Fuentes',
        description: 'Lecturas para la Unidad 1',
        type: 'PDF',
        content: {
          objectives: [
            'Cargar y explorar datasets de diferentes formatos (CSV, JSON, SQLite)',
            'Aplicar técnicas básicas de EDA con pandas',
            'Crear visualizaciones informativas con matplotlib/seaborn',
            'Documentar hallazgos usando MkDocs (para portafolio) y mejores prácticas',
            'Interpretar resultados de análisis exploratorio',
            'Configurar entornos de desarrollo colaborativo con GitHub'
          ],
          minimalReadings: [
            {
              title: 'Brust, A. V. (2023). Ciencia de Datos para Gente Sociable – Capítulos 1–4',
              url: 'https://bitsandbricks.github.io/ciencia_de_datos_gente_sociable/',
              evaluation: 'Evaluación el 20/08'
            },
            {
              title: 'Google Good Data Analysis (Introducción y Mindset; Technical)',
              url: 'https://developers.google.com/machine-learning/guides/good-data-analysis',
              evaluation: 'Evaluación el 20/08'
            }
          ],
          totalReadings: [
            {
              title: 'Pandas Documentation',
              url: 'https://pandas.pydata.org/docs/'
            },
            {
              title: 'Kaggle Pandas – Creating, Reading and Writing; Indexing, Selecting & Assigning; Summary Functions and Maps; Grouping and Sorting',
              url: 'https://www.kaggle.com/learn/pandas'
            },
            {
              title: 'Matplotlib Documentation',
              url: 'https://matplotlib.org/stable/contents.html'
            },
            {
              title: 'Seaborn Documentation',
              url: 'https://seaborn.pydata.org/'
            },
            {
              title: 'MkDocs Documentation',
              url: 'https://www.mkdocs.org/'
            },
            {
              title: 'Mini curso Pandas',
              url: 'https://www.kaggle.com/learn/pandas'
            },
            {
              title: 'Mini curso Data Visualization',
              url: 'https://www.kaggle.com/learn/data-visualization'
            }
          ]
        }
      },
      {
        title: 'UT2: Calidad & Ética',
        description: 'Lecturas para la Unidad 2',
        type: 'PDF',
        content: {
          objectives: [
            'Distinguir entre MCAR, MAR y MNAR en datasets reales',
            'Detectar patrones de missing data y outliers',
            'Aplicar estrategias de imputación apropiadas según el contexto',
            'Implementar pipelines de limpieza reproducibles',
            'Prevenir data leakage usando validación cruzada apropiada',
            'Identificar y mitigar sesgo en datasets históricos',
            'Evaluar fairness usando métricas estándar',
            'Documentar decisiones éticas en el tratamiento de datos'
          ],
          minimalReadings: [
            {
              title: 'Zheng, A., & Casari, A. (2018). Feature Engineering for Machine Learning O\'Reilly Media',
              description: 'Cap. 1 (ML Pipeline), Cap. 2 (Fancy Tricks with Simple Numbers), Cap. 4 (Effects of Feature Scaling)',
              evaluation: 'Evaluación el 03/09',
              file: 'feature_engineering_for_machine_learning.pdf',
              size: '17.2 MB'
            },
            {
              title: 'Kaggle Data Cleaning',
              url: 'https://www.kaggle.com/learn/data-cleaning',
              evaluation: 'Evaluación el 03/09'
            },
            {
              title: 'Kaggle Intermediate ML – Data Leakage',
              url: 'https://www.kaggle.com/code/alexisbcook/data-leakage',
              evaluation: 'Evaluación el 03/09'
            },
            {
              title: 'Kaggle Intro to AI Ethics – Identifying Bias in AI; AI Fairness',
              url: 'https://www.kaggle.com/learn/intro-to-ai-ethics',
              evaluation: 'Evaluación el 03/09'
            }
          ],
          totalReadings: [
            {
              title: 'Google ML Fairness',
              url: 'https://developers.google.com/machine-learning/crash-course/fairness'
            },
            {
              title: 'Fairlearn Documentation',
              url: 'https://fairlearn.org/'
            },
            {
              title: 'Pandas Missing Data Documentation',
              url: 'https://pandas.pydata.org/docs/user_guide/missing_data.html'
            }
          ]
        }
      }
    ],
    resources: [
      {
        title: 'Documentación de Pandas',
        description: 'Documentación oficial de Pandas',
        url: 'https://pandas.pydata.org/docs/',
        type: 'Website'
      },
      {
        title: 'Kaggle',
        description: 'Plataforma de aprendizaje y competencias de data science',
        url: 'https://www.kaggle.com/',
        type: 'Website'
      },
      {
        title: 'GitHub Pages',
        description: 'Documentación de GitHub Pages para MkDocs',
        url: 'https://pages.github.com/',
        type: 'Website'
      },
      {
        title: 'MkDocs',
        description: 'Documentación de MkDocs para crear sitios estáticos',
        url: 'https://www.mkdocs.org/',
        type: 'Website'
      }
    ]
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return '📄';
      case 'Markdown':
        return '📝';
      case 'Draw.io':
        return '🎨';
      case 'Website':
        return '🌐';
      case 'GitHub':
        return '🐙';
      default:
        return '📁';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PDF':
        return 'bg-red-100 text-red-700';
      case 'Markdown':
        return 'bg-blue-100 text-blue-700';
      case 'Draw.io':
        return 'bg-purple-100 text-purple-700';
      case 'Website':
        return 'bg-green-100 text-green-700';
      case 'GitHub':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="notes" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Apuntes</span> del Curso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recopilación organizada de todos los materiales y recursos del curso
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`tab-button flex items-center space-x-2 ${
                  activeCategory === category.id ? 'selected' : ''
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid gap-6">
              {notesData[activeCategory as keyof typeof notesData].length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sin contenido disponible</h3>
                  <p className="text-gray-600">Esta sección estará disponible próximamente</p>
                </div>
              ) : (
                notesData[activeCategory as keyof typeof notesData].map((item, index) => (
                <div key={index}>
                  {activeCategory === 'readings' && 'content' in item ? (
                    // Special rendering for readings with detailed content
                    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-lg">{item.description}</p>
                      </div>

                      {/* Objectives */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Objetivos de Aprendizaje:</h4>
                        <ul className="space-y-2">
                          {item.content.objectives.map((objective, objIndex) => (
                            <li key={objIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                              <span className="text-gray-700">{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Minimal Readings */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Lecturas Mínimas:</h4>
                        <div className="space-y-3">
                          {item.content.minimalReadings.map((reading, readIndex) => (
                            <div key={readIndex} className="bg-white rounded-lg p-4 shadow-sm">
                              <h5 className="font-semibold text-gray-900 mb-1">{reading.title}</h5>
                              {reading.description && (
                                <p className="text-sm text-gray-600 mb-2">{reading.description}</p>
                              )}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  {reading.file ? (
                                    <a
                                      href={`/files/${reading.file}`}
                                      download
                                      className="btn-primary flex items-center space-x-1 text-xs px-3 py-1"
                                    >
                                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                      </svg>
                                      <span>Descargar</span>
                                    </a>
                                  ) : reading.url ? (
                                    <a
                                      href={reading.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-primary-600 hover:text-primary-800 text-sm"
                                    >
                                      Ver enlace
                                    </a>
                                  ) : null}
                                  {reading.size && (
                                    <span className="text-xs text-gray-500">{reading.size}</span>
                                  )}
                                </div>
                                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                                  {reading.evaluation}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Total Readings */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Lecturas Totales:</h4>
                        <div className="space-y-2">
                          {item.content.totalReadings.map((reading, readIndex) => (
                            <div key={readIndex} className="bg-white rounded-lg p-3 shadow-sm">
                              <div className="flex items-center justify-between">
                                <h5 className="font-medium text-gray-900">{reading.title}</h5>
                                <a
                                  href={reading.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary-600 hover:text-primary-800 text-sm"
                                >
                                  Ver enlace
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Standard rendering for other categories
                    <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 card-hover">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="text-3xl">
                      {getFileIcon(item.type)}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {item.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                          {item.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {'file' in item ? (
                      <a
                        href={`/files/${item.file}`}
                        download
                        className="btn-primary flex items-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Descargar</span>
                      </a>
                        ) : 'url' in item ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex items-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span>Visitar</span>
                      </a>
                        ) : null}
                  </div>
                </div>
                  )}
                </div>
                ))
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Notes;

