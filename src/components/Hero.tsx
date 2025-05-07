
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/lovable-uploads/204fc108-1cee-4ddc-aa1a-1bbfbe7de4b7.png')",
          filter: "brightness(0.4)"
        }}
      ></div>
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full container mx-auto text-center px-4">
        <img 
          src="/lovable-uploads/99a847fd-71f3-4e06-a241-fb9739d1979b.png" 
          alt="Inplast Novex Logo" 
          className="h-20 md:h-24 mb-8 animate-fade-in"
        />
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 animate-fade-in">
          Innovation, Engineering, Excellence
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 animate-fade-in">
          Comprehensive industrial solutions for equipment installation, modernizaition and dismantling
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Button 
            className="bg-inplast-teal hover:bg-inplast-darkgray text-white text-lg px-8 py-6"
            onClick={() => scrollToSection('services')}
          >
            Our Services
          </Button>
          <Button 
            /*variant="outline"*/ 
            className="bg-inplast-teal hover:bg-inplast-darkgray text-white text-lg px-8 py-6"
            onClick={() => scrollToSection('contact')}
          >
            Project Highlights
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
