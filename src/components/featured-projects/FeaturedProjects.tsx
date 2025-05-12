
import React from 'react';
import { featuredProjectsData } from './ProjectsData';
import LargeProjectCard from './LargeProjectCard';

const FeaturedProjects = () => {
  // Only show large projects
  const largeProjects = featuredProjectsData.filter(project => project.isLarge);
  
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Our Projects</h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Explore our successful industrial transformation projects across the globe
        </p>
        
        <div className="space-y-16">
          {largeProjects.map((project, index) => (
            <LargeProjectCard 
              key={project.id} 
              project={project} 
              reverseLayout={index % 2 !== 0} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
