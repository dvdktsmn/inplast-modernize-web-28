
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

interface ProductDetail {
  name: string;
  image: string;
  description: string;
  features: string[];
}

const ProductsPage = () => {
  // Using the same image paths as defined in ProductCarousel.tsx
  const productImages = {
    "Biax Lines": "/lovable-uploads/1578a116-7962-49ae-a3ad-3f09928ab06b.png",
    "Extrusion Systems": "/lovable-uploads/69f9e44d-caa4-4361-8d49-190c6120084a.png",
    "Converting Equipment": "/lovable-uploads/f4facf59-8aa8-44a8-a2f3-45407f7dfc4f.png",
    "Electrical Components and Systems": "/lovable-uploads/11e7e270-577f-48ad-b96c-d2396dcd6bc8.png",
    "Motion Control": "/lovable-uploads/6075f730-5298-4a9d-a8ae-c4f2a49a4896.png",
    "Software and SCADA Retrofit": "/lovable-uploads/547afc9b-beb9-4b1a-b05e-0844c12e35f0.png",
    "MES Systems": "/lovable-uploads/2d246b46-3ba2-4cdb-bca5-1e159a6ec659.png",
  };

  const products: ProductDetail[] = [
    { 
      name: "Biax Lines", 
      image: productImages["Biax Lines"],
      description: "We support complete installation, overhaul, and modernization of Biax production lines used for manufacturing biaxially oriented films, ensuring precise control, optimal line performance, and energy efficiency.",
      features: [
        "Full line relocation, dismantling, and reassembly",
        "Electrical and control system upgrades",
        "Motion control improvements",
        "Energy monitoring and optimization solutions"
      ]
    },
    { 
      name: "Extrusion Systems", 
      image: productImages["Extrusion Systems"],
      description: "We provide turnkey installation and upgrade services for extrusion equipment used in plastic film and sheet production, focusing on maintaining performance and extending equipment life.",
      features: [
        "Single and twin-screw extruders",
        "Mechanical and electrical installation and commissioning",
        "Customizable die systems",
        "Retrofitting of extruders with modern control systems",
        "Complete system condition assessments and refurbishment"
      ]
    },
    { 
      name: "Converting Equipment", 
      image: productImages["Converting Equipment"],
      description: "We relocate, upgrade, and overhaul converting machinery such as slitters, rewinders, and laminators, enhancing their efficiency, reliability, and integration with downstream systems.",
      features: [
        "Equipment dismantling and relocation services",
        "Electrical cabinet modernization and control system upgrades",
        "SCADA and HMI system implementation for process visibility",
        "Precision motion control retrofits"
      ]
    },
    { 
      name: "Electrical Components and Systems", 
      image: productImages["Electrical Components and Systems"],
      description: "We design, install, and upgrade electrical distribution and control systems, supporting safe, reliable, and efficient power delivery across industrial production environments.",
      features: [
        "Electrical cabinet design and assembly",
        "Integration of energy efficiency monitoring and reporting",
        "Retrofitting of legacy systems to current standards",
        "Full electrical installation for new equipment setups",
        "Safety circuit design"
      ]
    },
    { 
      name: "Motion Control", 
      image: productImages["Motion Control"],
      description: "We provide precision motion control solutions for new installations and upgrades, improving the accuracy, speed, and synchronization of industrial machinery.",
      features: [
        "Servo drive and actuator integration",
        "Motion control system diagnostics and optimization",
        "Retrofitting outdated motion systems for higher precision",
        "Complete commissioning and validation"
      ]
    },
    { 
      name: "Software and SCADA Retrofit", 
      image: productImages["Software and SCADA Retrofit"],
      description: "We upgrade and modernize outdated control software and SCADA platforms, providing operators with better control, monitoring, and data insights for improved process efficiency.",
      features: [
        "Custom software development and control logic upgrades",
        "Real-time monitoring interfaces",
        "Data integration with existing plant infrastructure",
        "Operator interface enhancements for ease of use"
      ]
    },
    { 
      name: "MES Systems", 
      image: productImages["MES Systems"],
      description: "We help implement and integrate MES systems to bridge the gap between production and business systems, providing real-time production monitoring and data-driven decision-making capabilities.",
      features: [
        "MES installation and configuration",
        "Integration with SCADA and control systems",
        "Process and production data reporting",
        "System validation and operator training"
      ]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-20 pt-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-inplast-blue mb-4">Our Product Expertise</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have extensive experience with a wide range of industrial equipment and systems. 
              Our technical knowledge allows us to deliver comprehensive solutions for diverse manufacturing needs.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border-0 shadow-md overflow-hidden h-full">
                <div className="grid grid-cols-1 h-full">
                  <div className="overflow-hidden h-64">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-inplast-blue mb-4">
                        {product.name}
                      </h2>
                      <p className="text-gray-700 mb-4">
                        {product.description}
                      </p>
                      <div className="space-y-2">
                        <ul className="space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
