
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { X } from "lucide-react";

interface StandardGalleryProps {
  galleryImages: string[];
}

const StandardGallery = ({ galleryImages }: StandardGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [api, setApi] = useState<any>(null);
  
  const openCarousel = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeCarousel = () => {
    setSelectedImageIndex(null);
  };

  // Use useEffect to set the initial slide when the carousel opens
  useEffect(() => {
    if (api && selectedImageIndex !== null) {
      // Wait for the carousel to initialize
      setTimeout(() => {
        api.scrollTo(selectedImageIndex);
      }, 0);
    }
  }, [api, selectedImageIndex]);

  return (
    <div className="mt-8">
      <div className="bg-white rounded-xl overflow-hidden shadow-md p-4">
        <h4 className="text-lg font-semibold mb-4 text-inplast-teal">Modernization Gallery</h4>
        
        {/* Two-column grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {galleryImages.map((image, i) => (
            <div 
              key={i} 
              className="h-64 overflow-hidden rounded-md cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => openCarousel(i)}
            >
              <img 
                src={image} 
                alt={`Modernization photo ${i + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Full screen carousel overlay */}
        <Dialog open={selectedImageIndex !== null} onOpenChange={closeCarousel}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] w-[95vw] h-[95vh] p-0 border-none bg-transparent">
            <button 
              onClick={closeCarousel}
              className="absolute right-4 top-4 z-50 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
              aria-label="Close carousel"
            >
              <X size={24} />
            </button>
            
            <Carousel className="w-full h-full" setApi={setApi}>
              <CarouselContent className="h-full">
                {galleryImages.map((image, i) => (
                  <CarouselItem key={i} className="h-full flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img 
                        src={image} 
                        alt={`Modernization photo ${i + 1}`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default StandardGallery;
