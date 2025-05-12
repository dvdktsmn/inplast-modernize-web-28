
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCarousel from './products/ProductCarousel';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <ProductCarousel />
      <div className="flex justify-center mt-8">
        <Link to="/products">
          <Button variant="outline" className="text-inplast-teal border-inplast-teal hover:bg-inplast-teal/10">
            Discover our expertise <ArrowRight className="ml-2" size={16} />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Products;
