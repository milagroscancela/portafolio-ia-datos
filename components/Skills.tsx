'use client';

const Skills = () => {
  const skills = {
    languages: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 85 }
    ],
    tools: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'VS Code', level: 92 },
      { name: 'Docker', level: 75 },
      { name: 'MongoDB', level: 80 },
      { name: 'Power BI', level: 85 }
    ]
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Habilidades
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Tecnologías y herramientas que utilizo en mis proyectos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Lenguajes */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Lenguajes
              </h3>
              <div className="space-y-6">
                {skills.languages.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-600 group-hover:to-purple-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Herramientas y Tecnologías */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Herramientas y Tecnologías
              </h3>
              <div className="space-y-6">
                {skills.tools.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-teal-600 rounded-full transition-all duration-1000 ease-out group-hover:from-green-600 group-hover:to-teal-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Tecnologías Destacadas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[...skills.languages, ...skills.tools].map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl mb-3">
                    {skill.name === 'Python' && '🐍'}
                    {skill.name === 'SQL' && '🗄️'}
                    {skill.name === 'Git / GitHub' && '📚'}
                    {skill.name === 'VS Code' && '💻'}
                    {skill.name === 'Docker' && '🐳'}
                    {skill.name === 'MongoDB' && '🍃'}
                    {skill.name === 'Power BI' && '📊'}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
