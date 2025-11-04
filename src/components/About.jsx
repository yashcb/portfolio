import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-gray-900 dark:text-white mb-8">
            About
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-400 font-serif leading-relaxed mb-6">
              I'm an AI/ML Engineer with over 2+ years of experience building intelligent systems 
              that solve real-world problems. My work spans across healthcare technology, 
              e-commerce, and natural language processing. When I'm not coding, you'll find me researching the latest developments in AI ethics, experimenting with new architectures and 
              contributing to open-source projects.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;