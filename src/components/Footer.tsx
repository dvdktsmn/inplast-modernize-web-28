
import React from 'react';
import { Link } from 'react-router-dom';

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
              <li><Link to="/" className="text-gray-600 hover:text-inplast-teal transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-inplast-teal transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-inplast-teal transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-600 hover:text-inplast-teal transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-inplast-teal transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/overhaul" className="text-gray-600 hover:text-inplast-teal transition-colors">Equipment Overhaul</Link></li>
              <li><Link to="/services/engineering" className="text-gray-600 hover:text-inplast-teal transition-colors">Engineering & Control Systems</Link></li>
              <li><Link to="/services/installation" className="text-gray-600 hover:text-inplast-teal transition-colors">Installation & Commissioning</Link></li>
              <li><Link to="/services/relocation" className="text-gray-600 hover:text-inplast-teal transition-colors">Equipment Relocation</Link></li>
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
