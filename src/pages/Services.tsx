
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesList from '../components/services/ServicesList';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-20 pt-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive range of industrial services spans from equipment modernization and upgrading to full production line installation and turnkey projects.
            </p>
          </div>

          <ServicesList isStandalone={true} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
