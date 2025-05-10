
export interface FeaturedProject {
  id: string;
  title: string;
  location?: string; // Changed to optional
  description: string;
  images: string[];
  isLarge: boolean;
  tags?: string[];
  completionDate?: string;
  beforeImages?: string[];
  afterImages?: string[];
}

export const featuredProjectsData: FeaturedProject[] = [
  // Large Projects
  {
    id: "bopp-line-relocation",
    title: "BOPP Line Relocation",
    location: "Hefei, China to Europe",
    description: "Complete disassembly, relocation, and reinstallation of a large-scale BOPP production line across continents. The project involved complex logistics planning, specialized transportation solutions, and comprehensive reinstallation services. Our team managed every aspect from initial site assessment to final commissioning, ensuring minimal downtime and optimal performance at the new location.",
    images: [
      "/lovable-uploads/4c257c37-8c64-4c31-bcea-916d3639fd25.png",
      "/lovable-uploads/d8c9d55c-2e20-4b44-8d69-cf877a6c22d3.png",
      "/lovable-uploads/22b5021e-4336-432d-88c2-bf9cb164f91e.png",
      "/lovable-uploads/1cd4d9cf-1717-4710-a49b-4b41fc973da6.png",
      "/lovable-uploads/e42d7b0d-ec79-4a41-82b9-27dafabdfb9a.png",
      "/lovable-uploads/fb4c7c14-fa91-430e-b052-a3ab24cbfa6d.png"
    ],
    isLarge: true,
    tags: ["Equipment Relocation", "Production Line", "Cross-Continental"],
    completionDate: "2024-02-15"
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
    completionDate: "2023-11-30"
  },
  
  // Small Projects
  {
    id: "extruder-retrofit",
    title: "Extruder Retrofit",
    description: "Complete overhaul of heating, cooling, and lubrication systems for a PP extruder.",
    images: ["/placeholder.svg", "/placeholder.svg"],
    isLarge: false
  },
  {
    id: "electrical-system-upgrade",
    title: "Electrical System Upgrade",
    description: "Complete electrical system upgrade for a BOPP line: installation of new motors, drives, control and SCADA systems.",
    images: ["/placeholder.svg"],
    isLarge: false,
    beforeImages: [
      "/lovable-uploads/bc259862-7ad5-4230-863a-71c8c4aace70.png",
      "/lovable-uploads/a3939ff9-7351-4e7a-9f54-d3b8acc18320.png",
      "/lovable-uploads/73452c3d-0601-4271-a578-a4059ce5af93.png"
    ],
    afterImages: [
      "/lovable-uploads/181cb4de-b07e-4ac1-b737-1e767ca94fb7.png",
      "/lovable-uploads/8c3f7074-b3d0-4eea-8cae-bd97537b13a5.png",
      "/lovable-uploads/1a3bdb23-45e2-43a6-82e4-dd2ebf315b75.png"
    ]
  },
  {
    id: "chill-roll-retrofit",
    title: "Chill Roll Retrofit",
    description: "Replacement of conventional gearmotor with direct drive torque motor.",
    images: ["/placeholder.svg"],
    isLarge: false
  },
  {
    id: "metalliser-revamping",
    title: "Metalliser Revamp",
    description: "Comprehensive revitalization of an aging metalliser.",
    images: ["/placeholder.svg", "/placeholder.svg"],
    isLarge: false
  }
];
