
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
  { name: "Линии Biax", image: "/lovable-uploads/14e9bd31-4fd9-4558-9a4b-731f44fce6e2.png" },
  { name: "Экструзионные системы", image: "/lovable-uploads/3ff7b214-9963-4cd2-96d0-b11838885c28.png" },
  { name: "Перерабатывающее оборудование", image: "/lovable-uploads/de929fe4-b5a4-4a48-8301-454cbd7bea35.png" },
  { name: "Электрические компоненты и системы", image: "/lovable-uploads/371c6472-159f-41b3-a97b-4abeff5ccde6.png" },
  { name: "Управление движением", image: "/lovable-uploads/87f7cb49-1a26-4ce0-82e7-5819631a0cd1.png" },
  { name: "Автоматизация и управление процессами", image: "/lovable-uploads/d946c718-e590-4932-9e9a-45e34a43ae11.png" },
  { name: "MES-системы", image: "/placeholder.svg" },
];

const ProductCarousel = () => {
  // First row has 4 products, second row has 3
  const firstRowProducts = products.slice(0, 4);
  const secondRowProducts = products.slice(4);
  
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-inplast-blue mb-4">
          Наши системы и оборудование Know-How
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ознакомьтесь с типами оборудования, которое мы обслуживаем с проверенной экспертизой.      
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
                <h3 className="text-lg font-medium text-inplast-blue">
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
                <h3 className="text-lg font-medium text-inplast-blue">
                  {product.name}
                </h3>
              </CardContent>
            </Card>
          ))}
          
          {/* Button in the 4th position - modified to be smaller */}
          <div className="flex items-center justify-center">
            <Link to="/products">
              <Button variant="outline" className="text-inplast-blue border-inplast-blue hover:bg-inplast-blue/10">
                Узнать больше <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
