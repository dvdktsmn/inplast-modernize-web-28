
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface BeforeAfterGalleryProps {
  beforeImages: string[];
  afterImages: string[];
}

const BeforeAfterGallery = ({ beforeImages, afterImages }: BeforeAfterGalleryProps) => {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Before Photos */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md p-4">
          <h4 className="text-lg font-semibold mb-4 text-inplast-teal">Before</h4>
          <Carousel className="w-full relative">
            <CarouselContent>
              {beforeImages.map((image, i) => (
                <CarouselItem key={i} className="basis-full">
                  <div className="h-64 overflow-hidden rounded-md">
                    <img src={image} alt={`Before relocation ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        
        {/* After Photos */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md p-4">
          <h4 className="text-lg font-semibold mb-4 text-inplast-teal">After</h4>
          <Carousel className="w-full relative">
            <CarouselContent>
              {afterImages.map((image, i) => (
                <CarouselItem key={i} className="basis-full">
                  <div className="h-64 overflow-hidden rounded-md">
                    <img src={image} alt={`After relocation ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterGallery;
