
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Product {
  name: string;
  image: string;
}

const products: Product[] = [
  { name: "Biax Lines", image: "/lovable-uploads/1578a116-7962-49ae-a3ad-3f09928ab06b.png" },
  { name: "Extrusion Systems", image: "/lovable-uploads/69f9e44d-caa4-4361-8d49-190c6120084a.png" },
  { name: "Converting Equipment", image: "/lovable-uploads/f4facf59-8aa8-44a8-a2f3-45407f7dfc4f.png" },
  { name: "Electrical Components and Systems", image: "/lovable-uploads/11e7e270-577f-48ad-b96c-d2396dcd6bc8.png" },
  { name: "Motion Control", image: "/lovable-uploads/6075f730-5298-4a9d-a8ae-c4f2a49a4896.png" },
  { name: "Software and SCADA Retrofit", image: "/lovable-uploads/547afc9b-beb9-4b1a-b05e-0844c12e35f0.png" },
  { name: "MES Systems", image: "/lovable-uploads/2d246b46-3ba2-4cdb-bca5-1e159a6ec659.png" },
];

const ProductCarousel = () => {
  // First row has 4 products, second row has 3
  const firstRowProducts = products.slice(0, 4);
  const secondRowProducts = products.slice(4);
  
  return (
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
        {/* Top row - 4 products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {firstRowProducts.map((product, index) => (
            <Card key={`product-top-${index}`} className="border-0 shadow-sm overflow-hidden">
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
          ))}
        </div>

        {/* Bottom row - 3 products + button aligned to the left */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {secondRowProducts.map((product, index) => (
            <Card key={`product-bottom-${index}`} className="border-0 shadow-sm overflow-hidden">
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
          ))}
          
          {/* Button in the 4th position - modified to be smaller */}
          <div className="flex items-center justify-center">
            <Link to="/products">
              <Button variant="outline" className="text-inplast-teal border-inplast-teal hover:bg-inplast-teal/10">
                Learn more <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
