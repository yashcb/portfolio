import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Prototyping = () => {
  const experiments = [
    {
      title: "Geometric Language Model",
      description: "An experimental language model that treats tokens as 3D geometric objects with spatial properties, connection points, and assembly rules. Currently trained with 257M parameters.",
      tech: ["Python", "PyTorch", "Streamlit", "Gradio"],
      status: "Research",
      githubLink: "https://github.com/yashcb/moody-blues",
    },
    {
      title: "Kora",
      description: "privacy-first GenAI-powered productivity app designed to help users become more intentional with their time and digital habits. Inspired by apps like Forest, it goes further by integrating self-reflection, local data tracking, and soon, GenAI-generated insights, all without compromising user data privacy.",
      tech: ["Dart", "C++", "Python"],
      status: "Work in Progress",
      githubLink: "https://github.com/yashcb/kora",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 transition-colors duration-300 pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Home */}
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-400 transition-colors font-nav"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-serif font-light text-gray-900 dark:text-white mb-6">
            Prototyping & Experiments
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-serif leading-relaxed">
            Exploring new ideas and pushing the boundaries of what's possible with AI.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiments.map((experiment, index) => (
            <div 
              key={index} 
              className="group p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-400 transition-all duration-300 animate-slide-up flex flex-col"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif font-medium text-gray-900 dark:text-white group-hover:text-primary-400 transition-colors">
                  {experiment.title}
                </h3>
                <span className={`text-xs font-nav px-2 py-1 rounded-full ${
                  experiment.status === 'Live Demo' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                    : experiment.status === 'Beta'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                }`}>
                  {experiment.status}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 font-serif text-sm leading-relaxed mb-4 flex-grow">
                {experiment.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {experiment.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs font-nav bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Experiment Links */}
              <div className="flex gap-2 mt-auto">
                {experiment.githubLink && experiment.githubLink !== "N/A" && (
                  <a
                    href={experiment.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      experiment.liveLink && experiment.liveLink !== "N/A" && experiment.liveLink !== experiment.githubLink 
                        ? 'flex-1' 
                        : 'w-full'
                    } inline-flex items-center justify-center px-3 py-2 text-xs font-nav font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 group/btn`}
                  >
                    <svg className="w-3 h-3 mr-1 group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                )}
                
                {experiment.liveLink && experiment.liveLink !== "N/A" && experiment.liveLink !== experiment.githubLink && (
                  <a
                    href={experiment.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 text-xs font-nav font-medium text-white bg-primary-500 rounded-md hover:bg-primary-600 hover:shadow-md hover:shadow-primary-500/25 transition-all duration-300 group/btn"
                  >
                    <svg className="w-3 h-3 mr-1 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prototyping;