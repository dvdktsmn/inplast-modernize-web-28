
import React from 'react';
import LargeProjectCard from './LargeProjectCard';
import SmallProjectCard from './SmallProjectCard';
import { featuredProjectsData } from './ProjectsData';

const FeaturedProjects = () => {
  // Separate first project (large) from the rest (small)
  const firstProject = featuredProjectsData.length > 0 ? featuredProjectsData[0] : null;
  const smallProjects = featuredProjectsData.slice(1);

  return (
    <>
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Browse our portfolio of successful industrial modernization, relocation, and installation projects from around the world.
        </p>
      </div>

      {/* Large project card - full width */}
      {firstProject && (
        <div className="mb-10">
          <LargeProjectCard project={firstProject} />
        </div>
      )}

      {/* Small project cards - 2 per row on medium screens and up */}
      {smallProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {smallProjects.map((project, index) => (
            <SmallProjectCard key={index} project={project} />
          ))}
        </div>
      )}
    </>
  );
};

export default FeaturedProjects;
