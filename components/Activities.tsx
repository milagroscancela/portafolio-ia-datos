'use client';

import React, { useState } from 'react';

const Activities = () => {
  const [activeTab, setActiveTab] = useState('individual');
  const [selectedActivity, setSelectedActivity] = useState<any>(null);
  const [showNotebook, setShowNotebook] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showVisualizations, setShowVisualizations] = useState(false);

  const individualActivities = [
    {
      id: 'act_dos_iris',
      title: '🌺 Explorando los Secretos del Iris: Un Viaje de Datos y Descubrimientos',
      description: 'Análisis completo del dataset clásico de Iris con visualizaciones avanzadas',
      date: '2024-09-07',
      notebook: 'dataset_iris.ipynb',
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
                  <p className="text-gray-800 dark:text-white mb-3">
                    {activity.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="mr-4">📅 {activity.date}</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs">
                      {activity.notebook}
                    </span>
                  </div>
                </div>


                {/* Actions */}
                <div className="grid grid-cols-2 gap-2">
                  {activity.id !== 'act_dos_iris' && (
                    <button
                      onClick={() => openReflection(activity)}
                      className="btn-secondary flex items-center justify-center space-x-1 text-sm px-3 py-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <span>Reflexión</span>
                    </button>
                  )}

                  <button
                    onClick={() => openNotebook(activity)}
                    className="btn-primary flex items-center justify-center space-x-1 text-sm px-3 py-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span>Ver Notebook</span>
                  </button>

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

                  {activity.report && activity.id !== 'act_dos_iris' && (
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
      {selectedActivity && !showNotebook && !showReport && (
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
                  {selectedActivity.title}
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
              
              {selectedActivity.id === 'act_dos_iris' ? (
                <div className="prose prose-lg max-w-none">
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-6">
                    <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-4">🌺 Explorando los Secretos del Iris: Un Viaje de Datos y Descubrimientos</h1>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                      <span className="flex items-center"><span className="mr-2">📅</span><strong>Duración estimada del proyecto:</strong> 1 hora</span>
                      <span className="flex items-center"><span className="mr-2">📂</span><strong>Notebook asociado:</strong> dataset_iris.ipynb</span>
                      <span className="flex items-center"><span className="mr-2">📍</span><strong>Ubicación en repo:</strong> /results/reportes/dataset_iris.ipynb</span>
                    </div>

                    <div className="bg-pink-100 dark:bg-pink-900/30 rounded-lg p-4">
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        <strong>Descargar notebook:</strong>
                      </p>
                      <a href="/files/notebooks/dataset_iris.ipynb" download className="inline-flex items-center px-3 py-1 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors text-sm">
                        <span className="mr-1">📥</span> Descargar dataset_iris.ipynb
                      </a>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <section>
                      <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
                        <span className="mr-2">📘</span> Introducción
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Este análisis forma parte del <strong>portafolio de Ingeniería de Datos</strong> y explora el famoso <strong>dataset Iris</strong>, utilizando herramientas de análisis estadístico, validación de datos y visualización.
                        El objetivo fue <strong>descubrir relaciones entre las medidas de sépalos y pétalos</strong> y desarrollar un flujo de trabajo reproducible, documentado y visualmente atractivo.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
                        <span className="mr-2">🧭</span> Proceso de Análisis
                      </h2>
                      
                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2">1️⃣ Validación y Diccionario de Datos</h3>
                          <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                            <li>• Se generó el archivo <strong>data_dictionary.csv</strong> con la descripción de cada variable.</li>
                            <li>• Se verificaron valores faltantes en <strong>missing.csv</strong>, <strong>missing_prop.csv</strong> y <strong>nulos.csv</strong>.</li>
                            <li>• El dataset resultó estar <strong>completo, sin nulos ni inconsistencias</strong>.</li>
                          </ul>
                          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            <strong>📊 Visualización:</strong> Análisis de Completitud de Datos – resumen de completitud del dataset.
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2">2️⃣ Estadísticas Descriptivas y Correlaciones</h3>
                          <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                            Se calcularon medidas básicas (describe.csv), covarianzas (cov.csv) y curtosis/asimetría (skew_kurt.csv).
                          </p>
                          <div className="text-sm text-gray-700 dark:text-gray-300">
                            <strong>🔍 Hallazgos principales:</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Alta correlación (0.86) entre largo y ancho de pétalos.</li>
                              <li>• Baja correlación (-0.12) entre largo y ancho de sépalos.</li>
                            </ul>
                          </div>
                          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            <strong>📈 Visualización:</strong> Matriz de Correlaciones – muestra las relaciones lineales entre variables.
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2">3️⃣ Distribución por Especie</h3>
                          <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                            Se generaron visualizaciones por especie: Histogramas con Curvas de Densidad y Comparación Multivariada.
                          </p>
                          <div className="text-sm text-gray-700 dark:text-gray-300">
                            <strong>📊 Conclusiones:</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Virginica tiene los sépalos más largos (6.59 cm promedio).</li>
                              <li>• Setosa presenta menor variabilidad.</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2">4️⃣ Respuestas de Negocio</h3>
                          <div className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
                            <div>
                              <strong>1. Relación entre variables:</strong>
                              <ul className="mt-1 space-y-1 ml-4">
                                <li>• Existe una <strong>correlación muy fuerte (0.86)</strong> entre el largo y ancho de los <strong>pétalos</strong>.</li>
                                <li>• Los <strong>sépalos</strong> presentan una <strong>correlación débil (-0.12)</strong>.</li>
                              </ul>
                            </div>
                            <div>
                              <strong>2. Comparación entre especies:</strong>
                              <ul className="mt-1 space-y-1 ml-4">
                                <li>• <strong>Virginica</strong> tiene los sépalos más largos (6.59 cm promedio).</li>
                                <li>• <strong>Versicolor</strong> ocupa posición intermedia (5.94 cm).</li>
                                <li>• <strong>Setosa</strong> posee los más cortos (5.01 cm).</li>
                              </ul>
                            </div>
                            <div>
                              <strong>3. Variabilidad intraespecífica:</strong>
                              <ul className="mt-1 space-y-1 ml-4">
                                <li>• La longitud de pétalos en <strong>Virginica</strong> muestra mayor dispersión (0.55 cm).</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
                        <span className="mr-2">🌟</span> Hallazgos Principales
                      </h2>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-pink-200 dark:border-pink-700">
                          <thead className="bg-pink-100 dark:bg-pink-900/30">
                            <tr>
                              <th className="border border-pink-200 dark:border-pink-700 px-4 py-2 text-left text-pink-700 dark:text-pink-300">Insight</th>
                              <th className="border border-pink-200 dark:border-pink-700 px-4 py-2 text-left text-pink-700 dark:text-pink-300">Evidencia</th>
                            </tr>
                          </thead>
                          <tbody className="text-sm">
                            <tr>
                              <td className="border border-pink-200 dark:border-pink-700 px-4 py-2">Correlación alta pétalos</td>
                              <td className="border border-pink-200 dark:border-pink-700 px-4 py-2">0.86</td>
                            </tr>
                            <tr>
                              <td className="border border-pink-200 dark:border-pink-700 px-4 py-2">Correlación baja sépalos</td>
                              <td className="border border-pink-200 dark:border-pink-700 px-4 py-2">-0.12</td>
                            </tr>
                            <tr>
                              <td className="border border-pink-200 dark:border-pink-700 px-4 py-2">Virginica tiene sépalos más largos</td>
                              <td className="border border-pink-200 dark:border-pink-700 px-4 py-2">Promedio: 6.59 cm</td>
                            </tr>
                            <tr>
                              <td className="border border-pink-200 dark:border-pink-700 px-4 py-2">Mayor variabilidad</td>
                              <td className="border border-pink-200 dark:border-pink-700 px-4 py-2">Pétalos en Virginica (0.55 cm)</td>
                            </tr>
                            <tr>
                              <td className="border border-pink-200 dark:border-pink-700 px-4 py-2">Dataset balanceado</td>
                              <td className="border border-pink-200 dark:border-pink-700 px-4 py-2">33.3% cada especie</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
                        <span className="mr-2">💭</span> Reflexión personal
                      </h2>
                      <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg p-6">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                          Este trabajo me permitió reafirmar la importancia de ir más allá del código y mirar los datos con una perspectiva crítica y analítica. Aunque el dataset Iris es un clásico en la ciencia de datos, volver a explorarlo desde cero me ayudó a fortalecer mi comprensión del <strong>proceso de análisis exploratorio</strong>: desde la limpieza y validación de datos hasta la interpretación visual y las conclusiones basadas en evidencia.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                          Lo que más valoro de este ejercicio fue entender cómo <strong>cada decisión técnica puede tener un sentido práctico o de negocio</strong>. Por ejemplo, descubrir que los pétalos son las variables más relevantes no solo es una conclusión estadística, sino también un recordatorio de que en los proyectos reales debemos saber <strong>qué información aporta más valor</strong> y <strong>cómo comunicarla de forma clara</strong>.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          En definitiva, este trabajo me ayudó a mejorar mi forma de <strong>documentar procesos, interpretar datos y presentar resultados</strong>, tres competencias clave en ingeniería de datos. Aunque fue una tarea breve, me dejó la sensación de que <strong>la calidad no depende del tamaño del dataset, sino del cuidado con el que se analiza y comunica</strong>.
                        </p>
                      </div>
                    </section>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <strong>Notebook:</strong> {selectedActivity.notebook}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Descripción:</strong> {selectedActivity.description}
                  </p>
                </div>
              )}
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
              
              {selectedActivity.id === 'act_dos_iris' ? (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-4">📊 Visualizaciones del Análisis Iris</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      A continuación se presentan todas las visualizaciones generadas durante el análisis exploratorio del dataset Iris.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Missing Data Visualization */}
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
                      <h5 className="font-semibold text-gray-800 dark:text-white mb-3">📈 Análisis de Datos Faltantes</h5>
                      <img 
                        src="/activities/visualizations/missing.png" 
                        alt="Análisis de datos faltantes"
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        Verificación de completitud del dataset - sin valores faltantes detectados.
                      </p>
                    </div>

                    {/* Correlation Matrix */}
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
                      <h5 className="font-semibold text-gray-800 dark:text-white mb-3">🔗 Matriz de Correlaciones</h5>
                      <img 
                        src="/activities/visualizations/matriz_correlaciones.png" 
                        alt="Matriz de correlaciones"
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        Relaciones lineales entre variables - alta correlación en pétalos (0.86).
                      </p>
                    </div>

                    {/* Histograms by Species */}
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
                      <h5 className="font-semibold text-gray-800 dark:text-white mb-3">📊 Distribuciones por Especie</h5>
                      <img 
                        src="/activities/visualizations/histogramas_kde_por_especie.png" 
                        alt="Histogramas y KDE por especie"
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        Distribuciones de variables con curvas de densidad por especie.
                      </p>
                    </div>

                    {/* Pairplot by Species */}
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
                      <h5 className="font-semibold text-gray-800 dark:text-white mb-3">🎯 Comparación Multivariada</h5>
                      <img 
                        src="/activities/visualizations/pairplot_por_especie.png" 
                        alt="Pairplot por especie"
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        Comparación entre todas las variables mostrando separación clara de especies.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg p-4">
                    <h5 className="font-semibold text-pink-600 dark:text-pink-400 mb-2">💡 Interpretación de Resultados</h5>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• <strong>Datos completos:</strong> No se encontraron valores faltantes en el dataset</li>
                      <li>• <strong>Correlación fuerte:</strong> Pétalos muestran relación lineal casi perfecta (0.86)</li>
                      <li>• <strong>Separación clara:</strong> Las especies se distinguen bien en el espacio multivariado</li>
                      <li>• <strong>Variabilidad:</strong> Virginica presenta mayor dispersión en pétalos</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Visualizaciones:</strong> No hay visualizaciones disponibles para esta actividad.
                  </p>
                </div>
              )}
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
