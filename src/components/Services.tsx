
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
        "/lovable-uploads/c48d2e60-553a-4a7b-b8ce-8443d8aaac8f.png",
        "/lovable-uploads/409060eb-bdb3-4305-9d96-361bc14d771b.png",
        "/lovable-uploads/d2b32799-149b-462e-945a-73d1c8257892.png",
        "/lovable-uploads/baa026f7-d296-43cb-a825-e885784cb04d.png",
        "/lovable-uploads/33858292-5858-451c-9c4b-ceb9b1faea93.png",
        "/lovable-uploads/13dcb9a0-8e4d-48f2-a3bd-52b5b40a2396.png"
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
        "/lovable-uploads/b6e3954e-26c0-4ca9-83fb-6a9c0f0113dc.png",
        "/lovable-uploads/cc68e7e0-36f2-4c1b-8fa7-b080687470d6.png",
        "/lovable-uploads/1fa7f7db-cd38-45f3-ae7f-b5bd8eaadfbc.png",
        "/lovable-uploads/dbdad23e-3f0d-4489-8871-82b0643b4991.png",
        "/lovable-uploads/b9311985-7c0e-4bd7-a5e2-f67dfbaf4f99.png"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {serviceCategories.map((category) => (
            <div key={category.id} className="flex flex-col h-full">
              <div className="mb-6">
                <ServiceCarousel images={category.images} />
              </div>
              
              <div className="flex flex-col flex-grow">
                <Link to={`/services/${category.id}`}>
                  <h3 className="text-2xl font-bold text-inplast-teal hover:underline transition-all mb-4">
                    {category.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="mt-auto">
                  <Link to={`/services/${category.id}`}>
                    <Button variant="outline" className="text-inplast-teal border-inplast-teal hover:bg-inplast-teal/10">
                      Learn More <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
