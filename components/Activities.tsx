'use client';

import React, { useState } from 'react';

const Activities = () => {
  const [activeTab, setActiveTab] = useState('individual');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [showNotebook, setShowNotebook] = useState(false);
  const [showVisualizations, setShowVisualizations] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const individualActivities = [
    {
      id: 'act_dos_iris',
      title: 'Actividad 2 - Análisis del Dataset Iris',
      description: 'Análisis completo del dataset clásico de Iris con visualizaciones avanzadas',
      date: '2024-09-07',
      notebook: 'dataset_iris.ipynb',
      visualizations: [
        'histogramas_kde_por_especie.png',
        'matriz_correlaciones.png',
        'missing.png',
        'pairplot_por_especie.png'
      ],
      report: 'reporte_iris.html',
      reflection: `Esta actividad individual fue fundamental para entender el flujo completo de un proyecto de análisis de datos.

**Aspectos técnicos:**
- Dominé el uso de pandas para manipulación de datos
- Aprendí a crear visualizaciones informativas con matplotlib y seaborn
- Comprendí la importancia de la documentación en proyectos de datos

**Resultados destacados:**
- Generé un reporte HTML completo con todas las visualizaciones
- Creé un diccionario de datos detallado
- Identifiqué patrones claros en la separación de especies

**Impacto en mi formación:**
Esta actividad me mostró la complejidad real de los proyectos de datos y la importancia del análisis sistemático.`
    },
    {
      id: 'act_tres_netflix',
      title: 'Actividad 3 - EDA Netflix',
      description: 'Análisis exploratorio del dataset de Netflix con dashboard interactivo',
      date: '2024-09-10',
      notebook: 'eda_netflix.ipynb',
      visualizations: ['netflix_dashboard.png'],
      report: 'reporte_netflix.html',
      reflection: `El análisis del dataset de Netflix fue una experiencia muy enriquecedora que me conectó con datos del mundo real.

**Desafíos del dataset real:**
- Manejo de datos faltantes en un dataset grande
- Limpieza de datos inconsistentes (fechas, categorías)
- Optimización de visualizaciones para datasets extensos

**Aprendizajes técnicos:**
- Uso avanzado de pandas para datasets grandes
- Creación de dashboards interactivos
- Técnicas de visualización para datos temporales

**Insights descubiertos:**
- Patrones estacionales en el contenido de Netflix
- Correlaciones entre géneros y popularidad
- Tendencias de crecimiento de la plataforma

**Aplicación profesional:**
Esta experiencia me preparó para trabajar con datasets reales y complejos, desarrollando la paciencia y metodología necesarias para el análisis de datos empresariales.`
    }
  ];

  const groupActivities = [
    {
      id: 'act_tres_grupal',
      title: 'Actividad 3 - EDA Netflix Grupal',
      description: 'Análisis exploratorio del dataset de Netflix con trabajo colaborativo',
      date: '2024-09-10',
      notebook: 'Practica03.ipynb',
      visualizations: ['PHOTO-2025-08-20-11-27-11.jpg'],
      report: 'reporte_netflix_grupal.html',
      reflection: `Esta actividad grupal fue una experiencia muy enriquecedora trabajando con datos del mundo real.

**Trabajo en equipo:**
- Aprendí a coordinar tareas entre múltiples personas
- Desarrollé habilidades de comunicación técnica
- Practiqué la revisión de código y documentación

**Desafíos del dataset real:**
- Manejo de datos faltantes en un dataset grande
- Limpieza de datos inconsistentes (fechas, categorías)
- Optimización de visualizaciones para datasets extensos

**Aprendizajes técnicos:**
- Uso avanzado de pandas para datasets grandes
- Creación de reportes HTML completos
- Técnicas de visualización para datos temporales

**Insights descubiertos:**
- Patrones estacionales en el contenido de Netflix
- Correlaciones entre géneros y popularidad
- Tendencias de crecimiento de la plataforma

**Impacto en mi formación:**
Esta actividad me mostró la importancia del trabajo colaborativo en proyectos de datos complejos.`
    },
    {
      id: 'act_cuatro_grupal',
      title: 'Actividad 4 - EDA Multi-fuentes y Joins',
      description: 'Análisis de múltiples fuentes de datos con operaciones de join',
      date: '2024-09-12',
      notebook: 'Practica_4_EDA_Multi_fuentes_y_Joins_Fill_in_the_Blanks.ipynb',
      visualizations: [],
      report: 'reporte_multi_fuentes.html',
      reflection: `Esta actividad grupal fue la más desafiante hasta ahora, trabajando con múltiples fuentes de datos.

**Complejidad del proyecto:**
- Integración de datos de diferentes fuentes
- Manejo de relaciones entre tablas
- Optimización de consultas con joins

**Habilidades desarrolladas:**
- SQL avanzado para operaciones de join
- Estrategias de limpieza de datos heterogéneos
- Documentación de procesos complejos

**Trabajo colaborativo:**
- División eficiente de tareas complejas
- Revisión cruzada de código
- Integración de diferentes enfoques de análisis

**Resultado final:**
Logramos crear un análisis coherente que integraba múltiples fuentes de datos, demostrando la importancia de la planificación en proyectos de datos complejos.`
    }
  ];

  const allActivities = [...individualActivities, ...groupActivities];

  const getActivityType = (activityId: string) => {
    return individualActivities.find(a => a.id === activityId) ? 'individual' : 'group';
  };

  const openReflection = (activity: any) => {
    setSelectedActivity(activity);
  };

  const closeReflection = () => {
    setSelectedActivity(null);
  };

  const openNotebook = (activity: any) => {
    setSelectedActivity(activity);
    setShowNotebook(true);
  };

  const closeNotebook = () => {
    setShowNotebook(false);
    setSelectedActivity(null);
  };

  const openVisualizations = (activity: any) => {
    setSelectedActivity(activity);
    setShowVisualizations(true);
  };

  const closeVisualizations = () => {
    setShowVisualizations(false);
    setSelectedActivity(null);
  };

  const openReport = (activity: any) => {
    setSelectedActivity(activity);
    setShowReport(true);
  };

  const closeReport = () => {
    setShowReport(false);
    setSelectedActivity(null);
  };

  return (
    <section id="activities" className="py-20 gradient-bg dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="gradient-text">Actividades</span> UT1
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Trabajos prácticos realizados durante la primera unidad del curso
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('individual')}
              className={`tab-button flex items-center space-x-2 ${
                activeTab === 'individual' ? 'selected' : ''
              }`}
            >
              <span className="text-xl">👤</span>
              <span>Individual</span>
            </button>
            <button
              onClick={() => setActiveTab('group')}
              className={`tab-button flex items-center space-x-2 ${
                activeTab === 'group' ? 'selected' : ''
              }`}
            >
              <span className="text-xl">👥</span>
              <span>Grupal</span>
            </button>
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === 'individual' ? individualActivities : groupActivities).map((activity) => (
              <div
                key={activity.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {activity.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="mr-4">📅 {activity.date}</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs">
                      {activity.notebook}
                    </span>
                  </div>
                </div>

                {/* Visualizations */}
                {activity.visualizations.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Visualizaciones:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {activity.visualizations.map((viz, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={`/activities/visualizations/${viz}`}
                            alt={`Visualización ${index + 1}`}
                            className="w-full h-20 object-cover rounded-lg border border-gray-200 dark:border-gray-600"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                              const img = e.currentTarget as HTMLImageElement;
                              img.style.display = 'none';
                              
                              const fallback = img.nextElementSibling as HTMLElement | null;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                          <div 
                            className="absolute inset-0 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 text-xs"
                            style={{ display: 'none' }}
                          >
                            Error al cargar
                          </div>
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => openReflection(activity)}
                    className="btn-secondary flex items-center justify-center space-x-1 text-sm px-3 py-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span>Reflexión</span>
                  </button>

                  <button
                    onClick={() => openNotebook(activity)}
                    className="btn-primary flex items-center justify-center space-x-1 text-sm px-3 py-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span>Ver Notebook</span>
                  </button>

                  {activity.visualizations.length > 0 && (
                    <button
                      onClick={() => openVisualizations(activity)}
                      className="btn-secondary flex items-center justify-center space-x-1 text-sm px-3 py-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>Visualizaciones</span>
                    </button>
                  )}

                  {activity.report && (
                    <button
                      onClick={() => openReport(activity)}
                      className="btn-secondary flex items-center justify-center space-x-1 text-sm px-3 py-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Reporte</span>
                    </button>
                  )}

                  <a
                    href={`/files/notebooks/${activity.notebook}`}
                    download
                    className="btn-primary flex items-center justify-center space-x-1 text-sm px-3 py-2 col-span-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Descargar Notebook</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reflection Modal */}
      {selectedActivity && !showNotebook && !showVisualizations && !showReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Reflexión - {selectedActivity.title}
                </h3>
                <button
                  onClick={closeReflection}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="prose max-w-none">
                <div className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedActivity.reflection}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notebook Modal */}
      {showNotebook && selectedActivity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Jupyter Notebook - {selectedActivity.title}
                </h3>
                <button
                  onClick={closeNotebook}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Notebook:</strong> {selectedActivity.notebook}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Descripción:</strong> {selectedActivity.description}
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="space-y-4">
                  {/* Header del notebook */}
                  <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 text-xs">Jupyter Notebook</span>
                  </div>
                  
                  {/* Contenido simulado del notebook */}
                  <div className="space-y-3">
                    <div className="bg-gray-800 rounded p-3">
                      <div className="text-blue-400 mb-2">In [1]:</div>
                      <div className="text-white">
                        <span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd<br/>
                        <span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt<br/>
                        <span className="text-purple-400">import</span> seaborn <span className="text-purple-400">as</span> sns
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 rounded p-3">
                      <div className="text-blue-400 mb-2">Out [1]:</div>
                      <div className="text-gray-300"># Celdas ejecutadas correctamente</div>
                    </div>
                    
                    <div className="bg-gray-800 rounded p-3">
                      <div className="text-blue-400 mb-2">In [2]:</div>
                      <div className="text-white">
                        <span className="text-gray-400"># Cargar datos</span><br/>
                        df = pd.read_csv(<span className="text-green-400">'data.csv'</span>)
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 rounded p-3">
                      <div className="text-blue-400 mb-2">Out [2]:</div>
                      <div className="text-gray-300">
                        <span className="text-green-400">Shape:</span> (150, 5)<br/>
                        <span className="text-green-400">Columns:</span> ['sepal_length', 'sepal_width', 'petal_length', 'petal_width', 'species']
                      </div>
                    </div>
                  </div>
                  
                  {/* Botón de descarga */}
                  <div className="text-center pt-4 border-t border-gray-700">
                    <a
                      href={`/files/notebooks/${selectedActivity.notebook}`}
                      download
                      className="btn-primary inline-flex items-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Descargar Notebook Completo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Visualizations Modal */}
      {showVisualizations && selectedActivity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Visualizaciones - {selectedActivity.title}
                </h3>
                <button
                  onClick={closeVisualizations}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedActivity.visualizations.map((viz, index) => (
                  <div key={index} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Visualización {index + 1}
                    </h4>
                    <div className="relative group">
                      <img
                        src={`/activities/visualizations/${viz}`}
                        alt={`Visualización ${index + 1}`}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-lg shadow-lg">
                          Ver en pantalla completa
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Report Modal */}
      {showReport && selectedActivity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Reporte - {selectedActivity.title}
                </h3>
                <button
                  onClick={closeReport}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Reporte:</strong> {selectedActivity.report}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Descripción:</strong> Reporte HTML generado con los resultados del análisis
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">📊</div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Reporte HTML</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    El reporte se mostraría aquí con todas las visualizaciones y análisis
                  </p>
                  <a
                    href={`/files/reports/${selectedActivity.report}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Abrir Reporte</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Activities;
