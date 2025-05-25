
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
import { ChevronDown, ChevronUp, X, ArrowRight } from "lucide-react";
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

  // Function to render text with bullet points
  const renderTextWithBullets = (text: string) => {
    // Split by new lines and process each line
    const lines = text.split('\n');
    const elements: JSX.Element[] = [];
    
    lines.forEach((line, index) => {
      if (line.trim().startsWith('•')) {
        // This is a bullet point
        elements.push(
          <li key={index} className="ml-4 text-gray-700">
            {line.replace('•', '').trim()}
          </li>
        );
      } else if (line.trim() === '') {
        // Empty line - add spacing
        elements.push(<br key={index} />);
      } else {
        // Regular text or heading
        if (line.match(/^\d+\./)) {
          // This looks like a numbered heading
          elements.push(
            <h5 key={index} className="text-lg font-semibold text-inplast-blue mt-4 mb-2">
              {line}
            </h5>
          );
        } else {
          elements.push(
            <p key={index} className="text-gray-700 mb-2">
              {line}
            </p>
          );
        }
      }
    });
    
    return elements;
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
            <h3 className="text-3xl font-bold text-inplast-blue">{project.title}</h3>
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
          className="w-full max-w-xs text-inplast-blue border-inplast-blue hover:bg-inplast-blue/10"
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
            <h4 className="text-xl font-semibold text-inplast-blue mb-4">Project Gallery</h4>
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
            <div className="space-y-6">
              {project.id === "bopp-line-relocation" ? (
                // Original content for BOPP line relocation project
                <>
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">Initial Condition Assessment</h4>
                    <p className="text-gray-700">
                      The project began with a detailed technical inspection of the BOPP line at its original site. 
                      The team evaluated the condition of extruders, chill rolls, T-dies, tenter frames, rewinders, 
                      and associated auxiliary systems. Key components were tested for mechanical integrity and wear. 
                      This assessment formed the basis for the dismantling strategy and refurbishment plan, ensuring the 
                      equipment could be safely transported and effectively reinstalled.
                    </p>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">Dismantling and Transportation Logistics</h4>
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
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">Repairs, Refurbishment and Upgrades at the New Site</h4>
                    <p className="text-gray-700">
                      Upon arrival at the new facility, the team carried out the planned refurbishment. Worn and obsolete components 
                      were replaced, and mechanical alignments were re-established. Electrical and safety systems were brought up to 
                      modern standards. Energy-saving improvements and modern automation technologies were 
                      integrated to enhance the efficiency and reliability of the line.
                    </p>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">Assembly and Software Modernization</h4>
                    <p className="text-gray-700">
                      The line was reassembled by the team with precision to restore full functionality. Controls engineers 
                      installed updated PLC and SCADA systems, adding new diagnostics, improved process controls, and modern 
                      operator interfaces. These upgrades provided the client with better monitoring and operational capabilities 
                      for future production.
                    </p>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">Commissioning and Performance Optimization</h4>
                    <p className="text-gray-700">
                      The commissioning phase included a systematic approach to testing each component and system. Initial runs were 
                      conducted to verify film thickness accuracy, material strength, and quality consistency. The team worked closely 
                      with the client to make fine adjustments to ensure the line met international production standards for BOPP film products.
                    </p>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">Training and Knowledge Transfer</h4>
                    <p className="text-gray-700">
                      The final phase involved training the client's operational and maintenance staff. The team provided instructions
                      and practical, on-machine training. Topics included safe operation, 
                      routine maintenance, troubleshooting, and system optimization. This ensured the client's personnel 
                      were fully prepared to operate the line independently and safely.
                    </p>
                  </section>
                </>
              ) : project.id === "factory-modernization" ? (
                // Factory Modernization project with orange arrow bullet points
                <div className="space-y-6">
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">1. Dosing System Upgrade</h4>
                    <p className="text-gray-700 mb-2">The dosing section was enhanced with:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>A new Siemens STEP 7 automation system</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Installation of new power cables and drying system</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Replacement of electrical cabinets</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Integration of new load cells for improved measurement accuracy</span>
                      </li>
                    </ul>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">2. Extrusion System Refurbishment</h4>
                    <p className="text-gray-700 mb-2">Two phases of extrusion upgrades included:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>New heaters and cooling system</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Installation of new control valves and clutches</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Overhaul of motors</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Improved heating control via Siemens power modules and Meusburger temperature controllers</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Replacement of cabling and thermocouples</span>
                      </li>
                    </ul>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">3. Chill Roll Rebuild</h4>
                    <p className="text-gray-700 mb-2">The Chill Roll unit was fully rebuilt with:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>New controls and piping</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Flow control valves and polished roll surfaces</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>New heat exchangers for efficient thermal management</span>
                      </li>
                    </ul>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">4. MDO (Machine Direction Orientation) Overhaul</h4>
                    <p className="text-gray-700 mb-2">A complete overhaul of the MDO included:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Replacement of bearings, belts, and rollers</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Installation of advanced temperature control systems and pneumatics</span>
                      </li>
                    </ul>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">5. TDO (Transverse Direction Orientation) Servicing</h4>
                    <p className="text-gray-700 mb-2">The TDO underwent a full service with:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Chain track overhaul</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>New power and control cabling</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Replacement of thermocouples and overhaul of fan motors and gearboxes</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Installation of new electrical cabinets and Siemens control systems</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>New fan motor drives</span>
                      </li>
                    </ul>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">6. PRS System Overhaul</h4>
                    <p className="text-gray-700 mb-2">PRS system improvements featured:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Refurbished rolls and new bearings</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Upgraded corona treatment (2 bottom, 1 top coronas)</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Rebuilt generators and new transformers</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Installation of new electrodes and pneumatics</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Introduction of an NDC infrared automatic thickness control system</span>
                      </li>
                    </ul>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">7. Winder Refurbishment</h4>
                    <p className="text-gray-700 mb-2">Both winding units were fully refurbished:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>New Siemens STEP 7 control systems</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Installation of new electrical cabinets</span>
                      </li>
                    </ul>
                  </section>
                  
                  <section>
                    <h4 className="text-xl font-semibold text-inplast-blue mb-2">8. ATLAS Primary Slitter Modernisation</h4>
                    <p className="text-gray-700 mb-2">The ATLAS primary slitter was thoroughly overhauled and upgraded with:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>New bearings and positioning motors</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>New electrical cabinets, pneumatics, and hydraulic controls</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-inplast-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Updated cabling and Siemens STEP 7 control system</span>
                      </li>
                    </ul>
                  </section>
                </div>
              ) : (
                // Default fallback for other projects
                project.expandedContent && (
                  <div className="space-y-6">
                    {Object.entries(project.expandedContent).map(([key, value], index) => (
                      <section key={index}>
                        <h4 className="text-xl font-semibold text-inplast-blue mb-2 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <div>{renderTextWithBullets(value || '')}</div>
                      </section>
                    ))}
                  </div>
                )
              )}
            </div>
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
