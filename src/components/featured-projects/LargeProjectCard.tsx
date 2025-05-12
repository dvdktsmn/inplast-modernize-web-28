
import React, { useState } from 'react';
import { FeaturedProject } from './ProjectsData';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface LargeProjectCardProps {
  project: FeaturedProject;
  reverseLayout?: boolean;
}

const LargeProjectCard = ({ project, reverseLayout = false }: LargeProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Preview card - always visible */}
      <div className={`${reverseLayout ? 'md:flex-row-reverse' : ''} md:flex`}>
        {/* Image Carousel - 50% width on desktop, full width on mobile */}
        <div className="md:w-1/2">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-64 md:h-96 w-full">
                    <AspectRatio ratio={16 / 9} className="h-full">
                      <img 
                        src={image} 
                        alt={`${project.title} - image ${index + 1}`}
                        className="rounded-t-xl md:rounded-t-none md:rounded-l-xl object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        
        {/* Project details - 50% width on desktop, full width on mobile */}
        <div className="p-6 md:p-8 md:w-1/2">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-3xl font-bold text-inplast-teal">{project.title}</h3>
            {project.completionDate && (
              <span className="text-sm text-gray-500">Completed: {project.completionDate}</span>
            )}
          </div>
          
          <div className="flex items-center mb-6">
            <span className="text-gray-600 font-medium">{project.location}</span>
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
          
          {project.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map(tag => (
                <Badge key={tag} variant="outline" className="bg-gray-50">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Read More Button - full width */}
      <div className="px-6 py-4 border-t border-gray-100 flex justify-center">
        <Button 
          variant="outline" 
          onClick={toggleExpand} 
          className="w-full max-w-xs text-inplast-teal border-inplast-teal hover:bg-inplast-teal/10"
        >
          {isExpanded ? (
            <>
              Read Less <ChevronUp className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              Read More <ChevronDown className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className={`border-t border-gray-100 ${reverseLayout ? 'md:flex-row-reverse' : ''} md:flex`}>
          {/* Vertical Image Gallery - follows same side as the carousel above */}
          <div className="md:w-1/2 p-6">
            <h4 className="text-xl font-semibold text-inplast-teal mb-4">Project Gallery</h4>
            <div className="h-auto">
              <Carousel orientation="vertical" className="w-full h-full">
                <CarouselContent className="h-full">
                  {project.images.map((image, index) => (
                    <CarouselItem key={`expanded-${index}`} className="h-full pt-4 md:pt-6">
                      <AspectRatio ratio={4 / 3} className="h-full">
                        <img 
                          src={image} 
                          alt={`${project.title} - detail ${index + 1}`}
                          className="rounded-lg object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
          
          {/* Expanded Text Content - follows same side as the text above */}
          <div className="md:w-1/2 p-6">
            <div className="space-y-6">
              <section>
                <h4 className="text-xl font-semibold text-inplast-teal mb-2">Project Overview</h4>
                <p className="text-gray-700">
                  The {project.title} project represents a significant achievement in industrial equipment 
                  relocation and modernization. Our team worked diligently to ensure all specifications were 
                  met while maintaining the highest standards of quality and safety.
                </p>
              </section>
              
              <section>
                <h4 className="text-xl font-semibold text-inplast-teal mb-2">Technical Challenges</h4>
                <p className="text-gray-700">
                  One of the primary challenges we faced was the complex logistics of transporting sensitive 
                  equipment across international borders. We developed a comprehensive transportation plan that 
                  minimized risks and ensured the equipment arrived in optimal condition.
                </p>
              </section>
              
              <section>
                <h4 className="text-xl font-semibold text-inplast-teal mb-2">Implementation Process</h4>
                <p className="text-gray-700">
                  Our implementation strategy was divided into three phases: disassembly, transport, and 
                  reinstallation. Each phase was carefully planned and executed by our specialized teams, 
                  ensuring minimal downtime and maximum efficiency throughout the project lifecycle.
                </p>
              </section>
              
              <section>
                <h4 className="text-xl font-semibold text-inplast-teal mb-2">Equipment Specifications</h4>
                <p className="text-gray-700">
                  The equipment included cutting-edge technology with precise specifications that required 
                  expert handling. Our technical team conducted thorough assessments before, during, and 
                  after relocation to ensure all systems functioned according to manufacturer standards.
                </p>
              </section>
              
              <section>
                <h4 className="text-xl font-semibold text-inplast-teal mb-2">Client Benefits</h4>
                <p className="text-gray-700">
                  Following project completion, our client experienced a significant increase in production 
                  efficiency and reduced operational costs. The modernized equipment also improved energy 
                  efficiency, contributing to the client's sustainability goals and reducing their carbon footprint.
                </p>
              </section>
              
              <section>
                <h4 className="text-xl font-semibold text-inplast-teal mb-2">Future Considerations</h4>
                <p className="text-gray-700">
                  As part of our commitment to ongoing support, we've developed a maintenance schedule and 
                  training program for the client's technical staff. This ensures the equipment will continue 
                  to operate at peak efficiency for years to come, maximizing the return on investment.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LargeProjectCard;
