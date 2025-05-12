
export interface FeaturedProject {
  id: string;
  title: string;
  location?: string; // Changed to optional
  description: string;
  images: string[];
  isLarge: boolean;
  tags?: string[];
  completionDate?: string;
}

export const featuredProjectsData: FeaturedProject[] = [
  // Large Projects
  {
    id: "bopp-line-relocation",
    title: "BOPP Line Relocation with Refurbishment and Upgrades",
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
    title: "Extruder Retrofitting",
    description: "Complete overhaul of heating, cooling, and lubrication systems for a polypropylene extruder.",
    images: ["/placeholder.svg", "/placeholder.svg"],
    isLarge: false
  },
    {
    id: "electrical-system-upgrade",
    title: "Electrical System Upgrade",
    description: "Implementation of new high-efficiency motors and drives, control and SCADA systems.",
    images: ["/placeholder.svg"],
    isLarge: false
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
