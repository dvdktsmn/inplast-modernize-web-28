
import React, { useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface Product {
  name: string;
  image: string;
}

const products: Product[] = [
  { name: "Biax Lines", image: "/lovable-uploads/3c54f29a-ceed-4622-a80e-6ae838235b8f.png" },
  { name: "Extrusion Systems", image: "/lovable-uploads/69f9e44d-caa4-4361-8d49-190c6120084a.png" },
  { name: "Converting Equipment", image: "/lovable-uploads/f4facf59-8aa8-44a8-a2f3-45407f7dfc4f.png" },
  { name: "Electrical Components and Systems", image: "/lovable-uploads/11e7e270-577f-48ad-b96c-d2396dcd6bc8.png" },
  { name: "Motion Control", image: "/lovable-uploads/6075f730-5298-4a9d-a8ae-c4f2a49a4896.png" },
  { name: "Software and SCADA Retrofit", image: "/lovable-uploads/547afc9b-beb9-4b1a-b05e-0844c12e35f0.png" },
  { name: "MES Systems", image: "/lovable-uploads/2d246b46-3ba2-4cdb-bca5-1e159a6ec659.png" },
];

const ProductCarousel = () => {
  // Create autoplay plugin with options
  const autoplayPlugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnLastSnap: false,
      playOnInit: true
    })
  );

  // Initialize Embla carousel with the autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      slidesToScroll: 4, // Changed to scroll 4 items at once
    },
    [autoplayPlugin.current] // Pass plugin as part of the array
  );

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Know-How Systems and Equipment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the equipment types we service with proven expertise.      
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="w-full" ref={emblaRef}>
            <div className="flex -ml-2 md:-ml-4">
              {products.map((product, index) => (
                <div key={index} className="pl-2 md:pl-4 basis-1/4 min-w-0 shrink-0 grow-0">
                  <Card className="border-0 shadow-sm overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center bg-white">
                      <h3 className="text-lg font-medium text-inplast-teal">
                        {product.name}
                      </h3>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button 
              className="mx-2 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              <span className="sr-only">Previous</span>
            </button>
            <button 
              className="mx-2 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm"
              onClick={() => emblaApi?.scrollNext()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
