
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface ServiceCarouselProps {
  images: string[];
}

const ServiceCarousel = ({ images }: ServiceCarouselProps) => {
  // Use Autoplay plugin with embla carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

  return (
    <Carousel 
      opts={{ loop: true }}
      className="w-full"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="overflow-hidden border-0 shadow-lg rounded-xl">
                <div className="aspect-[16/9] relative">
                  <img
                    src={image}
                    alt={`Service image ${index + 1}`}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
      <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
    </Carousel>
  );
};

export default ServiceCarousel;
