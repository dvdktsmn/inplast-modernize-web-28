
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface StandardGalleryProps {
  galleryImages: string[];
}

const StandardGallery = ({ galleryImages }: StandardGalleryProps) => {
  return (
    <div className="mt-8">
      <div className="bg-white rounded-xl overflow-hidden shadow-md p-4">
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, i) => (
                <CarouselItem key={i} className="md:basis-1/2">
                  <div className="aspect-video overflow-hidden rounded-md p-2">
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
