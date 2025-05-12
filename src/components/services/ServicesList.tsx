
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCarousel from './ServiceCarousel';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface ServicesListProps {
  isStandalone?: boolean;
}

const ServicesList = ({ isStandalone = false }: ServicesListProps) => {
  const serviceCategories = [
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
        "/lovable-uploads/1dc4c4dc-881f-465a-b970-fd69ac5845e2.png",
        "/lovable-uploads/5726c4a7-6f1a-44a2-8387-c6c8f4507772.png",
        "/lovable-uploads/99933b14-caab-4d71-8acb-e9670b38d1cf.png",
        "/lovable-uploads/2d246b46-3ba2-4cdb-bca5-1e159a6ec659.png",
        "/lovable-uploads/ce79528d-6a07-4b95-a327-f26d29ae5163.png"
      ]
    },
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
        "/lovable-uploads/c22e4bb3-b9fb-43cd-b0f2-550573a5f443.png",
        "/lovable-uploads/66647945-3588-4d51-9ca0-452fc17469df.png",
        "/lovable-uploads/768a2ff2-bf72-42c2-84f9-bce62a9cdc34.png",
        "/lovable-uploads/3d1a36d3-0355-4c6f-bc11-bc36b4d54a2a.png",
        "/lovable-uploads/0e072492-f758-4d94-8516-a3df563c55d4.png"
      ]
    }
  ];

  return (
    <div className={isStandalone ? "bg-gray-50" : "bg-white"}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {serviceCategories.map((category) => (
            <div key={category.id} className="flex flex-col h-full">
              <div className="mb-6">
                <ServiceCarousel images={category.images} />
              </div>
              
              <div className="flex flex-col flex-grow">
                <Link to={`/services/${category.id}`}>
                  <h3 className="text-2xl font-bold text-gray-800 hover:underline transition-all mb-4">
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
    </div>
  );
};

export default ServicesList;
