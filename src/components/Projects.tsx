
import React from 'react';
import ProjectCarousel from './projects/ProjectCarousel';
import { projectsData } from './projects/ProjectData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful industrial transformation projects across the globe
          </p>
        </div>

        <ProjectCarousel projects={projectsData} />
      </div>
    </section>
  );
};

export default Projects;
