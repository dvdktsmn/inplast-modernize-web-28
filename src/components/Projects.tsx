
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Projects = () => {
  const projects = [
    {
      title: "BOPP Line Relocation",
      location: "Hefei, China to Moscow, Russia",
      image: "/lovable-uploads/4c257c37-8c64-4c31-bcea-916d3639fd25.png",
      description: "Complete disassembly, packaging, and relocation of a large-scale BOPP production line across continents."
    },
    {
      title: "Factory Modernization",
      location: "Warsaw, Poland",
      image: "/lovable-uploads/58d6f434-7c79-4e4e-b8c9-e60fad6a246d.png",
      description: "Full overhaul and modernization of outdated equipment to increase production efficiency by 35%."
    },
    {
      title: "Equipment Installation",
      location: "Bucharest, Romania",
      image: "/lovable-uploads/11e7e270-577f-48ad-b96c-d2396dcd6bc8.png",
      description: "Installation and commissioning of a new production line in a newly constructed facility."
    },
    {
      title: "Precision Machinery Transport",
      location: "Berlin, Germany",
      image: "/lovable-uploads/cff828aa-5bb4-4bdd-b226-da4108c92879.png",
      description: "Specialized transport solutions for sensitive industrial equipment across European borders."
    },
    {
      title: "Control System Upgrade",
      location: "Helsinki, Finland",
      image: "/lovable-uploads/69f9e44d-caa4-4361-8d49-190c6120084a.png",
      description: "Complete electrical and automation system upgrade for an aging manufacturing plant."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful industrial transformation projects across the globe
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="bg-white rounded-xl overflow-hidden shadow-md h-full">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-inplast-darkblue mb-1">{project.title}</h3>
                    <p className="text-sm text-inplast-blue mb-4">{project.location}</p>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 -translate-x-1/2" />
          <CarouselNext className="absolute right-0 translate-x-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
