
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/99a847fd-71f3-4e06-a241-fb9739d1979b.png" 
              alt="Inplast Novex Logo" 
              className="h-12 mr-3"
            />
          </Link>
        </div>
        
        <div className="hidden lg:flex space-x-8">
          <a 
            href="/#about" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            className="text-inplast-darkgray hover:text-inplast-teal transition-colors cursor-pointer"
          >
            Mission
          </a>
          <a 
            href="/#about" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('products');
            }}
            className="text-inplast-darkgray hover:text-inplast-teal transition-colors cursor-pointer"
          >
            Products
          </a>
          <Link 
            to="/services"
            className="text-inplast-darkgray hover:text-inplast-teal transition-colors cursor-pointer"
          >
            Services
          </Link>
          <a 
            href="/#projects" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            className="text-inplast-darkgray hover:text-inplast-teal transition-colors cursor-pointer"
          >
            Projects
          </a>
          {/*
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="text-inplast-darkgray hover:text-inplast-teal transition-colors cursor-pointer"
          >
            Contact
          </a>
          */}
        </div>
        
        <Button 
          className="bg-inplast-teal hover:bg-inplast-darkgray text-white"
          onClick={() => scrollToSection('contact')}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
