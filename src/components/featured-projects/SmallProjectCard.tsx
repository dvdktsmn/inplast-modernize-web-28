
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
  
  const [imageIndex, setImageIndex] = useState(0);
  
  const navigateImages = (direction: 'prev' | 'next') => {
    if (!project.beforeImages || !project.afterImages) return;
    
    const maxIndex = Math.min(project.beforeImages.length, project.afterImages.length) - 1;
    
    if (direction === 'prev') {
      setImageIndex(prev => prev - 1 < 0 ? maxIndex : prev - 1);
    } else {
      setImageIndex(prev => prev + 1 > maxIndex ? 0 : prev + 1);
    }
  };
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {hasBeforeAfterImages ? (
        <div className="grid grid-cols-1 gap-4 p-4">
          <div className="grid grid-cols-2 gap-2 relative">
            {/* Left navigation arrow */}
            {(project.beforeImages!.length > 1 || project.afterImages!.length > 1) && (
              <button 
                onClick={() => navigateImages('prev')} 
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-inplast-teal hover:text-white h-8 w-8 rounded-full border border-input flex items-center justify-center shadow-md"
                aria-label="Previous images"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}
            
            <div className="relative">
              <AspectRatio ratio={16/9}>
                <img 
                  src={project.beforeImages![imageIndex]} 
                  alt={`${project.title} before`}
                  className="object-cover w-full h-full rounded-md"
                />
              </AspectRatio>
            </div>
            
            <div className="relative">
              <AspectRatio ratio={16/9}>
                <img 
                  src={project.afterImages![imageIndex]} 
                  alt={`${project.title} after`}
                  className="object-cover w-full h-full rounded-md"
                />
              </AspectRatio>
            </div>
            
            {/* Right navigation arrow */}
            {(project.beforeImages!.length > 1 || project.afterImages!.length > 1) && (
              <button 
                onClick={() => navigateImages('next')} 
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-inplast-teal hover:text-white h-8 w-8 rounded-full border border-input flex items-center justify-center shadow-md"
                aria-label="Next images"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="relative">
          <Carousel className="w-full" opts={{ slidesToScroll: 2, loop: true }}>
            <CarouselContent className="">
              {project.images.map((image, index) => (
                <CarouselItem key={index} className="basis-1/2 min-w-0">
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
            <div className="absolute z-10 flex items-center justify-between w-full h-full pointer-events-none">
              <CarouselPrevious className="left-2 pointer-events-auto bg-white hover:bg-inplast-teal hover:text-white" />
              <CarouselNext className="right-2 pointer-events-auto bg-white hover:bg-inplast-teal hover:text-white" />
            </div>
          </Carousel>
        </div>
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
