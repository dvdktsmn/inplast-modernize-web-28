
import React from 'react';
import LargeProjectCard from './LargeProjectCard';
import SmallProjectCard from './SmallProjectCard';
import { featuredProjectsData } from './ProjectsData';

const FeaturedProjects = () => {
  // Get the first two projects for large display
  const largeProjects = featuredProjectsData.slice(0, 2);
  // Get the rest for small card display
  const smallProjects = featuredProjectsData.slice(2);

  return (
    <>
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our portfolio of successful industrial projects from around the world.
        </p>
      </div>

      {/* Large project cards - one per row with consistent spacing */}
      {largeProjects.length > 0 && (
        <div className="space-y-16">
          {largeProjects.map((project, index) => (
            <div key={index}>
              <LargeProjectCard project={project} reverseLayout={index % 2 === 1} />
            </div>
          ))}
        </div>
      )}

      {/* Add spacing between large and small project sections */}
      <div className="mb-16"></div>

      {/* Small project cards - 2 per row on medium screens and up */}
      {smallProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {smallProjects.map((project, index) => (
            <SmallProjectCard key={index} project={project} />
          ))}
        </div>
      )}
    </>
  );
};

export default FeaturedProjects;
