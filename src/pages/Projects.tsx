
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedProjects from '@/components/featured-projects/FeaturedProjects';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20"> {/* Add padding to account for fixed navbar */}
        <FeaturedProjects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
