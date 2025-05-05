
import React from 'react';
import { Truck, ArrowUpDown, Settings, Wrench, Building2, GanttChart, Hammer, Ship, CircuitBoard } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const Services = () => {
  const serviceItems = [
    {
      icon: Hammer,
      title: "Dismantling & Global Relocation",
      description: "We specialize in the safe and efficient dismantling of industrial equipment, including full production lines. Our global project experience includes large-scale operations like the BOPP line relocation from Hefei, China.",
      image: "/placeholder.svg"
    },
    {
      icon: Ship,
      title: "Seaworthy Packaging",
      description: "Protect your assets during long-distance transport. Our seaworthy packaging solutions ensure equipment withstands harsh maritime environments—designed for reliability and international shipping standards.",
      image: "/placeholder.svg"
    },
    {
      icon: ArrowUpDown,
      title: "Oversized Equipment Handling",
      description: "From factory floors to freight terminals, we manage the transport and positioning of oversized machinery with precision logistics and heavy-lift expertise.",
      image: "/placeholder.svg"
    },
    {
      icon: Settings,
      title: "Complete Equipment Overhaul",
      description: "Restore and modernize your assets. We perform full equipment overhauls to increase longevity, energy efficiency, and operational performance—bringing outdated systems up to today's standards.",
      image: "/placeholder.svg"
    },
    {
      icon: CircuitBoard,
      title: "Electrical Engineering",
      description: "From design to deployment, our electrical engineering solutions support the safe, smart, and scalable control of your production infrastructure.",
      image: "/placeholder.svg"
    },
    {
      icon: Wrench,
      title: "Engineering & Manufacturing",
      description: "Every project is unique. That's why we offer custom engineering and in-house manufacturing, aligning with your technical specs, budget, and production goals.",
      image: "/placeholder.svg"
    },
    {
      icon: GanttChart,
      title: "Installation & Commissioning",
      description: "Ensure seamless operation from day one. Our experts manage the installation and commissioning process end-to-end, offering localized support and global experience.",
      image: "/placeholder.svg"
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
              <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-inplast-darkgray">
                  {React.createElement(service.icon, { className: "mr-2 text-inplast-teal", size: 24 })}
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
