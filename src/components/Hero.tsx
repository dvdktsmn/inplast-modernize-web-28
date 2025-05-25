import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="relative h-[50vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.4)"
        }}
      ></div>
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full container mx-auto text-center px-4 py-8">
        <img 
          src="/lovable-uploads/99a847fd-71f3-4e06-a241-fb9739d1979b.png" 
          alt="Inplast Novex Logo" 
          className="h-16 md:h-20 mb-6 animate-fade-in" 
        />
        <h2 className="text-xl md:text-2xl font-medium text-white mb-4 animate-fade-in">
          Innovation, Engineering, Excellence
        </h2>
        <p className="text-base md:text-lg text-white max-w-2xl mb-8 animate-fade-in">
          Comprehensive industrial solutions for equipment upgrades, relocation and comissioning
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Button 
            className="bg-inplast-blue hover:bg-inplast-orange text-white px-6 py-4 w-full sm:w-[180px]" 
            onClick={() => scrollToSection('products')}
          >
            Equipment Expertise
          </Button>
          <Button 
            className="bg-inplast-blue hover:bg-inplast-orange text-white px-6 py-4 w-full sm:w-[180px]" 
            onClick={() => scrollToSection('services')}
          >
            Our Services
          </Button>
          <Button 
            className="bg-inplast-blue hover:bg-inplast-orange text-white px-6 py-4 w-full sm:w-[180px]" 
            onClick={() => scrollToSection('projects')}
          >
            Project Highlights
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
