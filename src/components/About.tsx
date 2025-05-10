
import React from 'react';
import { Factory } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <img 
              src = "/placeholder.svg"
              /*src="/lovable-uploads/547afc9b-beb9-4b1a-b05e-0844c12e35f0.png" */
              alt="Industrial production line" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-6">
              <Factory className="mr-3 text-inplast-teal" size={32} />
              <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
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
              
            We specialize in delivering complete industrial solutions designed to optimize and future-proof your operations. From equipment modernization and control system upgrades to full-scale equipment relocation and turnkey installation projects, we are your trusted partner for reliable and efficient execution across every phase of your production lifecycle.
              </p>
              <p className="text-lg text-gray-600 mb-6">
Our services include custom electrical and mechanical design, advanced control and automation system integration, precision motion control, equipment dismantling and reassembly, transportation logistics, and energy efficiency monitoring. We also provide complete equipment overhauls and upgrades, including retrofitting and performance validation, to help you extend the life and productivity of your existing assets.
              </p>
            <p className="text-lg text-gray-600 mb-6">
With decades of industry experience and a focus on safety, quality, and innovation, we deliver tailored engineering solutions that minimize downtime, maximize performance, and ensure your operations meet the demands of modern manufacturing environments.  
            </p>
            <p className="text-lg text-gray-600">
              Our expertise spans continents, with proven performance in relocation, installation, modernization and dismantling of manufacturing production systems.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
                <span className="text-3xl font-bold text-inplast-teal mb-2">25+</span>
                <span className="text-gray-600 text-center">Years Experience</span>
              </div>
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
                <span className="text-3xl font-bold text-inplast-teal mb-2">10+</span>
                <span className="text-gray-600 text-center">Projects Completed</span>
              </div>
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
                <span className="text-3xl font-bold text-inplast-teal mb-2">4</span>
                <span className="text-gray-600 text-center">Industry Leaders</span>
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
