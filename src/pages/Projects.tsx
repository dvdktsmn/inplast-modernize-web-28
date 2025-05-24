
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedProjects from '@/components/featured-projects/FeaturedProjects';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-20 pt-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-2">
            <h1 className="text-4xl font-bold text-inplast-blue mb-4">Featured Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our completed industrial projects showcasing our expertise across the world.
            </p>
          </div>

          <FeaturedProjects />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
