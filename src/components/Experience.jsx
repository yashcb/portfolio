import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "FoxCoder Infotech",
      period: "2023 - Present",
      description: "Led development of AI-powered diagnostic systems for therapeutic sessions. Implemented deep learning models that improved diagnostic management and reduced processing time by 40% for therapists.",
      achievements: [
        "Built a speech-to-text and speaker diarization system using Whisper and PyAnnote, optimized for multi-speaker, long-form audio with GPU acceleration",
        "Developed a product recommendation chatbot integration plan using Therabody’s e-commerce data, combining RAG workflows, product embeddings",
        "Delivered NLP solutions for tasks like classification, Q&A, and conversational AI using transformer models and prompt-based interfaces",
        "Deployed applications with FastAPI, Docker, and MongoDB, focusing on modular design and scalability."
      ]
    },
    {
      title: "Unity Developer",
      company: "FoxCoder Infotech",
      period: "2023 - 2023",
      description: "Joined dev team of NFTDuel, a turn-based game on Xana.net, integrating NFT intellectual property cards",
      achievements: [
        "Collaboratively developed advanced AI, player abilities, and gameplay mechanics to align with project objectives",
        "Improved gameplay experience, networking stability, and overall player experience",
        "Integrated Fusion, Animation system, Profiling and Debugging practices resulting in 100% reduction in crash scenarios"
      ]
    },
    {
      title: "Associate Unity developer",
      company: "Spellenx Innovations",
      period: "2021 - 2022",
      description: "Created diverse game titles spanning Hyper-Casual, 3D, and Multiplayer Board games. Contributing across design, coding, animation, and build phases.",
      achievements: [
        "Led development of Partybus - Truth or Dare having 50K+ downloads on Play store",
        "Contributed throughout the development of 'Elite-Ludo' at www.eliteludo.com, with 200K+ downloads.",
        "Utilized analytics and plugins such as Kochava, AppsFlyer, resulting 30+% increase in user engagement"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-gray-900 dark:text-white mb-8">
            Experience
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 font-serif leading-relaxed mb-12">
            Professional experience building AI solutions across healthcare, e-commerce sectors and earlier game development experience.
          </p>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-4 top-16 w-0.5 h-32 bg-gray-200 dark:bg-gray-700"></div>
                )}
                
                <div className="flex items-start space-x-4">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-400 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-nav">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-nav text-primary-600 dark:text-primary-400 mb-3">
                      {exp.company}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-400 font-serif leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex}
                          className="flex items-start space-x-3 text-gray-600 dark:text-gray-400 font-serif"
                        >
                          <span className="text-primary-400 mt-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;