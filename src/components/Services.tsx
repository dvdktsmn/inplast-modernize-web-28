
import React from 'react';
import ServicesList from './services/ServicesList';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive range of industrial services spans from equipment modernization and upgrading to full production line installation and turnkey projects.
          </p>
        </div>

        <div className="mt-16">
          <ServicesList />
        </div>
      </div>
    </section>
  );
};

export default Services;
