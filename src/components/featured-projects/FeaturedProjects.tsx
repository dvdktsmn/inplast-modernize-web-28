
import React from 'react';
import { featuredProjectsData } from './ProjectsData';
import LargeProjectCard from './LargeProjectCard';
import SmallProjectCard from './SmallProjectCard';

const FeaturedProjects = () => {
  // Separate large and small projects
  const largeProjects = featuredProjectsData.filter(project => project.isLarge);
  const smallProjects = featuredProjectsData.filter(project => !project.isLarge);

  return (
    <div className="bg-gray-50 py-8 pt-4">
      <div className="container mx-auto px-4">
        {/* Large Projects Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-inplast-blue mb-8 border-b pb-2">Крупные проекты</h2>
          <div className="space-y-8">
            {largeProjects.map((project, index) => (
              <LargeProjectCard key={project.id} project={project} reverseLayout={index % 2 !== 0} />
            ))}
          </div>
        </div>
        
        {/* Small Projects Section */}
        <div>
          <h2 className="text-2xl font-semibold text-inplast-blue mb-8 border-b pb-2">Другие проекты</h2>
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
