
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
    <div className="relative h-[70vh] md:h-[50vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.4)"
        }}
      ></div>
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full max-w-3xl mx-auto text-center px-4 py-8">
        <div className="text-white font-bold text-4xl md:text-5xl mb-4 md:mb-6 animate-fade-in">
          BPL Engineering
        </div>
        <p className="text-sm md:text-base lg:text-lg text-white max-w-2xl mb-6 md:mb-8 animate-fade-in leading-relaxed">
          Комплексные промышленные решения для модернизации, перемещения и ввода в эксплуатацию оборудования
        </p>
        <div className="flex flex-col gap-3 md:gap-4 animate-fade-in w-full max-w-sm md:max-w-none md:flex-row">
          <Button 
            className="bg-inplast-blue hover:bg-inplast-orange text-white px-4 py-3 md:px-6 md:py-4 w-full md:w-[180px] text-sm md:text-base" 
            onClick={() => scrollToSection('products')}
          >
            Области экспертизы
          </Button>
          <Button 
            className="bg-inplast-blue hover:bg-inplast-orange text-white px-4 py-3 md:px-6 md:py-4 w-full md:w-[180px] text-sm md:text-base" 
            onClick={() => scrollToSection('services')}
          >
            Наши услуги
          </Button>
          <Button 
            className="bg-inplast-blue hover:bg-inplast-orange text-white px-4 py-3 md:px-6 md:py-4 w-full md:w-[180px] text-sm md:text-base" 
            onClick={() => scrollToSection('projects')}
          >
            Ключевые проекты
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
