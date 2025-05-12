
import React, { useState, useEffect, useRef } from 'react';
import { FeaturedProject } from './ProjectsData';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface LargeProjectCardProps {
  project: FeaturedProject;
  reverseLayout?: boolean;
}

const LargeProjectCard = ({ project, reverseLayout = false }: LargeProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };
  
  // Effect to scroll to the initial slide when the lightbox opens
  useEffect(() => {
    if (carouselApi && lightboxOpen) {
      carouselApi.scrollTo(activeImageIndex);
    }
  }, [carouselApi, lightboxOpen, activeImageIndex]);
  
  // Helper function to get the appropriate expanded content based on project ID
  const getExpandedContent = () => {
    if (project.id === "factory-modernization") {
      return (
        <div className="space-y-6">
          <section>
            <h4 className="text-xl font-semibold text-inplast-teal mb-2">Factory Assessment and Planning</h4>
            <p className="text-gray-700">
              Our team conducted a comprehensive assessment of the existing production facilities to identify 
              bottlenecks, inefficiencies, and outdated equipment. We developed a phased modernization plan that 
              allowed for continuous operation during the upgrade process, minimizing downtime and production loss.
            </p>
          </section>
          
          <section>
            <h4 className="text-xl font-semibold text-inplast-teal mb-2">Digital Integration and IoT Implementation</h4>
            <p className="text-gray-700">
              A key aspect of the modernization was the implementation of Industrial Internet of Things (IIoT) 
              technologies. Over 500 sensors were installed throughout the production line to enable real-time 
              monitoring and data collection. This network was integrated with a new cloud-based manufacturing 
              execution system (MES) to enable predictive maintenance and dynamic scheduling capabilities.
            </p>
          </section>
          
          <section>
            <h4 className="text-xl font-semibold text-inplast-teal mb-2">Robotic Automation</h4>
            <p className="text-gray-700">
              We integrated collaborative robots (cobots) at critical stations along the production line, 
              automating repetitive and physically demanding tasks. These robots work alongside human operators, 
              improving safety and ergonomics while increasing throughput. The automation system includes 
              advanced computer vision for quality inspection, reducing defect rates by 40%.
            </p>
          </section>
          
          <section>
            <h4 className="text-xl font-semibold text-inplast-teal mb-2">Energy Efficiency Improvements</h4>
            <p className="text-gray-700">
              The modernization project included a comprehensive energy audit and subsequent implementation of 
              energy-saving technologies. High-efficiency motors and drives were installed, along with smart 
              lighting and HVAC controls. A new energy management system was deployed to optimize consumption, 
              resulting in a 25% reduction in energy costs.
            </p>
          </section>
          
          <section>
            <h4 className="text-xl font-semibold text-inplast-teal mb-2">Digital Twin Implementation</h4>
            <p className="text-gray-700">
              A digital twin of the entire factory was created, enabling virtual simulation and optimization of 
              production processes. This technology allows managers to test changes and improvements virtually 
              before implementing them on the physical production line, reducing risk and accelerating 
              innovation cycles.
            </p>
          </section>
          
          <section>
            <h4 className="text-xl font-semibold text-inplast-teal mb-2">Workforce Development</h4>
            <p className="text-gray-700">
              The project included a comprehensive training program for the existing workforce to build digital skills 
              and adapt to new technologies. Over 200 employees were upskilled through a combination of classroom 
              instruction, virtual reality training, and on-the-job coaching. The workforce transformation was 
              key to ensuring successful adoption of the new systems and realizing the full benefits of the modernization.
            </p>
          </section>
        </div>
      );
    }
    
    // Default content for other projects
    return (
      <div className="space-y-6">
        <section>
          <h4 className="text-xl font-semibold text-inplast-teal mb-2">Initial Condition Assessment</h4>
          <p className="text-gray-700">
            The project began with a detailed technical inspection of the BOPP line at its original site. 
            The team evaluated the condition of extruders, chill rolls, T-dies, tenter frames, rewinders, 
            and associated auxiliary systems. Key components were tested for mechanical integrity and wear. 
            This assessment formed the basis for the dismantling strategy and refurbishment plan, ensuring the 
            equipment could be safely transported and effectively reinstalled.
          </p>
        </section>
        
        <section>
          <h4 className="text-xl font-semibold text-inplast-teal mb-2">Dismantling and Transportation Logistics</h4>
          <p className="text-gray-700">
            Following the assessment, the team conducted a structured dismantling process. Over 1,200 mechanical, 
            electrical, and control system components were carefully removed, labeled, and packed. Particular attention 
            was given to critical parts such as the film stretching units and precision rollers. The transport phase involved 
            significant logistical planning due to the equipment size. The team managed the safe transfer of components via sea 
            freight and road transport, coordinating with customs and regulatory authorities to minimize delays. 
            All packaging and securing methods followed international standards to prevent transit damage.
          </p>
        </section>
        
        <section>
          <h4 className="text-xl font-semibold text-inplast-teal mb-2">Repairs, Refurbishment and Upgrades at the New Site</h4>
          <p className="text-gray-700">
            Upon arrival at the new facility, the team carried out the planned refurbishment. Worn and obsolete components 
            were replaced, and mechanical alignments were re-established. Electrical and safety systems were brought up to 
            modern standards. Energy-saving improvements and modern automation technologies were 
            integrated to enhance the efficiency and reliability of the line.
          </p>
        </section>
        
        <section>
          <h4 className="text-xl font-semibold text-inplast-teal mb-2">Assembly and Software Modernization</h4>
          <p className="text-gray-700">
            The line was reassembled by the team with precision to restore full functionality. Controls engineers 
            installed updated PLC and SCADA systems, adding new diagnostics, improved process controls, and modern 
            operator interfaces. These upgrades provided the client with better monitoring and operational capabilities 
            for future production.
          </p>
        </section>
        
        <section>
          <h4 className="text-xl font-semibold text-inplast-teal mb-2">Commissioning and Performance Optimization</h4>
          <p className="text-gray-700">
            The commissioning phase included a systematic approach to testing each component and system. Initial runs were 
            conducted to verify film thickness accuracy, material strength, and quality consistency. The team worked closely 
            with the client to make fine adjustments to ensure the line met international production standards for BOPP film products.
          </p>
        </section>
        
        <section>
          <h4 className="text-xl font-semibold text-inplast-teal mb-2">Training and Knowledge Transfer</h4>
          <p className="text-gray-700">
            The final phase involved training the client's operational and maintenance staff. The team provided instructions
            and practical, on-machine training. Topics included safe operation, 
            routine maintenance, troubleshooting, and system optimization. This ensured the client's personnel 
            were fully prepared to operate the line independently and safely.
          </p>
        </section>
      </div>
    );
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Preview card - always visible */}
      <div className={`${reverseLayout ? 'md:flex-row-reverse' : ''} md:flex`}>
        {/* Image Carousel - 50% width on desktop, full width on mobile */}
        <div className="md:w-1/2">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-64 md:h-96 w-full">
                    <AspectRatio ratio={16 / 9} className="h-full">
                      <img 
                        src={image} 
                        alt={`${project.title} - image ${index + 1}`}
                        className="rounded-t-xl md:rounded-t-none md:rounded-l-xl object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
        
        {/* Project details - 50% width on desktop, full width on mobile */}
        <div className="p-6 md:p-8 md:w-1/2">
          <div className="mb-4">
            <h3 className="text-3xl font-bold text-inplast-teal">{project.title}</h3>
          </div>
          
          <div className="flex items-center mb-6">
            <span className="text-gray-600 font-medium">{project.location}</span>
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
        </div>
      </div>

      {/* Read More Button - full width */}
      <div className="px-6 py-4 border-t border-gray-100 flex justify-center">
        <Button 
          variant="outline" 
          onClick={toggleExpand} 
          className="w-full max-w-xs text-inplast-teal border-inplast-teal hover:bg-inplast-teal/10"
        >
          {isExpanded ? (
            <>
              Read Less <ChevronUp className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              Read More <ChevronDown className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className={`border-t border-gray-100 ${reverseLayout ? 'md:flex-row-reverse' : ''} md:flex`}>
          {/* Two-column Image Gallery - follows same side as the carousel above */}
          <div className="md:w-1/2 p-6">
            <h4 className="text-xl font-semibold text-inplast-teal mb-4">Project Gallery</h4>
            <div className="grid grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <div 
                  key={`gallery-${index}`} 
                  className="cursor-pointer rounded-lg overflow-hidden transition-transform hover:scale-105"
                  onClick={() => openLightbox(index)}
                >
                  <AspectRatio ratio={3 / 2}>
                    <img 
                      src={image} 
                      alt={`${project.title} - detail ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
              ))}
            </div>
          </div>
          
          {/* Expanded Text Content - follows same side as the text above */}
          <div className="md:w-1/2 p-6">
            {getExpandedContent()}
          </div>
        </div>
      )}

      {/* Full-screen Image Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[95vw] w-[95vw] max-h-[95vh] h-[95vh] p-0 bg-white border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute top-4 right-4 z-50 bg-white hover:bg-gray-100 border-gray-300 text-gray-700"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
            
            <Carousel className="w-full h-full" setApi={setCarouselApi} opts={{ loop: true }}>
              <CarouselContent className="h-full">
                {project.images.map((image, index) => (
                  <CarouselItem key={`lightbox-${index}`} className="h-full flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <img 
                        src={image} 
                        alt={`${project.title} - large view ${index + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white hover:bg-gray-100 border-gray-300 text-gray-700" />
              <CarouselNext className="right-4 bg-white hover:bg-gray-100 border-gray-300 text-gray-700" />
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LargeProjectCard;
