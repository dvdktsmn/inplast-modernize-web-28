
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Menu } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  
  // Calculate scrollbar width on mount
  useEffect(() => {
    const scrollDiv = document.createElement('div');
    scrollDiv.style.width = '100px';
    scrollDiv.style.height = '100px';
    scrollDiv.style.overflow = 'scroll';
    scrollDiv.style.position = 'absolute';
    scrollDiv.style.top = '-9999px';
    document.body.appendChild(scrollDiv);
    
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    setScrollbarWidth(scrollbarWidth);
    
    document.body.removeChild(scrollDiv);
  }, []);

  // Handle dropdown open/close
  const handleDropdownOpenChange = (open: boolean) => {
    if (open) {
      // When dropdown opens - add padding to prevent shift
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflowY = 'hidden';
    } else {
      // When dropdown closes - remove padding
      document.body.style.paddingRight = '0';
      document.body.style.overflowY = 'auto';
    }
  };
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      scrollToSection(sectionId);
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
          {isHomePage ? (
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
          ) : (
            <Link 
              to="/" 
              className="text-inplast-darkgray hover:text-inplast-teal transition-colors cursor-pointer"
            >
              Mission
            </Link>
          )}
          {isHomePage ? (
            <a 
              href="/#products" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('products');
              }}
              className="text-inplast-darkgray hover:text-inplast-teal transition-colors cursor-pointer"
            >
              Products
            </a>
          ) : (
          <Link 
            to="/products"
            className="text-inplast-darkgray hover:text-inplast-teal transition-colors cursor-pointer"
          >
            Products
          </Link>
          )}
          {isHomePage ? (
            <a 
              href="/#services" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="text-inplast-darkgray hover:text-inplast-teal transition-colors cursor-pointer"
            >
              Services
            </a>
          ) : (
          <Link 
            to="/services"
            className="text-inplast-darkgray hover:text-inplast-teal transition-colors cursor-pointer"
          >
            Services
          </Link>
          )}
          {isHomePage ? (
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
          ) : (
            <Link 
              to="/projects" 
              className="text-inplast-darkgray hover:text-inplast-teal transition-colors cursor-pointer"
            >
              Projects
            </Link>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          {isHomePage ? (
            <a 
              href="/#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="text-inplast-darkgray hover:text-inplast-teal transition-colors cursor-pointer"
            >
              <Button className="bg-inplast-teal hover:bg-inplast-darkgray text-white">
              Contact Us
                </Button>
            </a>
          ) : (
          <Link to="/contact">
            <Button className="bg-inplast-teal hover:bg-inplast-darkgray text-white">
              Contact Us
            </Button>
          </Link>
          )}
          <DropdownMenu onOpenChange={handleDropdownOpenChange}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-white">
              <DropdownMenuItem>
                <Link to="/" className="w-full">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/products" className="w-full">Products</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services" className="w-full">Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/projects" className="w-full">Projects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/contact" className="w-full">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
