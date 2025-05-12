
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

interface SmallProjectCardProps {
  project: FeaturedProject;
}

const SmallProjectCard = ({ project }: SmallProjectCardProps) => {
  // Group images in pairs for side-by-side display
  const createImagePairs = (images: string[]) => {
    const pairs = [];
    for (let i = 0; i < images.length; i += 2) {
      if (i + 1 < images.length) {
        // If we have two images, pair them
        pairs.push([images[i], images[i + 1]]);
      } else {
        // If we have an odd number of images, the last one stands alone
        pairs.push([images[i]]);
      }
    }
    return pairs;
  };

  const imagePairs = createImagePairs(project.images);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {project.images.length > 0 ? (
        <Carousel className="w-full">
          <CarouselContent>
            {imagePairs.map((pair, pairIndex) => (
              <CarouselItem key={pairIndex} className="basis-full">
                <div className="flex gap-1">
                  {pair.map((image, imageIndex) => (
                    <div key={`${pairIndex}-${imageIndex}`} className="flex-1">
                      <AspectRatio ratio={16 / 9}>
                        <img 
                          src={image} 
                          alt={`${project.title} - image ${pairIndex * 2 + imageIndex + 1}`} 
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </div>
                  ))}
                  {/* If we have a single image in the pair, add an empty div to maintain layout */}
                  {pair.length === 1 && (
                    <div className="flex-1">
                      <AspectRatio ratio={16 / 9}>
                        <div className="bg-gray-100 w-full h-full"></div>
                      </AspectRatio>
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {imagePairs.length > 1 && (
            <div className="absolute z-10 flex items-center justify-between w-full h-full px-2 pointer-events-none">
              <CarouselPrevious className="relative pointer-events-auto" />
              <CarouselNext className="relative pointer-events-auto" />
            </div>
          )}
        </Carousel>
      ) : (
        <AspectRatio ratio={16 / 9}>
          <div className="bg-gray-100 w-full h-full"></div>
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
