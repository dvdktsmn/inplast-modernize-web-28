
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface StandardGalleryProps {
  galleryImages: string[];
}

const StandardGallery = ({ galleryImages }: StandardGalleryProps) => {
  return (
    <div className="mt-8">
      <div className="bg-white rounded-xl overflow-hidden shadow-md p-4">
        <h4 className="text-lg font-semibold mb-4 text-inplast-teal">Modernization Gallery</h4>
        <Carousel className="w-full relative">
          <CarouselContent>
            {galleryImages.map((image, i) => (
              <CarouselItem key={i} className="md:basis-1/2">
                <div className="h-64 overflow-hidden rounded-md p-2">
                  <img src={image} alt={`Modernization photo ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </div>
  );
};

export default StandardGallery;
