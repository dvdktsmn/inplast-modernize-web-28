
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-inplast-blue">
            Inplast <span className="text-inplast-darkgray">Holding</span>
          </h1>
        </div>
        
        <div className="hidden lg:flex space-x-8">
          <a href="#about" className="text-inplast-darkgray hover:text-inplast-blue transition-colors">About</a>
          <a href="#services" className="text-inplast-darkgray hover:text-inplast-blue transition-colors">Services</a>
          <a href="#contact" className="text-inplast-darkgray hover:text-inplast-blue transition-colors">Contact</a>
        </div>
        
        <Button className="bg-inplast-blue hover:bg-inplast-darkblue text-white">
          Get in Touch
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
