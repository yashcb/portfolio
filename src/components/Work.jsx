import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Work = () => {
  const projects = [
    {
      title: "MaestroRec",
      description: "Multi-agent AI recommendation system that delivers personalized product suggestions through hybrid architecture.",
      tech: ["Python", "LangGraph", "E-commerce", "Recommendation System"],
      githubLink: "https://github.com/yashcb/MaestroRec",
      year: "2025"
    },
    {
      title: "Psych AI",
      description: "A Speech-to-Text & Speaker Diarization App for therapeutic sessions, optimized for multi-speaker, long-form audio with GPU acceleration.",
      tech: ["PyTorch", "Whisper", "PyAnnote", "Speechbrain"],
      year: "2025"
    },
    {
      title: "Multilingual Video Dubbing Pipeline",
      description: "An automated pipeline for dubbing videos between any languages with TTS support, while preserving the original audio track.",
      tech: ["Python"],
      githubLink: "https://github.com/yashcb/Multilingual-Video-Dubbing",
      year: "2025"
    },
    {
      title: "PhiloAgents Simulation",
      description: "A fun real-time conversational agents simulation, bringing philosophers from past to life.",
      tech: ["Python"],
      githubLink: "https://github.com/yashcb/philoagents-spinoff",
      liveLink: "https://philoagents-spinoff.netlify.app/",
      year: "2025"
    },
    {
      title: "ItinerarAI",
      description: "AI Travel Companion that crafts personalized itineraries based on user preferences and real-time data.",
      tech: ["Python", "FastAPI", "JavaScript"],
      githubLink: "https://github.com/yashcb/ItinerarAI",
      year: "2025"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 pt-20 pb-20">
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
            Selected Recent Work
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-serif leading-relaxed">
            A collection of projects focused on solving real-world problems through AI and machine learning.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="group animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-serif font-medium text-gray-900 dark:text-white group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-serif">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 font-serif leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-nav bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3">
                  {project.githubLink && project.githubLink !== "N/A" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-nav font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 group/btn"
                    >
                      <svg className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  )}
                  
                  {project.liveLink && project.liveLink !== "N/A" && project.liveLink !== project.githubLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-nav font-medium text-white bg-primary-500 rounded-lg hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 group/btn"
                    >
                      <svg className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;