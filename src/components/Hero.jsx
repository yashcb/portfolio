import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-gray-900 dark:text-white mb-6 leading-tight">
            Yash Chudasama
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-serif">
            AI/ML Engineer
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-serif">
            I build intelligent systems that solve real-world problems. Currently focused on 
            machine learning applications in healthcare, business and experimental technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;