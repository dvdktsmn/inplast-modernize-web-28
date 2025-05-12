
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedProjects from '@/components/featured-projects/FeaturedProjects';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20 pt-24 bg-gray-50"> {/* Updated padding to match other pages */}
        <div className="container mx-auto px-4">
          <FeaturedProjects />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
