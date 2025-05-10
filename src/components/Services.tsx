
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCarousel from './services/ServiceCarousel';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      id: "installation",
      title: "Installation and Commissioning",
      description: "Ensure seamless operation from day one. Our experts manage the installation and commissioning process end-to-end, offering localized support and global experience.",
      images: [
        "/lovable-uploads/11e7e270-577f-48ad-b96c-d2396dcd6bc8.png",
        "/lovable-uploads/69f9e44d-caa4-4361-8d49-190c6120084a.png",
        "/lovable-uploads/143d0504-0382-4d33-a174-3bb4928f22d5.png"
      ]
    },
    {
      id: "relocation",
      title: "Equipment Relocation",
      description: "We specialize in the safe and efficient dismantling of industrial equipment, including full production lines. Our global project experience ensures your assets arrive safely at their new location.",
      images: [
        "/lovable-uploads/4c257c37-8c64-4c31-bcea-916d3639fd25.png",
        "/lovable-uploads/cff828aa-5bb4-4bdd-b226-da4108c92879.png",
        "/lovable-uploads/d8c9d55c-2e20-4b44-8d69-cf877a6c22d3.png"
      ]
    },
    {
      id: "overhaul",
      title: "Complete Equipment Overhaul",
      description: "Restore and modernize your assets. We perform full equipment overhauls to increase longevity, energy efficiency, and operational performance—bringing outdated systems up to today's standards.",
      images: [
        "/lovable-uploads/58d6f434-7c79-4e4e-b8c9-e60fad6a246d.png",
        "/lovable-uploads/e42d7b0d-ec79-4a41-82b9-27dafabdfb9a.png",
        "/lovable-uploads/fb4c7c14-fa91-430e-b052-a3ab24cbfa6d.png"
      ]
    },
    {
      id: "engineering",
      title: "Engineering and Control Systems Upgrade",
      description: "From design to deployment, our electrical engineering solutions support the safe, smart, and scalable control of your production infrastructure, enhancing efficiency and reducing downtime.",
      images: [
        "/lovable-uploads/69f9e44d-caa4-4361-8d49-190c6120084a.png",
        "/lovable-uploads/6075f730-5298-4a9d-a8ae-c4f2a49a4896.png",
        "/lovable-uploads/6a2dbc80-9d7f-4543-91be-9b69ad67abb0.png"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive range of industrial services spans from equipment dismantling to full production line installation.
          </p>
        </div>

        <div className="space-y-20">
          {serviceCategories.map((category, index) => (
            <div key={category.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
              <div className="w-full md:w-1/2">
                <ServiceCarousel images={category.images} />
              </div>
              
              <div className="w-full md:w-1/2 space-y-4">
                <Link to={`/services/${category.id}`}>
                  <h3 className="text-2xl font-bold text-inplast-teal hover:underline transition-all">
                    {category.title}
                  </h3>
                </Link>
                <p className="text-gray-600">{category.description}</p>
                <Link to={`/services/${category.id}`}>
                  <Button variant="outline" className="text-inplast-teal border-inplast-teal hover:bg-inplast-teal/10">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
