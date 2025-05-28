import React, { useState } from 'react';
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
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64; // approximate navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };
  
  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      scrollToSection(sectionId);
    }
  };
  
  return (
    <div className="fixed top-0 left-0 right-0 bg-inplast-blue z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2">
        <div className="flex items-center">
          <Link to="/">
            <div className="text-white font-bold text-xl mr-3 py-3">
              BPL Engineering
            </div>
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
              className="text-white hover:text-inplast-orange transition-colors cursor-pointer"
            >
              О нас
            </a>
          ) : (
            <Link 
              to="/" 
              className="text-white hover:text-inplast-orange transition-colors cursor-pointer"
            >
              Главная
            </Link>
          )}
          {isHomePage ? (
            <a 
              href="/#products" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('products');
              }}
              className="text-white hover:text-inplast-orange transition-colors cursor-pointer"
            >
              Экспертиза
            </a>
          ) : (
          <Link 
            to="/products"
            className="text-white hover:text-inplast-orange transition-colors cursor-pointer"
          >
            Экспертиза
          </Link>
          )}
          {isHomePage ? (
            <a 
              href="/#services" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="text-white hover:text-inplast-orange transition-colors cursor-pointer"
            >
              Услуги
            </a>
          ) : (
          <Link 
            to="/services"
            className="text-white hover:text-inplast-orange transition-colors cursor-pointer"
          >
            Услуги
          </Link>
          )}
          {isHomePage ? (
            <a 
              href="/#projects" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="text-white hover:text-inplast-orange transition-colors cursor-pointer"
            >
              Проекты
            </a>
          ) : (
            <Link 
              to="/projects" 
              className="text-white hover:text-inplast-orange transition-colors cursor-pointer"
            >
              Проекты
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
              className="text-white hover:text-inplast-orange transition-colors cursor-pointer border-white hover:border-inplast-orange"
            >
              <Button className="bg-inplast-blue hover:bg-inplast-blue text-white hover:text-inplast-orange border-white hover:border-inplast-orange">
              Связаться с нами
                </Button>
            </a>
          ) : (
          <Link to="/contact">
            <Button className="bg-inplast-blue hover:bg-inplast-blue text-white hover:text-inplast-orange border-white hover:border-inplast-orange">
              Связаться с нами
            </Button>
          </Link>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="border-white text-white bg-inplast-orange border-inplast-orange hover:bg-inplast-inplast-orange hover:border-inplast-blue">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-white">
              <DropdownMenuItem>
                <Link to="/" className="w-full">Главная</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/products" className="w-full">Экспертиза</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/services" className="w-full">Услуги</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/projects" className="w-full">Проекты</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/contact" className="w-full">Контакты</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
