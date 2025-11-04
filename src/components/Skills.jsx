import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning",
      skills: [
        "Deep Learning", "Neural Networks", "Computer Vision", 
        "Natural Language Processing", "Reinforcement Learning", "MLOps"
      ]
    },
    {
      title: "Programming & Tools",
      skills: [
        "Python", "TensorFlow", "PyTorch", "Scikit-learn", 
        "Docker", "Kubernetes", "AWS", "Git"
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        "Data Science", "Statistical Analysis", "Data Visualization", 
        "SQL", "NoSQL", "Apache Spark", "Pandas", "NumPy"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-gray-900 dark:text-white mb-8">
            Skills & Expertise
          </h2>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-nav text-sm hover:bg-primary-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;