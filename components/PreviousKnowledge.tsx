'use client';

import { useState } from 'react';

const PreviousKnowledge = () => {
  const [activeSubject, setActiveSubject] = useState('probability');

  const subjects = [
    { id: 'probability', label: 'Probabilidad', icon: '🎲' },
    { id: 'statistics', label: 'Estadística', icon: '📊' },
    { id: 'mathematics', label: 'Matemáticas', icon: '🔢' },
    { id: 'programming', label: 'Programación', icon: '💻' },
  ];

  const knowledgeData = {
    probability: [
      {
        title: 'Probabilidad',
        description: '',
        topics: [],
        resources: []
      }
    ],
    statistics: [
      {
        title: 'Estadística',
        description: '',
        topics: [],
        resources: []
      }
    ],
    mathematics: [
      {
        title: 'Matemáticas',
        description: '',
        topics: [],
        resources: []
      }
    ],
    programming: [
      {
        title: 'Programación',
        description: '',
        topics: [],
        resources: []
      }
    ]
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PDF':
        return 'bg-red-100 text-red-700';
      case 'Jupyter Notebook':
        return 'bg-orange-100 text-orange-700';
      case 'Video':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return '📄';
      case 'Jupyter Notebook':
        return '📓';
      case 'Video':
        return '🎥';
      default:
        return '📁';
    }
  };

  const currentData = knowledgeData[activeSubject as keyof typeof knowledgeData];

  return (
    <section id="previous-knowledge" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-black">Conocimientos Previos</span> Relevantes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fundamentos matemáticos y estadísticos esenciales para el análisis de datos
            </p>
          </div>

          {/* Subject Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => setActiveSubject(subject.id)}
                className={`tab-button flex items-center space-x-2 ${
                  activeSubject === subject.id ? 'selected' : ''
                }`}
              >
                <span className="text-xl">{subject.icon}</span>
                <span>{subject.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 shadow-lg text-center">
              <div className="mb-6">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Sin contenido disponible</h3>
                <p className="text-gray-600 text-xl">Esta sección estará disponible próximamente</p>
              </div>
            </div>
          </div>

          {/* Additional Resources Section */}
          <div className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">¿Necesitas Repasar Algún Concepto?</h3>
              <p className="text-xl mb-6 opacity-90">
                Accede a recursos adicionales y ejercicios prácticos para fortalecer tus conocimientos
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Ver Todos los Recursos
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
                  Ejercicios Interactivos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousKnowledge;
