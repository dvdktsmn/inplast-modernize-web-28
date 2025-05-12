
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
  const products: ProductDetail[] = [
    { 
      name: "Biax Lines", 
      image: "/lovable-uploads/3c54f29a-ceed-4622-a80e-6ae838235b8f.png",
      description: "Advanced technology for production of biaxially-oriented films with superior mechanical properties.",
      features: [
        "Multi-layer film production systems",
        "Automated tension control",
        "Precision temperature management",
        "High-speed orientation technology"
      ]
    },
    { 
      name: "Extrusion Systems", 
      image: "/lovable-uploads/69f9e44d-caa4-4361-8d49-190c6120084a.png",
      description: "Industrial extrusion solutions for plastic processing with exceptional control and productivity.",
      features: [
        "Single and twin-screw extruders",
        "Customizable die systems",
        "Advanced cooling systems",
        "Integrated process control"
      ]
    },
    { 
      name: "Converting Equipment", 
      image: "/lovable-uploads/f4facf59-8aa8-44a8-a2f3-45407f7dfc4f.png",
      description: "High-performance converting machinery for efficient material transformation and processing.",
      features: [
        "Slitting and rewinding systems",
        "High-precision cutting machinery",
        "Multi-layer lamination",
        "Roll-to-roll processing"
      ]
    },
    { 
      name: "Electrical Components and Systems", 
      image: "/lovable-uploads/11e7e270-577f-48ad-b96c-d2396dcd6bc8.png",
      description: "Complete electrical solutions integrating sophisticated control systems and power distribution.",
      features: [
        "Industrial automation components",
        "Smart control panels",
        "High-voltage power systems",
        "Safety circuit design"
      ]
    },
    { 
      name: "Motion Control", 
      image: "/lovable-uploads/6075f730-5298-4a9d-a8ae-c4f2a49a4896.png",
      description: "Precision motion control systems for advanced automation and synchronized industrial processes.",
      features: [
        "Servo and stepper motor controls",
        "Multi-axis synchronization",
        "Adaptive positioning systems",
        "High-precision feedback control"
      ]
    },
    { 
      name: "Software and SCADA Retrofit", 
      image: "/lovable-uploads/547afc9b-beb9-4b1a-b05e-0844c12e35f0.png",
      description: "Modernization of legacy systems with state-of-the-art supervisory control and data acquisition solutions.",
      features: [
        "Legacy system integration",
        "Real-time monitoring interfaces",
        "Data analytics and reporting",
        "Remote access capabilities"
      ]
    },
    { 
      name: "MES Systems", 
      image: "/lovable-uploads/2d246b46-3ba2-4cdb-bca5-1e159a6ec659.png",
      description: "Manufacturing Execution Systems that bridge production planning and control for optimized workflows.",
      features: [
        "Production tracking and scheduling",
        "Quality management integration",
        "Resource allocation optimization",
        "Performance analytics"
      ]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-20 pt-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Product Expertise</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have extensive experience with a wide range of industrial equipment and systems. 
              Our technical knowledge allows us to deliver comprehensive solutions for diverse manufacturing needs.
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-12">
            {products.map((product, index) => (
              <Card key={index} className="border-0 shadow-md overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-inplast-teal mb-4">
                      {product.name}
                    </h2>
                    <p className="text-gray-700 mb-6">
                      {product.description}
                    </p>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-800">Key Features:</h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-inplast-teal mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
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
