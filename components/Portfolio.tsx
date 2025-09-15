'use client';

import React, { useState } from 'react';

const Portfolio = () => {
  const [activeUnit, setActiveUnit] = useState('UT1');
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('individual');
  const [selectedActivity, setSelectedActivity] = useState<typeof individualActivities[0] | null>(null);
  const [showNotebook, setShowNotebook] = useState(false);
  const [showVisualizations, setShowVisualizations] = useState(false);
  const [showReport, setShowReport] = useState(false);

  // Actividades UT1
  const individualActivities = [
    {
      id: 'act_dos_iris',
      title: 'Actividad 2 - Análisis del Dataset Iris',
      description: 'Análisis completo del dataset clásico de Iris con visualizaciones avanzadas',
      date: '2024-09-07',
      notebook: 'https://milagroscancela.github.io/ia-portfolio/portfolio/actividades/act_dos_iris/dataset_iris/',
      visualizations: [],
      report: '',
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
      notebook: 'https://milagroscancela.github.io/ia-portfolio/portfolio/actividades/act_tres_netflix/eda_netflix/',
      visualizations: [],
      report: 'https://milagroscancela.github.io/ia-portfolio/portfolio/actividades/act_tres_netflix/netflix_eda_report.html',
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
      notebook: 'https://milagroscancela.github.io/ia-portfolio/portfolio/actividades/act_tres_grupal/Practica03/',
      visualizations: [],
      report: 'https://milagroscancela.github.io/ia-portfolio/portfolio/actividades/act_tres_grupal/netflix_eda_report.html',
      reflection: ''
    },
    {
      id: 'act_cuatro_grupal',
      title: 'Actividad 4 - EDA Multi-fuentes y Joins',
      description: 'Análisis de múltiples fuentes de datos con operaciones de join',
      date: '2024-09-12',
      notebook: 'https://milagroscancela.github.io/ia-portfolio/portfolio/actividades/act_cuatro_grupal/Practica_4_EDA_Multi_fuentes_y_Joins_Fill_in_the_Blanks/',
      visualizations: [],
      report: '',
      reflection: ''
    }
  ];

  const units = [
    {
      id: 'UT1',
      title: 'Análisis Exploratorio de Datos (EDA)',
      description: 'Carga y exploración de datasets, técnicas de EDA con pandas, visualizaciones informativas y documentación con MkDocs',
      color: 'from-primary-400 to-primary-600',
      exercises: [
        {
          id: 'UT1-E1',
          title: 'Fill in the Blanks - EDA',
          description: 'Análisis exploratorio de datos con metodología de completar espacios en blanco',
          type: 'Individual',
          status: 'Completado',
          notebook: 'fill_in_the_blank.ipynb',
          visualization: null,
          reflection: 'Esta actividad me permitió profundizar en el análisis exploratorio de datos (EDA) a través de una metodología interactiva. Aprendí la importancia de la limpieza de datos, identificación de patrones y anomalías, y mejoré mi capacidad para formular hipótesis basadas en los datos.',
          documentation: ['Pandas Documentation', 'Matplotlib User Guide', 'Seaborn Tutorial']
        },
        {
          id: 'UT1-E2',
          title: 'Análisis del Dataset Iris',
          description: 'Análisis completo del dataset clásico de Iris con visualizaciones avanzadas',
          type: 'Grupal',
          status: 'Completado',
          notebook: 'dataset_iris.ipynb',
          visualization: 'histogramas_kde_por_especie.png',
          reflection: 'Esta actividad grupal fue fundamental para entender el flujo completo de un proyecto de análisis de datos. Aprendí a coordinar tareas, dominé el uso de pandas y seaborn, y generamos un reporte HTML completo con todas las visualizaciones.',
          documentation: ['Iris Dataset Documentation', 'Seaborn Gallery', 'Pandas Profiling']
        },
        {
          id: 'UT1-E3',
          title: 'EDA Netflix',
          description: 'Análisis exploratorio del dataset de Netflix con dashboard interactivo',
          type: 'Grupal',
          status: 'Completado',
          notebook: 'eda_netflix.ipynb',
          visualization: 'netflix_dashboard.png',
          reflection: 'El análisis del dataset de Netflix me conectó con datos del mundo real. Aprendí a manejar datos faltantes en datasets grandes, crear dashboards interactivos y descubrir patrones estacionales y correlaciones entre géneros y popularidad.',
          documentation: ['Netflix Research', 'Plotly Documentation', 'Streamlit Guide']
        },
        {
          id: 'UT1-E4',
          title: 'EDA Multi-fuentes y Joins',
          description: 'Análisis de múltiples fuentes de datos con operaciones de join',
          type: 'Grupal',
          status: 'Completado',
          notebook: 'Practica_4_EDA_Multi_fuentes_y_Joins_Fill_in_the_Blanks.ipynb',
          visualization: null,
          reflection: 'Esta actividad grupal fue la más desafiante, trabajando con múltiples fuentes de datos. Aprendí SQL avanzado para operaciones de join, estrategias de limpieza de datos heterogéneos y la importancia de la planificación en proyectos de datos complejos.',
          documentation: ['SQL Joins Guide', 'Pandas Merge Documentation', 'Data Integration Patterns']
        }
      ]
    },
    {
      id: 'UT2',
      title: 'Limpieza y Calidad de Datos',
      description: 'Detección de missing data y outliers, estrategias de imputación, pipelines de limpieza reproducibles y consideraciones éticas',
      color: 'from-secondary-400 to-secondary-600',
      exercises: []
    }
    // Temporarily hidden units
    // {
    //   id: 'UT3',
    //   title: 'Almacenamiento y Gestión de Datos',
    //   description: 'Data warehouses, data lakes y optimización',
    //   color: 'from-accent-400 to-accent-600',
    //   exercises: [
    //     {
    //       id: 'UT3-E1',
    //       title: 'Diseño de Data Warehouse',
    //       description: 'Modelado dimensional y diseño de esquemas',
    //       type: 'Diseño',
    //       status: 'Completado',
    //       notebook: 'UT3_E1_DataWarehouse_Design.ipynb',
    //       visualization: 'UT3_E1_Star_Schema.png',
    //       reflection: 'Aprendí sobre las diferencias entre esquemas estrella y copo de nieve, y cuándo aplicar cada uno.',
    //       documentation: ['Kimball Methodology', 'Data Vault 2.0 Guide']
    //     }
    //   ]
    // },
    // {
    //   id: 'UT4',
    //   title: 'Visualización y Análisis Avanzado',
    //   description: 'Dashboards, ML en producción y monitoreo',
    //   color: 'from-primary-500 to-accent-500',
    //   exercises: [
    //     {
    //       id: 'UT4-E1',
    //       title: 'Dashboard Interactivo',
    //       description: 'Creación de dashboard con Streamlit y Plotly',
    //       type: 'Visualización',
    //       status: 'En Progreso',
    //       notebook: 'UT4_E1_Interactive_Dashboard.ipynb',
    //       visualization: null,
    //       reflection: 'Trabajando en la implementación de filtros dinámicos y visualizaciones interactivas.',
    //       documentation: ['Streamlit Documentation', 'Plotly Python Guide']
    //     }
    //   ]
    // }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completado':
        return 'bg-green-100 text-green-800';
      case 'En Progreso':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pendiente':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Individual':
        return 'bg-blue-100 text-blue-800';
      case 'Grupal':
        return 'bg-green-100 text-green-800';
      case 'Análisis':
        return 'bg-purple-100 text-purple-800';
      case 'Proyecto':
        return 'bg-orange-100 text-orange-800';
      case 'Diseño':
        return 'bg-pink-100 text-pink-800';
      case 'Visualización':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Funciones para manejar actividades
  const openReflection = (activity: typeof individualActivities[0]) => {
    setSelectedActivity(activity);
  };

  const closeReflection = () => {
    setSelectedActivity(null);
  };

  const openNotebook = (activity: typeof individualActivities[0]) => {
    setSelectedActivity(activity);
    setShowNotebook(true);
  };

  const closeNotebook = () => {
    setShowNotebook(false);
    setSelectedActivity(null);
  };

  const openVisualizations = (activity: typeof individualActivities[0]) => {
    setSelectedActivity(activity);
    setShowVisualizations(true);
  };

  const closeVisualizations = () => {
    setShowVisualizations(false);
    setSelectedActivity(null);
  };

  const openReport = (activity: typeof individualActivities[0]) => {
    setSelectedActivity(activity);
    setShowReport(true);
  };

  const closeReport = () => {
    setShowReport(false);
    setSelectedActivity(null);
  };

  const currentUnit = units.find(unit => unit.id === activeUnit);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-black dark:text-white">Portafolio</span> de Trabajos
            </h2>
            <p className="text-xl text-gray-800 dark:text-white max-w-3xl mx-auto">
              Organización por unidades de todos los ejercicios, proyectos y reflexiones del curso
            </p>
          </div>

          {/* Unit Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {units.map((unit) => (
              <button
                key={unit.id}
                onClick={() => setActiveUnit(unit.id)}
                className={`p-6 rounded-xl text-left transition-all duration-300 relative overflow-hidden ${
                  activeUnit === unit.id
                    ? 'selected-pink'
                    : 'hover-pink bg-gray-100 text-gray-700'
                }`}
              >
                {activeUnit === unit.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
                )}
                <div className="relative z-10">
                  <div className="text-2xl font-bold mb-2">{unit.id}</div>
                  <div className="text-sm font-medium mb-1">{unit.title}</div>
                  <div className="text-xs opacity-75">{unit.description}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Unit Content */}
          {currentUnit && (
            <div className="space-y-8">
              {/* Unit Header */}
              <div className={`bg-gradient-to-r ${currentUnit.color} rounded-2xl p-8 text-white`}>
                <h3 className="text-3xl font-bold mb-2">{currentUnit.id}</h3>
                <h4 className="text-xl font-semibold mb-4">{currentUnit.title}</h4>
                <p className="text-lg opacity-90">{currentUnit.description}</p>
              </div>

              {/* Exercises */}
              <div className="space-y-6">
                <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Ejercicios y Proyectos ({currentUnit.exercises.length})
                </h5>
                
                {currentUnit.id === 'UT1' ? (
                  <div className="space-y-8">
                    {/* Tab Navigation para Actividades UT1 */}
                    <div className="flex flex-wrap justify-center gap-4">
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
                            {/* Reflexión - Solo para Netflix individual */}
                            {activity.id === 'act_tres_netflix' && activity.reflection && (
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

                            {/* Notebook - Para todas las actividades */}
                            <a
                              href={activity.notebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary flex items-center justify-center space-x-1 text-sm px-3 py-2"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                              <span>Ver Notebook</span>
                            </a>

                            {/* Dashboard - Solo para Netflix individual */}
                            {activity.id === 'act_tres_netflix' && (
                              <a
                                href="https://milagroscancela.github.io/ia-portfolio/portfolio/actividades/act_tres_netflix/netflix_dashboard.png"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary flex items-center justify-center space-x-1 text-sm px-3 py-2"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                <span>Dashboard</span>
                              </a>
                            )}

                            {/* Reporte - Para Netflix individual y grupal */}
                            {(activity.id === 'act_tres_netflix' || activity.id === 'act_tres_grupal') && activity.report && (
                              <a
                                href={activity.report}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary flex items-center justify-center space-x-1 text-sm px-3 py-2"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>Reporte</span>
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : currentUnit.exercises.length === 0 ? (
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg text-center">
                    <div className="mb-6">
                      <div className="text-6xl mb-4">📚</div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Sin contenido disponible</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xl">Esta sección estará disponible próximamente</p>
                    </div>
                  </div>
                ) : (
                  currentUnit.exercises.map((exercise) => (
                  <div
                    key={exercise.id}
                    className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                  >
                    {/* Exercise Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h6 className="text-xl font-bold text-gray-900 mb-2">
                            {exercise.title}
                          </h6>
                          <p className="text-gray-600 mb-4">{exercise.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(exercise.type)}`}>
                              {exercise.type}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(exercise.status)}`}>
                              {exercise.status}
                            </span>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => setExpandedExercise(
                            expandedExercise === exercise.id ? null : exercise.id
                          )}
                          className="ml-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <svg
                            className={`w-5 h-5 transition-transform ${
                              expandedExercise === exercise.id ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>

                      {/* Quick Actions */}
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={`/notebooks/${exercise.notebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary flex items-center space-x-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                          <span>Ver Notebook</span>
                        </a>
                        
                        {exercise.visualization && (
                          <a
                            href={`/visualizations/${exercise.visualization}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex items-center space-x-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span>Ver Visualización</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedExercise === exercise.id && (
                      <div className="border-t border-gray-200 p-6 bg-gray-50">
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Reflection */}
                          <div>
                            <h6 className="text-lg font-bold text-gray-900 mb-3">Reflexión Personal</h6>
                            <p className="text-gray-700 leading-relaxed">
                              {exercise.reflection}
                            </p>
                          </div>
                          
                          {/* Documentation */}
                          <div>
                            <h6 className="text-lg font-bold text-gray-900 mb-3">Documentación Utilizada</h6>
                            <ul className="space-y-2">
                              {exercise.documentation.map((doc, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                  <a
                                    href="#"
                                    className="text-primary-600 hover:text-primary-800 transition-colors"
                                  >
                                    {doc}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  ))
                )}
              </div>

              {/* Unit Summary */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
                <h5 className="text-xl font-bold text-gray-900 mb-4">Resumen de la Unidad</h5>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary-600">
                      {currentUnit.exercises.length}
                    </div>
                    <div className="text-sm text-gray-600">Ejercicios</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-secondary-600">
                      {currentUnit.exercises.filter(e => e.status === 'Completado').length}
                    </div>
                    <div className="text-sm text-gray-600">Completados</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-accent-600">
                      {currentUnit.exercises.filter(e => e.visualization).length}
                    </div>
                    <div className="text-sm text-gray-600">Visualizaciones</div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
                {selectedActivity.visualizations.map((viz: string, index: number) => (
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

export default Portfolio;
