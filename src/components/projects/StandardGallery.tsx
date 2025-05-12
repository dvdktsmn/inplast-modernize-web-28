
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Grid } from "lucide-react";

interface StandardGalleryProps {
  galleryImages: string[];
}

const StandardGallery = ({ galleryImages }: StandardGalleryProps) => {
  return (
    <div className="mt-8">
      <div className="bg-white rounded-xl overflow-hidden shadow-md p-4">
        <div className="flex items-center gap-2 mb-4">
          <Grid size={18} className="text-inplast-teal" />
          <h4 className="text-lg font-semibold text-inplast-teal">Modernization Gallery</h4>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {galleryImages.map((image, i) => (
            <div key={i} className="h-64 overflow-hidden rounded-md">
              <img 
                src={image} 
                alt={`Modernization photo ${i + 1}`} 
                className="w-full h-full object-cover transition-all hover:scale-105 duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StandardGallery;
