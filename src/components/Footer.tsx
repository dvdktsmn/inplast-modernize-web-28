
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="/lovable-uploads/99a847fd-71f3-4e06-a241-fb9739d1979b.png" 
              alt="Inplast Novex Logo" 
              className="h-12 mb-4"
            />
            <p className="text-gray-600 mb-4">
              Innovation, Engineering, Excellence in industrial equipment modernization and relocation.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 hover:text-inplast-teal transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-inplast-teal transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-inplast-teal transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-inplast-teal transition-colors">Dismantling</a></li>
              <li><a href="#" className="text-gray-600 hover:text-inplast-teal transition-colors">Packaging</a></li>
              <li><a href="#" className="text-gray-600 hover:text-inplast-teal transition-colors">Equipment Overhaul</a></li>
              <li><a href="#" className="text-gray-600 hover:text-inplast-teal transition-colors">Installation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Group Companies</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-inplast-teal transition-colors">Inplast Novex</a></li>
              {/*
              <li><a href="#" className="text-gray-600 hover:text-inplast-teal transition-colors">Novex</a></li>
              */}
              <li><a href="#" className="text-gray-600 hover:text-inplast-teal transition-colors">Visopack</a></li>
              <li><a href="#" className="text-gray-600 hover:text-inplast-teal transition-colors">Moplefan</a></li>
              <li><a href="#" className="text-gray-600 hover:text-inplast-teal transition-colors">InplastTech</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            © {currentYear} Inplast Holding. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-inplast-teal transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-inplast-teal transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
