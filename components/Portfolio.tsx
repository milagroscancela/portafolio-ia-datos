'use client';

import React, { useState } from 'react';

const Portfolio = () => {
  const [activeUnit, setActiveUnit] = useState('UT1');
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('individual');
  const [selectedActivity, setSelectedActivity] = useState<typeof individualActivities[0] | null>(null);
  const [showNotebook, setShowNotebook] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showVisualizations, setShowVisualizations] = useState(false);

  // Actividades UT1
  const individualActivities = [
    {
      id: 'act_dos_iris',
      title: '🌺 Explorando los Secretos del Iris: Un Viaje de Datos y Descubrimientos',
      description: 'Análisis completo del dataset clásico de Iris con visualizaciones avanzadas',
      date: '2024-09-07',
      unit: 'UT1',
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
      unit: 'UT1',
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
    },
    {
      id: 'act_cuatro_individual',
      title: 'Actividad 4 - EDA Multi-fuentes Individual',
      description: 'Análisis exploratorio de múltiples fuentes de datos con operaciones de join y limpieza avanzada',
      date: '2024-09-15',
      unit: 'UT1',
      notebook: 'https://milagroscancela.github.io/ia-portfolio/portfolio/actividades/act_cuatro_individual/pract_cuatro/',
      visualizations: [],
      report: '',
      reflection: `La Actividad 4 Individual representó un salto significativo en mi comprensión del análisis de datos complejos.

**Desafíos técnicos superados:**
- Integración de múltiples fuentes de datos heterogéneas
- Manejo de inconsistencias entre datasets
- Optimización de operaciones de join en datasets grandes
- Limpieza de datos con patrones complejos

**Habilidades desarrolladas:**
- Dominio de operaciones SQL avanzadas (INNER, LEFT, RIGHT JOIN)
- Técnicas de normalización y estandarización de datos
- Estrategias de validación de integridad referencial
- Creación de pipelines de limpieza reproducibles

**Insights obtenidos:**
- Identificación de patrones ocultos en datos combinados
- Correlaciones entre variables de diferentes fuentes
- Tendencias que solo emergen al unir datasets

**Impacto en mi formación:**
Esta actividad me enseñó que el verdadero valor de los datos está en su integración. Aprendí que la limpieza y preparación de datos es un arte que requiere paciencia, metodología y creatividad para resolver problemas únicos de cada proyecto.

**Aplicación profesional:**
Esta experiencia me preparó para enfrentar desafíos reales de integración de datos en entornos empresariales, donde la calidad y consistencia de los datos son fundamentales para el éxito de cualquier análisis.`
    },
    {
      id: 'act_cinco_individual',
      title: 'Actividad 5 - Missing Data Detective Individual',
      description: 'Análisis individual de datos faltantes con técnicas avanzadas de detección, imputación y visualización',
      date: '2024-09-20',
      unit: 'UT2',
      notebook: 'https://milagroscancela.github.io/ia-portfolio/portfolio/actividades/act_cinco_ind/pract_cinco/',
      visualizations: [],
      report: '',
      reflection: `La Actividad 5 Individual Missing Data Detective fue una experiencia profundamente transformadora en mi comprensión de la calidad de datos.

**Desafíos técnicos individuales:**
- Análisis independiente de patrones complejos de missing data
- Implementación de múltiples estrategias de imputación
- Evaluación crítica de la efectividad de cada método
- Creación de visualizaciones avanzadas para comunicar hallazgos

**Técnicas dominadas individualmente:**
- Análisis estadístico de la naturaleza de los datos faltantes (MCAR, MAR, MNAR)
- Implementación de algoritmos de imputación (mean, median, mode, KNN, regresión)
- Validación cruzada para evaluar la calidad de la imputación
- Visualización creativa de patrones de missing data

**Insights personales descubiertos:**
- Identificación de patrones temporales específicos en los datos faltantes
- Correlaciones sutiles entre variables y la probabilidad de missing values
- Impacto diferenciado de cada método de imputación en los resultados
- Importancia de la documentación en procesos de imputación

**Crecimiento personal:**
Esta actividad individual me enseñó a ser más meticulosa y crítica en el análisis de datos. Aprendí que la imputación no es solo una técnica, sino un proceso de toma de decisiones que requiere comprensión profunda del contexto y los datos.

**Aplicación profesional:**
Esta experiencia me preparó para ser autónoma en la resolución de problemas de calidad de datos, desarrollando la capacidad de evaluar críticamente diferentes enfoques y elegir la estrategia más apropiada para cada situación específica.`
    }
  ];

  const groupActivities = [
    {
      id: 'act_tres_grupal',
      title: 'Actividad 3 - EDA Netflix Grupal',
      description: 'Análisis exploratorio del dataset de Netflix con trabajo colaborativo',
      date: '2024-09-10',
      unit: 'UT1',
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
      unit: 'UT1',
      notebook: 'https://milagroscancela.github.io/ia-portfolio/portfolio/actividades/act_cuatro_grupal/Practica_4_EDA_Multi_fuentes_y_Joins_Fill_in_the_Blanks/',
      visualizations: [],
      report: '',
      reflection: ''
    },
    {
      id: 'act_cinco_grupal',
      title: 'Actividad 5 - Missing Data Detective',
      description: 'Detección y análisis de datos faltantes con técnicas avanzadas de imputación y visualización',
      date: '2024-09-18',
      unit: 'UT2',
      notebook: 'https://milagroscancela.github.io/ia-portfolio/portfolio/actividades/act_cinco_grup/Practica_5_Missing_Data_Detective/',
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
      exercises: [
        {
          id: 'UT2-E1',
          title: 'Missing Data Detective',
          description: 'Detección y análisis de datos faltantes con técnicas avanzadas de imputación y visualización',
          type: 'Grupal',
          status: 'Completado',
          notebook: 'https://milagroscancela.github.io/ia-portfolio/portfolio/actividades/act_cinco_grup/Practica_5_Missing_Data_Detective/',
          visualization: 'https://milagroscancela.github.io/ia-portfolio/portfolio/actividades/act_cinco_grup/resultados/',
          reflection: 'La Actividad 5 Missing Data Detective fue una experiencia transformadora en mi comprensión de la calidad de datos. Aprendí a identificar patrones complejos de datos faltantes, implementar algoritmos de imputación avanzados y evaluar el impacto de diferentes estrategias. El trabajo colaborativo fue crucial para discutir enfoques y validar resultados desde múltiples perspectivas.',
          documentation: ['Missing Data Analysis Guide', 'Imputation Techniques', 'Data Quality Assessment']
        }
      ]
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
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-black">Portafolio</span> de Trabajos
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
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
              <div className={`bg-gradient-to-r ${currentUnit.color} rounded-2xl p-8 `}>
                <h3 className="text-3xl font-bold mb-2">{currentUnit.id}</h3>
                <h4 className="text-xl font-semibold mb-4">{currentUnit.title}</h4>
                <p className="text-lg opacity-90">{currentUnit.description}</p>
              </div>

              {/* Exercises */}
              <div className="space-y-6">
                <h5 className="text-2xl font-bold text-gray-900 mb-6">
                  Ejercicios y Proyectos ({(currentUnit.id === 'UT1' || currentUnit.id === 'UT2') ? (activeTab === 'individual' ? individualActivities.filter(activity => activity.unit === activeUnit).length : groupActivities.filter(activity => activity.unit === activeUnit).length) : currentUnit.exercises.length})
                </h5>
                
                {(currentUnit.id === 'UT1' || currentUnit.id === 'UT2') ? (
                  <div className="space-y-8">
                    {/* Tab Navigation para Actividades UT1 y UT2 */}
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
                      {(activeTab === 'individual' ? individualActivities : groupActivities)
                        .filter(activity => activity.unit === activeUnit)
                        .map((activity) => (
                        <div
                          key={activity.id}
                          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
                        >
                          <div className="mb-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {activity.title}
                            </h3>
                            <p className="text-gray-600 text-gray-300 mb-3">
                              {activity.description}
                            </p>
                            <div className="flex items-center text-sm text-gray-500 text-gray-400 mb-4">
                              <span className="mr-4">📅 {activity.date}</span>
                              <span className="px-2 py-1 bg-violet-100 text-violet-700 rounded-full text-xs">
                                Notebook disponible
                              </span>
                            </div>
                          </div>


                          {/* Actions */}
                          <div className="flex flex-wrap gap-2">
                            {/* Reflexión - Para Netflix individual, Iris individual, Actividad 4 individual, Actividad 5 individual y Actividad 5 grupal */}
                            {(activity.id === 'act_tres_netflix' || activity.id === 'act_dos_iris' || activity.id === 'act_cuatro_individual' || activity.id === 'act_cinco_individual' || activity.id === 'act_cinco_grupal') && activity.reflection && (
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
                            <button
                              onClick={() => openNotebook(activity)}
                              className="btn-primary flex items-center justify-center space-x-1 text-sm px-3 py-2"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                              <span>Ver Notebook</span>
                            </button>

                            {/* Visualizaciones - Para Iris individual */}
                            {activity.id === 'act_dos_iris' && (
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

                            {/* Visualizaciones - Para Actividad 5 grupal e individual */}
                            {(activity.id === 'act_cinco_grupal' || activity.id === 'act_cinco_individual') && (
                              <a
                                href={activity.id === 'act_cinco_grupal' 
                                  ? "https://milagroscancela.github.io/ia-portfolio/portfolio/actividades/act_cinco_grup/resultados/"
                                  : "https://milagroscancela.github.io/ia-portfolio/portfolio/actividades/act_cinco_ind/resu_act_5/"
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary flex items-center justify-center space-x-1 text-sm px-3 py-2"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <span>Visualizaciones</span>
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

                            {/* Resultados - Solo para Iris individual */}
                            {activity.id === 'act_dos_iris' && (
                              <a
                                href="https://milagroscancela.github.io/ia-portfolio/portfolio/actividades/act_dos_iris/results/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary flex items-center justify-center space-x-1 text-sm px-3 py-2"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                <span>Resultados</span>
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : currentUnit.exercises.length === 0 ? (
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 from-gray-800 to-gray-700 rounded-2xl p-8 shadow-lg text-center">
                    <div className="mb-6">
                      <div className="text-6xl mb-4">📚</div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Sin contenido disponible</h3>
                      <p className="text-gray-600 text-gray-300 text-xl">Esta sección estará disponible próximamente</p>
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
                    <div className="text-2xl font-bold text-black">
                      {(currentUnit.id === 'UT1' || currentUnit.id === 'UT2') ? (activeTab === 'individual' ? individualActivities.filter(activity => activity.unit === activeUnit).length : groupActivities.filter(activity => activity.unit === activeUnit).length) : currentUnit.exercises.length}
                    </div>
                    <div className="text-sm text-gray-600">Ejercicios</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-black">
                      {(currentUnit.id === 'UT1' || currentUnit.id === 'UT2') ? (activeTab === 'individual' ? individualActivities.filter(activity => activity.unit === activeUnit).length : groupActivities.filter(activity => activity.unit === activeUnit).length) : currentUnit.exercises.filter(e => e.status === 'Completado').length}
                    </div>
                    <div className="text-sm text-gray-600">Completados</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reflection Modal */}
      {selectedActivity && !showNotebook && !showReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Reflexión - {selectedActivity.title}
                </h3>
                <button
                  onClick={closeReflection}
                  className="text-gray-400 hover:text-gray-600 hover:text-gray-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="prose max-w-none">
                <div className="whitespace-pre-line text-gray-700 text-gray-300 leading-relaxed">
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
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedActivity.title}
                </h3>
                <button
                  onClick={closeNotebook}
                  className="text-gray-400 hover:text-gray-600 hover:text-gray-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {selectedActivity.id === 'act_dos_iris' ? (
                <div className="prose prose-lg max-w-none">
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-6">
                    <h1 className="text-3xl font-bold text-pink-600 mb-4">🌺 Explorando los Secretos del Iris: Un Viaje de Datos y Descubrimientos</h1>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center"><span className="mr-2">📅</span><strong>Duración estimada del proyecto:</strong> 1 hora</span>
                      <span className="flex items-center"><span className="mr-2">📂</span><strong>Notebook asociado:</strong> dataset_iris.ipynb</span>
                      <span className="flex items-center"><span className="mr-2">📍</span><strong>Ubicación en repo:</strong> /results/reportes/dataset_iris.ipynb</span>
                    </div>

                    <div className="bg-pink-100 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Descargar notebook:</strong>
                      </p>
                      <a href="/files/notebooks/dataset_iris.ipynb" download className="inline-flex items-center px-3 py-1 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors text-sm">
                        <span className="mr-1">📥</span> Descargar dataset_iris.ipynb
                      </a>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <section>
                      <h2 className="text-2xl font-bold text-purple-600 mb-4 flex items-center">
                        <span className="mr-2">📘</span> Introducción
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        Este análisis forma parte del <strong>portafolio de Ingeniería de Datos</strong> y explora el famoso <strong>dataset Iris</strong>, utilizando herramientas de análisis estadístico, validación de datos y visualización.
                        El objetivo fue <strong>descubrir relaciones entre las medidas de sépalos y pétalos</strong> y desarrollar un flujo de trabajo reproducible, documentado y visualmente atractivo.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-purple-600 mb-4 flex items-center">
                        <span className="mr-2">🧭</span> Proceso de Análisis
                      </h2>
                      
                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-pink-600 mb-2">1️⃣ Validación y Diccionario de Datos</h3>
                          <ul className="text-gray-700 space-y-1 text-sm">
                            <li>• Se generó el archivo <strong>data_dictionary.csv</strong> con la descripción de cada variable.</li>
                            <li>• Se verificaron valores faltantes en <strong>missing.csv</strong>, <strong>missing_prop.csv</strong> y <strong>nulos.csv</strong>.</li>
                            <li>• El dataset resultó estar <strong>completo, sin nulos ni inconsistencias</strong>.</li>
                          </ul>
                          <div className="mt-2 text-sm text-gray-600">
                            <strong>📊 Visualización:</strong> missing.png – resumen de completitud del dataset.
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-pink-600 mb-2">2️⃣ Estadísticas Descriptivas y Correlaciones</h3>
                          <p className="text-gray-700 text-sm mb-2">
                            Se calcularon medidas básicas (describe.csv), covarianzas (cov.csv) y curtosis/asimetría (skew_kurt.csv).
                          </p>
                          <div className="text-sm text-gray-700">
                            <strong>🔍 Hallazgos principales:</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Alta correlación (0.86) entre largo y ancho de pétalos.</li>
                              <li>• Baja correlación (-0.12) entre largo y ancho de sépalos.</li>
                            </ul>
                          </div>
                          <div className="mt-2 text-sm text-gray-600">
                            <strong>📈 Visualización:</strong> matriz_correlaciones.png – muestra las relaciones lineales entre variables.
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-pink-600 mb-2">3️⃣ Distribución por Especie</h3>
                          <p className="text-gray-700 text-sm mb-2">
                            Se generaron visualizaciones por especie: histogramas_kde_por_especie.png y pairplot_por_especie.png.
                          </p>
                          <div className="text-sm text-gray-700">
                            <strong>📊 Conclusiones:</strong>
                            <ul className="mt-1 space-y-1">
                              <li>• Virginica tiene los sépalos más largos (6.59 cm promedio).</li>
                              <li>• Setosa presenta menor variabilidad.</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-pink-600 mb-2">4️⃣ Respuestas de Negocio</h3>
                          <div className="text-sm text-gray-700 space-y-3">
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
                      <h2 className="text-2xl font-bold text-purple-600 mb-4 flex items-center">
                        <span className="mr-2">🌟</span> Hallazgos Principales
                      </h2>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-pink-200">
                          <thead className="bg-pink-100">
                            <tr>
                              <th className="border border-pink-200 px-4 py-2 text-left text-pink-700">Insight</th>
                              <th className="border border-pink-200 px-4 py-2 text-left text-pink-700">Evidencia</th>
                            </tr>
                          </thead>
                          <tbody className="text-sm">
                            <tr>
                              <td className="border border-pink-200 px-4 py-2">Correlación alta pétalos</td>
                              <td className="border border-pink-200 px-4 py-2">0.86</td>
                            </tr>
                            <tr>
                              <td className="border border-pink-200 px-4 py-2">Correlación baja sépalos</td>
                              <td className="border border-pink-200 px-4 py-2">-0.12</td>
                            </tr>
                            <tr>
                              <td className="border border-pink-200 px-4 py-2">Virginica tiene sépalos más largos</td>
                              <td className="border border-pink-200 px-4 py-2">Promedio: 6.59 cm</td>
                            </tr>
                            <tr>
                              <td className="border border-pink-200 px-4 py-2">Mayor variabilidad</td>
                              <td className="border border-pink-200 px-4 py-2">Pétalos en Virginica (0.55 cm)</td>
                            </tr>
                            <tr>
                              <td className="border border-pink-200 px-4 py-2">Dataset balanceado</td>
                              <td className="border border-pink-200 px-4 py-2">33.3% cada especie</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </section>

                    <section>
                      <h2 className="text-2xl font-bold text-purple-600 mb-4 flex items-center">
                        <span className="mr-2">💭</span> Reflexión personal
                      </h2>
                      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6">
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Este trabajo me permitió reafirmar la importancia de ir más allá del código y mirar los datos con una perspectiva crítica y analítica. Aunque el dataset Iris es un clásico en la ciencia de datos, volver a explorarlo desde cero me ayudó a fortalecer mi comprensión del <strong>proceso de análisis exploratorio</strong>: desde la limpieza y validación de datos hasta la interpretación visual y las conclusiones basadas en evidencia.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Lo que más valoro de este ejercicio fue entender cómo <strong>cada decisión técnica puede tener un sentido práctico o de negocio</strong>. Por ejemplo, descubrir que los pétalos son las variables más relevantes no solo es una conclusión estadística, sino también un recordatorio de que en los proyectos reales debemos saber <strong>qué información aporta más valor</strong> y <strong>cómo comunicarla de forma clara</strong>.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          En definitiva, este trabajo me ayudó a mejorar mi forma de <strong>documentar procesos, interpretar datos y presentar resultados</strong>, tres competencias clave en ingeniería de datos. Aunque fue una tarea breve, me dejó la sensación de que <strong>la calidad no depende del tamaño del dataset, sino del cuidado con el que se analiza y comunica</strong>.
                        </p>
                      </div>
                    </section>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Notebook:</strong> {selectedActivity.notebook}
                  </p>
                  <p className="text-sm text-gray-600">
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
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Visualizaciones - {selectedActivity.title}
                </h3>
                <button
                  onClick={closeVisualizations}
                  className="text-gray-400 hover:text-gray-600 hover:text-gray-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {selectedActivity.id === 'act_dos_iris' ? (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-pink-600 mb-4">📊 Visualizaciones del Análisis Iris</h4>
                    <p className="text-gray-700 text-sm">
                      A continuación se presentan todas las visualizaciones generadas durante el análisis exploratorio del dataset Iris.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Missing Data Visualization */}
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <h5 className="font-semibold text-gray-800 mb-3">📈 Análisis de Datos Faltantes</h5>
                      <img 
                        src="/activities/visualizations/missing.png" 
                        alt="Análisis de datos faltantes"
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        Verificación de completitud del dataset - sin valores faltantes detectados.
                      </p>
                    </div>

                    {/* Correlation Matrix */}
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <h5 className="font-semibold text-gray-800 mb-3">🔗 Matriz de Correlaciones</h5>
                      <img 
                        src="/activities/visualizations/matriz_correlaciones.png" 
                        alt="Matriz de correlaciones"
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        Relaciones lineales entre variables - alta correlación en pétalos (0.86).
                      </p>
                    </div>

                    {/* Histograms by Species */}
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <h5 className="font-semibold text-gray-800 mb-3">📊 Distribuciones por Especie</h5>
                      <img 
                        src="/activities/visualizations/histogramas_kde_por_especie.png" 
                        alt="Histogramas y KDE por especie"
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        Distribuciones de variables con curvas de densidad por especie.
                      </p>
                    </div>

                    {/* Pairplot by Species */}
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <h5 className="font-semibold text-gray-800 mb-3">🎯 Comparación Multivariada</h5>
                      <img 
                        src="/activities/visualizations/pairplot_por_especie.png" 
                        alt="Pairplot por especie"
                        className="w-full h-auto rounded-lg"
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        Comparación entre todas las variables mostrando separación clara de especies.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4">
                    <h5 className="font-semibold text-pink-600 mb-2">💡 Interpretación de Resultados</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Datos completos:</strong> No se encontraron valores faltantes en el dataset</li>
                      <li>• <strong>Correlación fuerte:</strong> Pétalos muestran relación lineal casi perfecta (0.86)</li>
                      <li>• <strong>Separación clara:</strong> Las especies se distinguen bien en el espacio multivariado</li>
                      <li>• <strong>Variabilidad:</strong> Virginica presenta mayor dispersión en pétalos</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
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
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Reporte - {selectedActivity.title}
                </h3>
                <button
                  onClick={closeReport}
                  className="text-gray-400 hover:text-gray-600 hover:text-gray-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600 text-gray-300 mb-2">
                  <strong>Reporte:</strong> {selectedActivity.report}
                </p>
                <p className="text-sm text-gray-600 text-gray-300">
                  <strong>Descripción:</strong> Reporte HTML generado con los resultados del análisis
                </p>
              </div>

              <div className="bg-white bg-gray-900 rounded-lg p-4 border border-gray-200 border-gray-600">
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">📊</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Reporte HTML</h4>
                  <p className="text-gray-600 text-gray-300 mb-4">
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
