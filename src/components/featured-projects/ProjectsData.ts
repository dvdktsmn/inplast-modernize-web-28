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
      "/lovable-uploads/2e2160f1-1e0e-4120-8ef1-eeea1c4ab067.png",
      "/lovable-uploads/eee6f781-9dbc-4db7-8c80-3d07b1937711.png",
      "/lovable-uploads/d1018d24-25f0-4118-ab84-a30d8c5d3b83.png",
      "/lovable-uploads/ad5f5d26-92e6-4096-98a6-699859421e3f.png",
      "/lovable-uploads/4feef609-5d90-4401-8274-80e7c09586fd.png",
      "/lovable-uploads/3b113645-2d1c-4983-8232-25e767d37243.png",
      "/lovable-uploads/bf0ba4c8-f608-41fe-a485-68c59b7e5c19.png"
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
      initialAssessment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      implementation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      challenges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      solutions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      results: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      conclusion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
