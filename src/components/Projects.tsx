
import React, { useState, useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const interactionRef = useRef<number>(Date.now());
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  
  const projects = [{
    title: "BOPP Line Relocation",
    location: "Hefei, China to Europe",
    image: "/lovable-uploads/4c257c37-8c64-4c31-bcea-916d3639fd25.png",
    description: "Complete disassembly, relocation and reinstallation of a large-scale BOPP production line across continents.",
    beforeImages: ["/lovable-uploads/d8c9d55c-2e20-4b44-8d69-cf877a6c22d3.png", "/lovable-uploads/22b5021e-4336-432d-88c2-bf9cb164f91e.png", "/lovable-uploads/1cd4d9cf-1717-4710-a49b-4b41fc973da6.png"],
    afterImages: ["/lovable-uploads/e42d7b0d-ec79-4a41-82b9-27dafabdfb9a.png", "/lovable-uploads/fb4c7c14-fa91-430e-b052-a3ab24cbfa6d.png", "/lovable-uploads/ddac229c-45ea-423a-96fb-5faedf762f2e.png"]
  }, {
    title: "Factory Modernization",
    location: "Warsaw, Poland",
    image: "/lovable-uploads/58d6f434-7c79-4e4e-b8c9-e60fad6a246d.png",
    description: "Full overhaul and modernization of outdated equipment to increase production efficiency.",
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
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
  */];
  
  const handleProjectChange = (index: number) => {
    setCurrentProject(index);
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
    resetAutoScroll();
  };
  
  const goToNextProject = () => {
    const nextIndex = currentProject === projects.length - 1 ? 0 : currentProject + 1;
    setCurrentProject(nextIndex);
    if (emblaApi) {
      emblaApi.scrollTo(nextIndex);
    }
    resetAutoScroll();
  };
  
  const goToPrevProject = () => {
    const prevIndex = currentProject === 0 ? projects.length - 1 : currentProject - 1;
    setCurrentProject(prevIndex);
    if (emblaApi) {
      emblaApi.scrollTo(prevIndex);
    }
    resetAutoScroll();
  };
  
  const resetAutoScroll = () => {
    interactionRef.current = Date.now();
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    // Set up the timer to check every 5 seconds instead of every second
    timerRef.current = setInterval(() => {
      const timeSinceLastInteraction = Date.now() - interactionRef.current;
      if (timeSinceLastInteraction >= 3000) { // Still wait 3 seconds of inactivity
        interactionRef.current = Date.now(); //reset timer
        goToNextProject(); // Directly call goToNextProject for smoother transition
        
      }
    }, 1000); // Check every 5 seconds instead of every 1 second
  };
  
  useEffect(() => {
    // Set up auto-scrolling timer
    resetAutoScroll();

    // Handle user interaction to reset timer - only clicks and touches, not mouse movement
    const handleUserInteraction = () => {
      interactionRef.current = Date.now();
    };
    
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.addEventListener('click', handleUserInteraction);
      projectsSection.addEventListener('touchstart', handleUserInteraction);
    }
    
    // Handle carousel changes
    const onEmblaSelect = () => {
      if (emblaApi) {
        const selectedIndex = emblaApi.selectedScrollSnap();
        setCurrentProject(selectedIndex);
      }
    };
    
    if (emblaApi) {
      emblaApi.on('select', onEmblaSelect);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (projectsSection) {
        projectsSection.removeEventListener('click', handleUserInteraction);
        projectsSection.removeEventListener('touchstart', handleUserInteraction);
      }
      if (emblaApi) {
        emblaApi.off('select', onEmblaSelect);
      }
    };
  }, [emblaApi]);
  
  const renderProjectContent = (project: any, index: number) => {
    if (index === 0) {
      // BOPP Line Relocation - Two Carousels (Before/After)
      return <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before Photos */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md p-4">
              <h4 className="text-lg font-semibold mb-4 text-inplast-teal">Before</h4>
              <Carousel className="w-full relative">
                <CarouselContent>
                  {project.beforeImages.map((image: string, i: number) => <CarouselItem key={i} className="basis-full">
                      <div className="h-64 overflow-hidden rounded-md">
                        <img src={image} alt={`Before relocation ${i + 1}`} className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
            
            {/* After Photos */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md p-4">
              <h4 className="text-lg font-semibold mb-4 text-inplast-teal">After</h4>
              <Carousel className="w-full relative">
                <CarouselContent>
                  {project.afterImages.map((image: string, i: number) => <CarouselItem key={i} className="basis-full">
                      <div className="h-64 overflow-hidden rounded-md">
                        <img src={image} alt={`After relocation ${i + 1}`} className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>
        </div>;
    } else if (index === 1) {
      // Factory Modernization - One carousel with two photos at a time
      return <div className="mt-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-md p-4">
            <h4 className="text-lg font-semibold mb-4 text-inplast-teal">Modernization Gallery</h4>
            <Carousel className="w-full relative">
              <CarouselContent>
                {project.galleryImages.map((image: string, i: number) => <CarouselItem key={i} className="md:basis-1/2">
                    <div className="h-64 overflow-hidden rounded-md p-2">
                      <img src={image} alt={`Modernization photo ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>;
    }

    // Default for other projects (just show the main image)
    return <div className="mt-8">
        <div className="bg-white rounded-xl overflow-hidden shadow-md">
          <div className="h-80 overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>;
  };
  
  return <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful industrial transformation projects across the globe
          </p>
        </div>

        {/* Main Project Display with navigation arrows positioned completely outside the frame */}
        <div className="max-w-5xl mx-auto relative">
          {/* Left arrow positioned at the middle left edge, further outside */}
          <Button variant="outline" size="icon" onClick={goToPrevProject} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full -ml-12 bg-white shadow-md hover:bg-inplast-teal hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Previous project</span>
          </Button>
          
          {/* Main carousel for project transitions */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`flex-[0_0_100%] min-w-0 transition-opacity duration-500 ${currentProject === index ? 'opacity-100' : 'opacity-0'}`}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6">
                    <h3 className="text-2xl font-bold text-inplast-teal mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {project.location}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    
                    {/* Dynamic content based on project type */}
                    {renderProjectContent(project, index)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right arrow positioned at the middle right edge, further outside */}
          <Button variant="outline" size="icon" className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full -mr-12 bg-white shadow-md hover:bg-inplast-teal hover:text-white" onClick={goToNextProject}>
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next project</span>
          </Button>
          
          {/* Bullet point navigation */}
          <div className="mt-8 flex justify-center">
            <div className="flex gap-3">
              {projects.map((_, index) => <button key={index} onClick={() => handleProjectChange(index)} className={`w-3 h-3 rounded-full transition-all ${currentProject === index ? 'bg-inplast-teal scale-125' : 'bg-gray-300 hover:bg-gray-400'}`} aria-label={`Go to project ${index + 1}`} />)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Projects;
