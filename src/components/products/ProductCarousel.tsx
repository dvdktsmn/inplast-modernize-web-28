
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

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
  // Calculate how many rows we need (assuming 4 items per row)
  const rowCount = Math.ceil(products.length / 4);
  const rows = Array.from({ length: rowCount }, (_, i) => i);
  
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
          {rows.map((rowIndex) => (
            <div key={`row-${rowIndex}`} className="flex justify-center mb-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.slice(rowIndex * 4, (rowIndex + 1) * 4).map((product, index) => (
                  <Card key={`product-${rowIndex}-${index}`} className="border-0 shadow-sm overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center bg-white">
                      <Link to="/projects" className="hover:underline">
                        <h3 className="text-lg font-medium text-inplast-teal">
                          {product.name}
                        </h3>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
