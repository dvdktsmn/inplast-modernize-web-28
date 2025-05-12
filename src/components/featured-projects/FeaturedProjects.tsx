
import React from 'react';
import LargeProjectCard from './LargeProjectCard';
import SmallProjectCard from './SmallProjectCard';
import { featuredProjectsData } from './ProjectsData';

const FeaturedProjects = () => {
  return (
    <>
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Browse our portfolio of successful industrial modernization, relocation, and installation projects from around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {featuredProjectsData.map((project, index) => 
          index === 0 ? (
            <LargeProjectCard key={index} project={project} />
          ) : (
            <SmallProjectCard key={index} project={project} />
          )
        )}
      </div>
    </>
  );
};

export default FeaturedProjects;
