
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">          
          <div className="w-full">
            <div className="flex items-center mb-6 justify-center">
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            </div>
            
            {/* 
            <div className="mb-8">
              <img 
                src="/lovable-uploads/99a847fd-71f3-4e06-a241-fb9739d1979b.png" 
                alt="Inplast Novex Logo" 
                className="h-12 mb-4"
              />
              <p className="text-gray-600 italic">Part of Inplast Holding</p>
            </div>
            */}
            
            <p className="text-lg text-gray-600 mb-6">
              We provide a complete suite of industrial solutions designed to optimize and future-proof your operations. From single piece equipment modernization and control system upgrades to turnkey installation projects and full-scale production line assembly, we are your trusted partner for reliable and efficient execution across every phase of your production lifecycle.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our services include custom electrical and mechanical design, advanced control and automation system integration, precision motion control, equipment dismantling and reassembly, transportation logistics, and energy efficiency monitoring. We also provide complete equipment upgrades and overhauls, including retrofitting and performance validation, to help you extend the life and productivity of your existing assets.
            </p>

            <p className="text-lg text-gray-600">
              We deliver tailored engineering solutions that minimize downtime, maximize performance, and ensure your operations meet the demands of modern manufacturing environments.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
                <span className="text-3xl font-bold text-inplast-teal mb-2">25+</span>
                <span className="text-gray-600 text-center">Years Experience</span>
              </div>
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
                <span className="text-3xl font-bold text-inplast-teal mb-2">50+</span>
                <span className="text-gray-600 text-center">Projects Completed</span>
              </div>
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
                <span className="text-3xl font-bold text-inplast-teal mb-2">24/7</span>
                <span className="text-gray-600 text-center">Global Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
