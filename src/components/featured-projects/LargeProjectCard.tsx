
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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface LargeProjectCardProps {
  project: FeaturedProject;
  reverseLayout?: boolean;
}

const LargeProjectCard = ({ project, reverseLayout = false }: LargeProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${reverseLayout ? 'md:flex-row-reverse' : ''} md:flex flex-col`}>
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
      <div className="p-6 md:p-8 md:w-1/2 flex flex-col">
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
        
        <Collapsible className="mt-auto">
          <CollapsibleTrigger className="w-full mt-6">
            <Button 
              variant="outline" 
              className="w-full border-inplast-teal text-inplast-teal hover:bg-inplast-teal/10"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Show Less" : "Read More"} {expanded ? <ChevronUp className="ml-2" size={16} /> : <ChevronDown className="ml-2" size={16} />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-6">
            <div className={`md:grid md:grid-cols-2 md:gap-8 ${reverseLayout ? 'md:flex-row-reverse' : ''}`}>
              {/* Photos Column - Always on the same side as the main carousel */}
              <div className={`${reverseLayout ? 'md:order-2' : 'md:order-1'}`}>
                <h4 className="text-xl font-semibold mb-4 text-inplast-teal">Project Gallery</h4>
                <div className="space-y-4">
                  {project.images.map((image, index) => (
                    <div key={`expanded-image-${index}`} className="rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={image} 
                        alt={`${project.title} - gallery image ${index + 1}`} 
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Additional Text Column - Always on the same side as the main text */}
              <div className={`mt-8 md:mt-0 ${reverseLayout ? 'md:order-1' : 'md:order-2'}`}>
                <h4 className="text-xl font-semibold mb-4 text-inplast-teal">Project Details</h4>
                
                <h5 className="font-semibold text-lg mb-2 text-gray-800">Challenge</h5>
                <p className="mb-4 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo velit. Nullam vehicula magna quis tortor efficitur.</p>
                
                <h5 className="font-semibold text-lg mb-2 text-gray-800">Solution</h5>
                <p className="mb-4 text-gray-700">Phasellus eu neque eget nunc convallis convallis. Suspendisse tempus velit in enim eleifend, vel fringilla odio fermentum.</p>
                
                <h5 className="font-semibold text-lg mb-2 text-gray-800">Technology</h5>
                <p className="mb-4 text-gray-700">Maecenas volutpat odio at felis volutpat, at tempor urna tempus. Suspendisse volutpat cursus vehicula.</p>
                
                <h5 className="font-semibold text-lg mb-2 text-gray-800">Implementation</h5>
                <p className="mb-4 text-gray-700">Vivamus tincidunt, est id convallis faucibus, nulla urna dignissim ex, sed consectetur magna dolor non purus.</p>
                
                <h5 className="font-semibold text-lg mb-2 text-gray-800">Results</h5>
                <p className="mb-4 text-gray-700">Curabitur varius dui in justo placerat, nec elementum nibh posuere. Nunc bibendum, neque ut ultrices tempor.</p>
                
                <h5 className="font-semibold text-lg mb-2 text-gray-800">Client Feedback</h5>
                <p className="mb-4 text-gray-700">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris justo odio.</p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default LargeProjectCard;
