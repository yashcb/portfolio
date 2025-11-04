import React from 'react';

const SectionDivider = ({ className = "" }) => {
  return (
    <div className={`flex justify-center py-8 ${className}`}>
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
    </div>
  );
};

export default SectionDivider;