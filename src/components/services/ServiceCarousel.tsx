
import React, { useState, useEffect, useRef } from 'react';
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
  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  
  // Initialize auto-scroll after inactivity
  useEffect(() => {
    if (!emblaApi) return;
    
    // Function to start auto-scrolling
    const startAutoScroll = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
      
      autoplayRef.current = setInterval(() => {
        emblaApi.scrollNext();
      }, 7000); // 7 seconds interval
    };
    
    // Timer for inactivity detection
    let inactivityTimer: ReturnType<typeof setTimeout>;
    
    // Start the inactivity timer initially
    inactivityTimer = setTimeout(startAutoScroll, 7000);
    
    // Add event listeners for user interaction with the carousel
    const handleCarouselInteraction = () => {
      // Clear the auto-scrolling
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
      
      // Reset the inactivity timer
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(startAutoScroll, 7000);
    };
    
    // Only listen for carousel interaction events (not mouse move or scroll)
    emblaApi.on('select', handleCarouselInteraction);
    
    // Clean up
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      clearTimeout(inactivityTimer);
      emblaApi.off('select', handleCarouselInteraction);
    };
  }, [emblaApi]);

  return (
    <Carousel 
      ref={emblaRef}
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
