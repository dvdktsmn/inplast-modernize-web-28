
import React from 'react';
import ServicesList from './services/ServicesList';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-inplast-blue mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предоставляем полный спектр промышленных услуг от капитального ремонта и замены устаревших деталей оборудования с его модернизацией до установки комплексных производственных линий и реализации проектов "под ключ".
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
