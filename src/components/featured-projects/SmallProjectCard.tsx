
import React, { useState } from 'react';
import { FeaturedProject } from './ProjectsData';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface SmallProjectCardProps {
  project: FeaturedProject;
}

const SmallProjectCard = ({ project }: SmallProjectCardProps) => {
  const hasBeforeAfterImages = project.beforeImages && project.beforeImages.length > 0 && 
                              project.afterImages && project.afterImages.length > 0;
  
  const [beforeImageIndex, setBeforeImageIndex] = useState(0);
  const [afterImageIndex, setAfterImageIndex] = useState(0);
  
  const navigateBeforeImage = (direction: 'prev' | 'next') => {
    if (!project.beforeImages) return;
    
    if (direction === 'prev') {
      setBeforeImageIndex(prev => 
        prev - 1 < 0 ? project.beforeImages!.length - 1 : prev - 1
      );
    } else {
      setBeforeImageIndex(prev => 
        (prev + 1) % project.beforeImages!.length
      );
    }
  };
  
  const navigateAfterImage = (direction: 'prev' | 'next') => {
    if (!project.afterImages) return;
    
    if (direction === 'prev') {
      setAfterImageIndex(prev => 
        prev - 1 < 0 ? project.afterImages!.length - 1 : prev - 1
      );
    } else {
      setAfterImageIndex(prev => 
        (prev + 1) % project.afterImages!.length
      );
    }
  };
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {hasBeforeAfterImages ? (
        <div className="grid grid-cols-1 gap-4 p-4">
          <h4 className="text-sm font-medium text-gray-500">Before and After</h4>
          <div className="grid grid-cols-2 gap-2">
            {/* Before Images */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-gray-500">Before</p>
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={project.beforeImages![beforeImageIndex]} 
                    alt={`${project.title} before (${beforeImageIndex + 1}/${project.beforeImages!.length})`}
                    className="object-cover w-full h-full rounded-md"
                  />
                </AspectRatio>
                {project.beforeImages!.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between">
                    <button 
                      onClick={() => navigateBeforeImage('prev')} 
                      className="bg-black/30 hover:bg-black/50 text-white rounded-full p-1 mx-1"
                      aria-label="Previous before image"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => navigateBeforeImage('next')} 
                      className="bg-black/30 hover:bg-black/50 text-white rounded-full p-1 mx-1"
                      aria-label="Next before image"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
                {project.beforeImages!.length > 1 && (
                  <p className="absolute bottom-1 right-1 bg-black/50 text-white text-xs px-1 rounded">
                    {beforeImageIndex + 1}/{project.beforeImages!.length}
                  </p>
                )}
              </div>
            </div>
            
            {/* After Images */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-gray-500">After</p>
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={project.afterImages![afterImageIndex]} 
                    alt={`${project.title} after (${afterImageIndex + 1}/${project.afterImages!.length})`}
                    className="object-cover w-full h-full rounded-md"
                  />
                </AspectRatio>
                {project.afterImages!.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between">
                    <button 
                      onClick={() => navigateAfterImage('prev')} 
                      className="bg-black/30 hover:bg-black/50 text-white rounded-full p-1 mx-1"
                      aria-label="Previous after image"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => navigateAfterImage('next')} 
                      className="bg-black/30 hover:bg-black/50 text-white rounded-full p-1 mx-1"
                      aria-label="Next after image"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
                {project.afterImages!.length > 1 && (
                  <p className="absolute bottom-1 right-1 bg-black/50 text-white text-xs px-1 rounded">
                    {afterImageIndex + 1}/{project.afterImages!.length}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : project.images.length > 1 ? (
        <Carousel className="w-full">
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={index} className="basis-full">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src={image} 
                    alt={`${project.title} - image ${index + 1}`} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute z-10 flex items-center justify-between w-full h-full px-2 pointer-events-none">
            <CarouselPrevious className="relative pointer-events-auto" />
            <CarouselNext className="relative pointer-events-auto" />
          </div>
        </Carousel>
      ) : (
        <AspectRatio ratio={16 / 9}>
          <img 
            src={project.images[0]} 
            alt={project.title} 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      )}
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-inplast-teal">{project.title}</CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-700">{project.description}</p>
      </CardContent>
    </Card>
  );
};

export default SmallProjectCard;
