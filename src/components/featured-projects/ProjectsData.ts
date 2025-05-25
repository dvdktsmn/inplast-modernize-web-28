
export interface FeaturedProject {
  id: string;
  title: string;
  location?: string; // Changed to optional
  description: string;
  images: string[];
  isLarge: boolean;
  tags?: string[];
  expandedContent?: {
    initialAssessment?: string;
    implementation?: string;
    challenges?: string;
    solutions?: string;
    results?: string;
    conclusion?: string;
  };
}

export const featuredProjectsData: FeaturedProject[] = [
  // Large Projects
  {
    id: "bopp-line-relocation",
    title: "BOPP Line Relocation with Refurbishment and Upgrades",
    location: "Hefei, China to Europe",
    description: "Complete disassembly, relocation, and reinstallation of a large-scale BOPP production line across continents. The project involved complex logistics planning, specialized transportation solutions, and comprehensive reinstallation services. Our team managed every aspect from initial site assessment to final commissioning, ensuring minimal downtime and optimal performance at the new location.",
    images: [
      "/lovable-uploads/1578a116-7962-49ae-a3ad-3f09928ab06b.png",
      "/lovable-uploads/91e587fb-4c00-46b1-80d1-bd90c401bc95.png",
      "/lovable-uploads/77ca2960-f976-4a79-8837-d1722aba2bce.png",
      "/lovable-uploads/0a01b4c1-195e-462f-ae34-976a43e2c5ab.png",
      "/lovable-uploads/e0de7c2b-622d-4eb7-8caf-74469d4e733b.png",
      "/lovable-uploads/93958ee0-2942-4295-aaec-7d8baadc4203.png",
      "/lovable-uploads/7b6b6ab0-8a79-44ea-aaca-5edd3ad5e243.png",
      "/lovable-uploads/d51699ee-1192-4907-a479-037e66693776.png",
      "/lovable-uploads/f5df3110-e434-4145-9c71-2a4e62ecc6ad.png",
      "/lovable-uploads/650e8d7b-abac-4081-b625-0dbc92db7f3b.png",
      "/lovable-uploads/5a1295fa-e1a2-4fa7-9040-af2ae43ef2f4.png",
      "/lovable-uploads/bc1579f4-de79-45ae-a4c4-ec4693e5c62a.png", 
      "/lovable-uploads/2d5b85a9-b9b4-4e9a-bc12-88a3fcb6cd5b.png",
      "/lovable-uploads/0edc4beb-8484-4ee5-8225-1d22abd35d55.png",
      "/lovable-uploads/e36799dd-059e-4bc0-bca0-9bd4f837bd9b.png",
      "/lovable-uploads/25b7ff67-2316-4830-9bea-17c18382f88f.png"
    ],
    isLarge: true,
    tags: ["Equipment Relocation", "Production Line", "Cross-Continental"]
  },
  {
    id: "factory-modernization",
    title: "Factory Modernization",
    location: "Warsaw, Poland",
    description: "Full overhaul and modernization of outdated equipment to increase production efficiency by 35%. This comprehensive project included updating control systems, implementing energy-efficient solutions, and optimizing production flow. Our team worked closely with the client to minimize production interruption while delivering a state-of-the-art facility that meets current industry standards.",
    images: [
      "/lovable-uploads/58d6f434-7c79-4e4e-b8c9-e60fad6a246d.png",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    isLarge: true,
    tags: ["Modernization", "Efficiency Improvement", "Control Systems"],
    expandedContent: {
      initialAssessment: "The project involved a comprehensive modernisation of a production line to improve operational efficiency, enhance process control, and extend equipment lifespan. The upgrade encompassed key components across the entire line, from dosing to winding systems. The modernisation was executed in multiple stages, each addressing specific systems and machinery.",
      implementation: "The dosing section was enhanced with a new Siemens STEP 7 automation system, installation of new power cables and drying system, replacement of electrical cabinets, and integration of new load cells for improved measurement accuracy. Two phases of extrusion upgrades included new heaters and cooling system, installation of new control valves and clutches, overhaul of motors, improved heating control via Siemens power modules and Meusburger temperature controllers, and replacement of cabling and thermocouples.",
      challenges: "The Chill Roll unit was fully rebuilt with new controls and piping, flow control valves and polished roll surfaces, and new heat exchangers for efficient thermal management. A complete overhaul of the MDO included replacement of bearings, belts, and rollers, installation of advanced temperature control systems and pneumatics, and piping upgrades.",
      solutions: "The TDO underwent a full service with chain track overhaul, new power and control cabling, replacement of thermocouples and overhaul of fan motors and gearboxes, installation of new electrical cabinets and Siemens control systems, and new fan motor drives. PRS system improvements featured refurbished rolls and new bearings, upgraded corona treatment (2 bottom, 1 top coronas), rebuilt generators and new transformers, installation of new electrodes and pneumatics, and introduction of an NDC infrared automatic thickness control system.",
      results: "Both winding units were fully refurbished with new Siemens STEP 7 control systems and installation of new electrical cabinets. The ATLAS unit was thoroughly overhauled and upgraded with new bearings and positioning motors, new electrical cabinets, pneumatics, and hydraulic controls, updated cabling and Siemens STEP 7 control system.",
      conclusion: "The comprehensive modernization successfully transformed the production line, delivering improved operational efficiency, enhanced process control, and extended equipment lifespan. The staged implementation approach minimized production downtime while ensuring each system was upgraded to modern standards with advanced control systems and improved reliability."
    }
  },
  
  // Small Projects
  {
    id: "extruder-retrofit",
    title: "Extruder Retrofitting",
    description: "Complete overhaul of heating, cooling, and lubrication systems for a polypropylene extruder.",
    images: [
      "/lovable-uploads/6a402cc3-f2e6-4dcf-aac5-98513623017f.png",
      "/lovable-uploads/ff1b2119-4abb-48ea-ad6a-b913342ae6eb.png" 
    ],
    isLarge: false
  },
  {
    id: "electrical-system-upgrade",
    title: "Electrical System Upgrade",
    description: "Implementation of new high-efficiency motors and drives, control and SCADA systems.",
    images: [
      "/lovable-uploads/7559cfc1-a938-4092-b12b-10a9bbfbf6b1.png",
      "/lovable-uploads/53726012-eb6d-4113-a052-78a0952b83e9.png",
      "/lovable-uploads/6864dcf5-bd5d-4ad8-b67c-35a2ef6b4492.png",
      "/lovable-uploads/f0d79ea5-1ec0-4fa1-a72a-8cac6dd293c8.png",
      "/lovable-uploads/374392c1-66d1-4c15-a8cc-017e405f2547.png",
      "/lovable-uploads/54648c53-c95b-41d6-94a0-a737d55b8f6b.png",
      "/lovable-uploads/238aaba2-eeb1-4d52-ba98-2cca0d50ae40.png",
      "/lovable-uploads/51fd588d-3809-47da-8365-5d016dcb1223.png",
      "/lovable-uploads/8d75fba7-0633-4b04-a60c-dc13f97ebcbe.png",
      "/lovable-uploads/3372da09-4199-48b3-889e-dcd4d92501f5.png"
      
    ],
    isLarge: false
  },
  {
    id: "chill-roll-retrofit",
    title: "Chill Roll Retrofit",
    description: "Replacement of conventional gearmotor with direct torque motor.",
    images: [
      "/lovable-uploads/f8e1cb0f-f78d-4b8d-af60-0b3975a34974.png",
      "/lovable-uploads/9ce0fd86-9dce-439d-acea-50311e1d8369.png"
    ],
    isLarge: false
  },
  {
    id: "metalliser-revamping",
    title: "Metalliser Revamp",
    description: "Comprehensive revitalization of an aging metalliser.",
    images: [
      "/lovable-uploads/010293e4-1059-43b2-8a41-b7f56abd0649.png", 
      "/lovable-uploads/af6834c7-d129-43ce-845a-fb3d8e2734c9.png"
    ],
    isLarge: false
  }
];
