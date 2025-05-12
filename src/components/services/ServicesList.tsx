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
        "/lovable-uploads/ab933664-5aaf-4814-9d9d-4e20cb1782b8.png",
        "/lovable-uploads/4755188e-0b4e-4dc1-9560-e26b19187d4d.png",
        "/lovable-uploads/2585e457-92bb-4935-988a-2ba961e8fe45.png"
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
        "/lovable-uploads/8527f32f-6f15-4f6b-9bb2-baec7fd5b497.png",
        "/lovable-uploads/2cbd6041-5819-4f3c-afe9-162b2080c7b7.png",
        "/lovable-uploads/e41d37fe-a111-4f09-9d3f-81b90123a72a.png",
        "/lovable-uploads/50beace4-a86d-4334-ac2b-c04ba9b9b231.png",
        "/lovable-uploads/d23db893-c5a3-4dc1-8eba-2a6ce3c7ceba.png"
      ]
    },
    {
      id: "relocation",
      title: "Equipment Relocation",
      description: "We specialize in the safe and efficient dismantling, relocation and assembly of industrial equipment, including full production lines. Our global project experience ensures your assets arrive safely at their new location.",
      images: [
        "/lovable-uploads/d2d69cd4-0766-4486-9a80-b60fc87beae6.png",
      "/lovable-uploads/d27b654c-f8b6-42c5-8da0-f6b4f1162ccb.png",
      "/lovable-uploads/37477ea0-fd08-4236-a799-d4edb282d744.png",
      "/lovable-uploads/af4043e2-9028-40ad-a179-44747b766517.png",
      "/lovable-uploads/600c531c-712d-49aa-82cc-ca5fba294e27.png",
      "/lovable-uploads/6ac5fc62-9f37-48a2-b672-80f564889cc5.png",
      "/lovable-uploads/4f8a911d-51d1-44fc-a9d3-b22163157dbf.png"
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
    </div>
  );
};

export default ServicesList;
