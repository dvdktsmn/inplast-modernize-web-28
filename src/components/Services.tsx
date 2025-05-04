
import React from 'react';
import { Truck, ArrowUpDown, Settings, Wrench, Building2, GanttChart, Hammer } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const serviceItems = [
    {
      icon: Hammer,
      title: "Dismantling & Global Relocation",
      description: "We specialize in the safe and efficient dismantling of industrial equipment, including full production lines. Our global project experience includes large-scale operations like the BOPP line relocation from Hefei, China.",
      image: "/lovable-uploads/3c54f29a-ceed-4622-a80e-6ae838235b8f.png"
    },
    {
      icon: Truck,
      title: "Seaworthy Packaging",
      description: "Protect your assets during long-distance transport. Our seaworthy packaging solutions ensure equipment withstands harsh maritime environments—designed for reliability and international shipping standards.",
      image: "/lovable-uploads/6a2dbc80-9d7f-4543-91be-9b69ad67abb0.png"
    },
    {
      icon: ArrowUpDown,
      title: "Oversized Equipment Handling",
      description: "From factory floors to freight terminals, we manage the transport and positioning of oversized machinery with precision logistics and heavy-lift expertise.",
      image: "/lovable-uploads/f2ff3edd-250c-48e5-a3b2-86ff136b2a51.png"
    },
    {
      icon: Settings,
      title: "Complete Equipment Overhaul",
      description: "Restore and modernize your assets. We perform full equipment overhauls to increase longevity, energy efficiency, and operational performance—bringing outdated systems up to today's standards.",
      image: "/lovable-uploads/fbb89a5f-8378-4330-8177-3469398d8d52.png"
    },
    {
      icon: Wrench,
      title: "Electrical Engineering",
      description: "From design to deployment, our electrical engineering solutions support the safe, smart, and scalable control of your production infrastructure.",
      image: "/lovable-uploads/6bd81f03-5209-447a-a50f-d10785c56e75.png"
    },
    {
      icon: Building2,
      title: "Engineering & Manufacturing",
      description: "Every project is unique. That's why we offer custom engineering and in-house manufacturing, aligning with your technical specs, budget, and production goals.",
      image: "/lovable-uploads/f4facf59-8aa8-44a8-a2f3-45407f7dfc4f.png"
    },
    {
      icon: GanttChart,
      title: "Installation & Commissioning",
      description: "Ensure seamless operation from day one. Our experts manage the installation and commissioning process end-to-end, offering localized support and global experience.",
      image: "/lovable-uploads/143d0504-0382-4d33-a174-3bb4928f22d5.png"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-inplast-darkblue">
                  {React.createElement(service.icon, { className: "mr-2 text-inplast-blue", size: 24 })}
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
