
import React, { useState, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ProjectNavigation from './ProjectNavigation';
import ProjectContent from './ProjectContent';
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  location: string;
  image: string;
  description: string;
  beforeImages?: string[];
  afterImages?: string[];
  galleryImages?: string[];
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [currentProject, setCurrentProject] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const interactionRef = useRef<number>(Date.now());
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const checkInterval = 7000 //scroll projects every 7 seconds
  
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
    
    // Clear any existing timer to prevent multiple timers running simultaneously
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    // Set up the auto-scroll timer
    timerRef.current = setInterval(() => {
      const timeSinceLastInteraction = Date.now() - interactionRef.current;
      if (timeSinceLastInteraction >= checkInterval) { // Wait n seconds of inactivity
        // Explicitly handle looping back to the first project
        const nextIndex = currentProject === projects.length - 1 ? 0 : currentProject + 1;
        setCurrentProject(nextIndex);
        if (emblaApi) {
          emblaApi.scrollTo(nextIndex);
        }
        // Reset the interaction time to prevent immediate next scroll
        interactionRef.current = Date.now();
      }
    }, checkInterval); // Check every n seconds
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
        resetAutoScroll(); // Reset the auto-scroll timer when the carousel changes
      }
    };
    
    if (emblaApi) {
      emblaApi.on('select', onEmblaSelect);
    }
    
    return () => {
      // Important: Clear the interval when component unmounts
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
  }, [emblaApi, currentProject, projects.length]); // Added currentProject and projects.length as dependencies
  
  return (
    <div className="max-w-5xl mx-auto relative">
      {/* Main carousel for project transitions */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex-[0_0_100%] min-w-0 transition-opacity duration-500 ${currentProject === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6">
                <Link to="/projects" className="inline-block">
                  <h3 className="text-2xl font-bold text-inplast-blue mb-1 hover:underline">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-sm text-gray-500 mb-4">
                  {project.location}
                </p>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                {/* Dynamic content based on project type */}
                <ProjectContent project={project} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ProjectNavigation 
        goToPrevProject={goToPrevProject}
        goToNextProject={goToNextProject}
        currentProject={currentProject}
        totalProjects={projects.length}
        handleProjectChange={handleProjectChange}
      />
    </div>
  );
};

export default ProjectCarousel;
