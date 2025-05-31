import React, { useState, useEffect } from 'react';
import { FeaturedProject } from './ProjectsData';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface SmallProjectCardProps {
  project: FeaturedProject;
}

const SmallProjectCard = ({ project }: SmallProjectCardProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

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

  const openLightbox = (pairIndex: number, imageIndexInPair: number) => {
    const actualImageIndex = pairIndex * 2 + imageIndexInPair;
    setActiveImageIndex(actualImageIndex);
    setLightboxOpen(true);
  };

  // Effect to scroll to the initial slide when the lightbox opens
  useEffect(() => {
    if (carouselApi && lightboxOpen) {
      carouselApi.scrollTo(activeImageIndex);
    }
  }, [carouselApi, lightboxOpen, activeImageIndex]);

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        {project.images.length > 0 ? (
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {imagePairs.map((pair, pairIndex) => (
                  <CarouselItem key={pairIndex} className="basis-full">
                    <div className="flex gap-1">
                      {pair.map((image, imageIndex) => (
                        <div 
                          key={`${pairIndex}-${imageIndex}`} 
                          className="flex-1 cursor-pointer"
                          onClick={() => openLightbox(pairIndex, imageIndex)}
                        >
                          <AspectRatio ratio={16 / 9}>
                            <img 
                              src={image} 
                              alt={`${project.title} - image ${pairIndex * 2 + imageIndex + 1}`} 
                              className="object-cover w-full h-full transition-transform hover:scale-105"
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
              
              {/* Always show navigation arrows when there are images */}
              {project.images.length > 0 && (
                <>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
                </>
              )}
            </Carousel>
          </div>
        ) : (
          <AspectRatio ratio={16 / 9}>
            <div className="bg-gray-100 w-full h-full"></div>
          </AspectRatio>
        )}
        
        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-inplast-blue">{project.title}</CardTitle>
        </CardHeader>
        
        <CardContent>
          <p className="text-gray-700">{project.description}</p>
        </CardContent>
      </Card>

      {/* Full-screen Image Lightbox - identical to LargeProjectCard */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[95vw] w-[95vw] h-[90vh] max-h-[90vh] p-0 bg-white border-none overflow-hidden">
          <div className="relative w-full h-full flex flex-col">
            <div className="flex-1 min-h-0 py-4">
              <Carousel 
                className="w-full h-full"
                opts={{ 
                  loop: true,
                  startIndex: activeImageIndex 
                }}
                setApi={setCarouselApi}
              >
                <CarouselContent className="h-full -ml-0">
                  {project.images.map((image, index) => (
                    <CarouselItem key={`lightbox-${index}`} className="h-full pl-0">
                      <div className="w-full h-full flex items-center justify-center px-2 sm:px-4">
                        <img 
                          src={image} 
                          alt={`${project.title} - крупный вид ${index + 1}`}
                          className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                          style={{ maxHeight: 'calc(80vh - 2rem)' }}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 sm:left-4 bg-white/80 hover:bg-white border-gray-300 text-gray-700 shadow-lg" />
                <CarouselNext className="right-2 sm:right-4 bg-white/80 hover:bg-white border-gray-300 text-gray-700 shadow-lg" />
              </Carousel>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SmallProjectCard;
