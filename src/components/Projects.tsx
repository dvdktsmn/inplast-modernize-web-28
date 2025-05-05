
import React, { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink 
} from "@/components/ui/pagination";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  
  const projects = [
    {
      title: "BOPP Line Relocation",
      location: "Hefei, China to Europe",
      image: "/lovable-uploads/4c257c37-8c64-4c31-bcea-916d3639fd25.png",
      description: "Complete disassembly, relocation and reinstallation of a large-scale BOPP production line across continents.",
      beforeImages: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
      ],
      afterImages: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
      ]
    },
    {
      title: "Factory Modernization",
      location: "Warsaw, Poland",
      image: "/lovable-uploads/58d6f434-7c79-4e4e-b8c9-e60fad6a246d.png",
      description: "Full overhaul and modernization of outdated equipment to increase production efficiency.",
      galleryImages: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
      ]
    }
    /*
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
    }
    {
      title: "Control System Upgrade",
      location: "Helsinki, Finland",
      image: "/lovable-uploads/69f9e44d-caa4-4361-8d49-190c6120084a.png",
      description: "Complete electrical and automation system upgrade for an aging manufacturing plant."
    }
    */
  ];

  const handleProjectChange = (index: number) => {
    setCurrentProject(index);
  };

  const renderProjectContent = (project: any, index: number) => {
    if (index === 0) {
      // BOPP Line Relocation - Two Carousels (Before/After)
      return (
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before Photos */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md p-4">
              <h4 className="text-lg font-semibold mb-4 text-inplast-teal">Before</h4>
              <Carousel className="w-full">
                <CarouselContent>
                  {project.beforeImages.map((image: string, i: number) => (
                    <CarouselItem key={i} className="basis-full">
                      <div className="h-64 overflow-hidden rounded-md">
                        <img 
                          src={image} 
                          alt={`Before relocation ${i+1}`}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
            
            {/* After Photos */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md p-4">
              <h4 className="text-lg font-semibold mb-4 text-inplast-teal">After</h4>
              <Carousel className="w-full">
                <CarouselContent>
                  {project.afterImages.map((image: string, i: number) => (
                    <CarouselItem key={i} className="basis-full">
                      <div className="h-64 overflow-hidden rounded-md">
                        <img 
                          src={image} 
                          alt={`After relocation ${i+1}`}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>
        </div>
      );
    } else if (index === 1) {
      // Factory Modernization - One carousel with two photos at a time
      return (
        <div className="mt-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-md p-4">
            <h4 className="text-lg font-semibold mb-4 text-inplast-teal">Modernization Gallery</h4>
            <Carousel className="w-full">
              <CarouselContent>
                {project.galleryImages.map((image: string, i: number) => (
                  <CarouselItem key={i} className="md:basis-1/2">
                    <div className="h-64 overflow-hidden rounded-md p-2">
                      <img 
                        src={image} 
                        alt={`Modernization photo ${i+1}`}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      );
    }
    
    // Default for other projects (just show the main image)
    return (
      <div className="mt-8">
        <div className="bg-white rounded-xl overflow-hidden shadow-md">
          <div className="h-80 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful industrial transformation projects across the globe
          </p>
        </div>

        {/* Main Project Display */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6">
            <h3 className="text-2xl font-bold text-inplast-teal mb-1">
              {projects[currentProject].title}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              {projects[currentProject].location}
            </p>
            <p className="text-gray-600 mb-4">
              {projects[currentProject].description}
            </p>
            
            {/* Dynamic content based on project type */}
            {renderProjectContent(projects[currentProject], currentProject)}
          </div>
          
          {/* Project Navigation */}
          <div className="mt-8">
            <Pagination>
              <PaginationContent>
                {projects.map((project, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      isActive={currentProject === index}
                      onClick={() => handleProjectChange(index)}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
