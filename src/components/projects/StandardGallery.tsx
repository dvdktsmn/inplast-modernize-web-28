
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface StandardGalleryProps {
  galleryImages: string[];
}

const StandardGallery = ({ galleryImages }: StandardGalleryProps) => {
  return (
    <div className="h-full">
      <div className="bg-white rounded-xl overflow-hidden shadow-md p-4 h-full">
        <div className="relative h-full">
          <Carousel className="w-full h-full">
            <CarouselContent className="h-full">
              {galleryImages.map((image, i) => (
                <CarouselItem key={i} className="md:basis-1/2 h-full">
                  <div className="aspect-video overflow-hidden rounded-md p-2 h-full">
                    <img src={image} alt={`Project photo ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default StandardGallery;
