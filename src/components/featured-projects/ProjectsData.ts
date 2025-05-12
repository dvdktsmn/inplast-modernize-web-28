
import { StaticImageData } from 'next/image';

export interface FeaturedProject {
  id: string;
  title: string;
  location: string;
  description: string;
  images: string[];
  isLarge: boolean;
  expandedContent?: {
    initialCondition?: string;
    dismantling?: string;
    repairs?: string;
    assembly?: string;
    commissioning?: string;
    training?: string;
  }
}

export const featuredProjectsData: FeaturedProject[] = [
  {
    id: "bopp-relocation",
    title: "BOPP Line Relocation",
    location: "Hefei, China to Europe",
    description: "Complete disassembly, transportation, refurbishment and reinstallation of a large-scale BOPP production line across continents.",
    images: [
      "/lovable-uploads/4c257c37-8c64-4c31-bcea-916d3639fd25.png",
      "/lovable-uploads/1578a116-7962-49ae-a3ad-3f09928ab06b.png",
      "/lovable-uploads/91e587fb-4c00-46b1-80d1-bd90c401bc95.png",
      "/lovable-uploads/77ca2960-f976-4a79-8837-d1722aba2bce.png"
    ],
    isLarge: true,
    expandedContent: {
      initialCondition: "The project began with a detailed technical inspection of the BOPP line at its original site. The team evaluated the condition of extruders, chill rolls, T-dies, tenter frames, rewinders, and associated auxiliary systems. Key components were tested for mechanical integrity and wear. This assessment formed the basis for the dismantling strategy and refurbishment plan, ensuring the equipment could be safely transported and effectively reinstalled.",
      dismantling: "Following the assessment, the team conducted a structured dismantling process. Over 1,200 mechanical, electrical, and control system components were carefully removed, labeled, and packed. Particular attention was given to critical parts such as the film stretching units and precision rollers. The transport phase involved significant logistical planning due to the equipment size. The team managed the safe transfer of components via sea freight and road transport, coordinating with customs and regulatory authorities to minimize delays. All packaging and securing methods followed international standards to prevent transit damage.",
      repairs: "Upon arrival at the new facility, the team carried out the planned refurbishment. Worn and obsolete components were replaced, and mechanical alignments were re-established. Electrical and safety systems were brought up to modern standards. Energy-saving improvements and modern automation technologies were integrated to enhance the efficiency and reliability of the line.",
      assembly: "The line was reassembled by the team with precision to restore full functionality. Controls engineers installed updated PLC and SCADA systems, adding new diagnostics, improved process controls, and modern operator interfaces. These upgrades provided the client with better monitoring and operational capabilities for future production.",
      commissioning: "The commissioning phase included a systematic approach to testing each component and system. Initial runs were conducted to verify film thickness accuracy, material strength, and quality consistency. The team worked closely with the client to make fine adjustments to ensure the line met international production standards for BOPP film products.",
      training: "The final phase involved training the client's operational and maintenance staff. The team provided instructions and practical, on-machine training. Topics included safe operation, routine maintenance, troubleshooting, and system optimization. This ensured the client's personnel were fully prepared to operate the line independently and safely."
    }
  },
  {
    id: "factory-modernization",
    title: "Factory Modernization",
    location: "Warsaw, Poland",
    description: "Full overhaul and modernization of outdated equipment to increase production efficiency.",
    images: [
      "/lovable-uploads/58d6f434-7c79-4e4e-b8c9-e60fad6a246d.png",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    isLarge: true,
    expandedContent: {
      initialCondition: "The project started with a comprehensive audit of the aging manufacturing facility. Our engineering team conducted a thorough assessment of all machinery, control systems, and production workflows. This evaluation identified equipment with excessive downtime, energy inefficiencies, and obsolete technologies that were limiting production capacity.",
      dismantling: "After developing a phased implementation plan to minimize production disruption, our team began the careful removal of outdated systems. The factory was divided into sections, allowing parts of the facility to remain operational while others underwent modernization. Specialized equipment was disassembled with precision, ensuring valuable components could be recycled or repurposed.",
      repairs: "The modernization included installation of state-of-the-art production equipment with advanced automation capabilities. Existing machinery that was still viable underwent extensive refurbishment with upgraded components. The electrical infrastructure was completely redesigned to accommodate higher power requirements while implementing energy-efficient systems throughout the facility.",
      assembly: "New production lines were installed with a focus on workflow optimization and ergonomic design. The factory layout was reconfigured to eliminate bottlenecks and improve material flow. Advanced Industry 4.0 technologies were integrated, including IoT sensors, real-time monitoring systems, and centralized control architecture.",
      commissioning: "The commissioning process involved rigorous testing of all new and upgraded systems. Performance benchmarks were established for each production area. Our team worked closely with factory operators to fine-tune settings and resolve any integration issues. A series of production test runs were conducted with increasing complexity to ensure all systems functioned harmoniously.",
      training: "Comprehensive training programs were developed for all staff levels, from operators to maintenance personnel and management. These included hands-on equipment operation, preventative maintenance procedures, and production optimization techniques. Digital training materials and reference documentation were created for ongoing use."
    }
  },
  {
    id: "equipment-installation",
    title: "Equipment Installation",
    location: "Bucharest, Romania",
    image: "/lovable-uploads/11e7e270-577f-48ad-b96c-d2396dcd6bc8.png",
    description: "Installation and commissioning of a new production line in a newly constructed facility.",
    images: ["/lovable-uploads/11e7e270-577f-48ad-b96c-d2396dcd6bc8.png"],
    isLarge: false
  },
  {
    id: "precision-machinery-transport",
    title: "Precision Machinery Transport",
    location: "Berlin, Germany",
    image: "/lovable-uploads/cff828aa-5bb4-4bdd-b226-da4108c92879.png",
    description: "Specialized transport solutions for sensitive industrial equipment across European borders.",
    images: ["/lovable-uploads/cff828aa-5bb4-4bdd-b226-da4108c92879.png"],
    isLarge: false
  }
];
