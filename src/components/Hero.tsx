
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
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
          src="/lovable-uploads/4a230efd-650f-40b3-ab51-458d4ff53ad8.png" 
          alt="Inplast Novex Logo" 
          className="h-20 md:h-24 mb-8 animate-fade-in"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          <span className="text-inplast-teal">Inplast Holding</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-8 animate-fade-in">
          Innovation, Engineering, Excellence
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10 animate-fade-in">
          Comprehensive industrial solutions for equipment dismantling, overhaul, and installation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Button className="bg-inplast-teal hover:bg-inplast-darkgray text-white text-lg px-8 py-6">
            Our Services
          </Button>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
