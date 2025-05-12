
import React from 'react';
import { featuredProjectsData } from './ProjectsData';
import LargeProjectCard from './LargeProjectCard';
import SmallProjectCard from './SmallProjectCard';

const FeaturedProjects = () => {
  // Separate large and small projects
  const largeProjects = featuredProjectsData.filter(project => project.isLarge);
  const smallProjects = featuredProjectsData.filter(project => !project.isLarge);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our completed industrial projects showcasing our expertise in equipment relocation, 
            modernization, and system integration across the world.
          </p>
        </div>
        
        {/* Large Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-inplast-teal mb-8 border-b pb-2">Major Projects</h2>
          <div className="space-y-12">
            {largeProjects.map((project, index) => (
              <LargeProjectCard key={project.id} project={project} reverseLayout={index % 2 !== 0} />
            ))}
          </div>
        </div>
        
        {/* Small Projects Section */}
        <div>
          <h2 className="text-2xl font-semibold text-inplast-teal mb-8 border-b pb-2">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {smallProjects.map((project) => (
              <SmallProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
