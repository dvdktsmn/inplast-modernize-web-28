
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
    description: "The project involved a comprehensive modernisation of a production line to improve operational efficiency, enhance process control, and extend equipment lifespan. The upgrade encompassed key components across the entire line,  including dosing, extrusion, Chill Roll, MDO, TDO, PRS, winder, and the ATLAS unit. Enhancements included new Siemens STEP 7 automation, upgraded control systems, new electrical cabinets, improved thermal and pneumatic controls, and the integration of advanced measurement technologies. The upgrades aimed to boost operational efficiency, ensure reliable process control, and extend equipment lifespan, positioning the facility for higher performance and future scalability.",
    images: [
      "/lovable-uploads/ba87da91-2297-4c7b-9a97-9b18ececd7ef.png",
      "/lovable-uploads/bf7a8d7b-43d2-4cf3-b755-a1e3c0c67570.png",
      "/lovable-uploads/21e2ec87-aad5-45cf-8298-0216c1c693b6.png",
      "/lovable-uploads/bbf0def7-12af-47d8-b444-015dd2bcf3ab.png",
      "/lovable-uploads/85750ad2-a092-4aaf-acd8-ec8f12f8d5e4.png",
      "/lovable-uploads/f448c1fa-49c2-4267-9ad8-f87780686fcd.png",
      "/lovable-uploads/b581c274-6e6f-45c4-ac1b-88397b92a6ed.png",
      "/lovable-uploads/5d685e7e-6aaa-4fd9-bb14-95f6ed1b073f.png",
      "/lovable-uploads/fb916f67-2b30-413b-8f60-4fdc8fbf8730.png",
      "/lovable-uploads/56064b64-1862-4d7e-83cf-376c6479ced6.png",
      "/lovable-uploads/d77a0f62-a202-496d-a2fb-2fd5cc4134ef.png",
      "/lovable-uploads/747e71d3-7977-4763-85af-f7b62b71dec8.png",
      "/lovable-uploads/67ada82f-d761-4d32-8d79-315378083e21.png",
      "/lovable-uploads/b9ea7181-6b86-4f81-a20b-a882b3ccf1c0.png",
      "/lovable-uploads/08e3016f-5343-4fb4-b14d-0147ded54c4c.png",
      "/lovable-uploads/9f927459-d47b-40a5-bdac-57a022b86652.png",
      "/lovable-uploads/a60bbd12-1131-48e2-82f5-a4b6baaacb8a.png",
      "/lovable-uploads/ec183a71-991a-4061-8ef2-6ca5e274ed93.png",
      "/lovable-uploads/82c95d55-6eff-4522-b34d-24ca97e04e03.png",
      "/lovable-uploads/3b7f8553-3c14-42a7-972b-0af6e4e520d5.png",
      "/lovable-uploads/744937aa-c05a-41f4-a826-b8375f3641e7.png",
      "/lovable-uploads/74e8f240-e481-4082-b9a5-7a91b20df85e.png",
      "/lovable-uploads/a678a1b6-cfd8-4473-91fe-a5a91d9265ba.png",
      "/lovable-uploads/1e5f3b8c-5b87-4db5-a288-82ab5a568a47.png"
    ],
    isLarge: true,
    tags: ["Modernization", "Efficiency Improvement", "Control Systems"],
    
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
