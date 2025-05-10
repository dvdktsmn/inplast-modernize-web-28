
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

interface LargeProjectCardProps {
  project: FeaturedProject;
  reverseLayout?: boolean;
}

const LargeProjectCard = ({ project, reverseLayout = false }: LargeProjectCardProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${reverseLayout ? 'md:flex-row-reverse' : ''} md:flex`}>
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
  );
};

export default LargeProjectCard;
