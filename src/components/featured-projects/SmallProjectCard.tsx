
import React from 'react';
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

interface SmallProjectCardProps {
  project: FeaturedProject;
}

const SmallProjectCard = ({ project }: SmallProjectCardProps) => {
  const hasBeforeAfterImages = project.beforeImages && project.beforeImages.length > 0 && 
                              project.afterImages && project.afterImages.length > 0;
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {hasBeforeAfterImages ? (
        <div className="grid grid-cols-1 gap-4 p-4">
          <h4 className="text-sm font-medium text-gray-500">Before and After</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <p className="text-xs font-medium text-gray-500">Before</p>
              <AspectRatio ratio={16/9}>
                <img 
                  src={project.beforeImages![0]} 
                  alt={`${project.title} before`}
                  className="object-cover w-full h-full rounded-md"
                />
              </AspectRatio>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-gray-500">After</p>
              <AspectRatio ratio={16/9}>
                <img 
                  src={project.afterImages![0]} 
                  alt={`${project.title} after`}
                  className="object-cover w-full h-full rounded-md"
                />
              </AspectRatio>
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
