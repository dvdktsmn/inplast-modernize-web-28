
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
                className="right-2 bg-white/80 hover:bg-white" 
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
                className="right-2 bg-white/80 hover:bg-white" 
                aria-label="Next images"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      ) : project.images.length > 1 ? (
        <Carousel className="w-full" opts={{ slidesToScroll: 2 }}>
          <CarouselContent className="-ml-2">
            {project.images.map((image, index) => (
              <CarouselItem key={index} className="pl-2 basis-1/2 min-w-0">
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
            <CarouselPrevious className="right-2 bg-white/80 hover:bg-white"  />
            <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
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
