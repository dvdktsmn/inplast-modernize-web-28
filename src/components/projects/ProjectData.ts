
export interface Project {
  title: string;
  location: string;
  image: string;
  description: string;
  beforeImages?: string[];
  afterImages?: string[];
  galleryImages?: string[];
}

export const projectsData: Project[] = [
  {
    title: "BOPP Line Relocation",
    location: "Hefei, China to Europe",
    image: "/lovable-uploads/4c257c37-8c64-4c31-bcea-916d3639fd25.png",
    description: "Complete disassembly, relocation and reinstallation of a large-scale BOPP production line across continents.",
    beforeImages: [
      "/lovable-uploads/77ca2960-f976-4a79-8837-d1722aba2bce.png", 
      "/lovable-uploads/7b6b6ab0-8a79-44ea-aaca-5edd3ad5e243.png", 
      "/lovable-uploads/e0de7c2b-622d-4eb7-8caf-74469d4e733b.png"
    ],
    afterImages: [
      "/lovable-uploads/93958ee0-2942-4295-aaec-7d8baadc4203.png", 
      "/lovable-uploads/5a1295fa-e1a2-4fa7-9040-af2ae43ef2f4.png", 
      "/lovable-uploads/0edc4beb-8484-4ee5-8225-1d22abd35d55.png"
    ]
  }, 
  {
    title: "Factory Modernization",
    location: "Warsaw, Poland",
    image: "/lovable-uploads/58d6f434-7c79-4e4e-b8c9-e60fad6a246d.png",
    description: "Full overhaul and modernization of outdated equipment to increase production efficiency.",
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  }
  /* Commented out projects
  {
    title: "Equipment Installation",
    location: "Bucharest, Romania",
    image: "/lovable-uploads/11e7e270-577f-48ad-b96c-d2396dcd6bc8.png",
    description: "Installation and commissioning of a new production line in a newly constructed facility."
  },
  {
    title: "Precision Machinery Transport",
    location: "Berlin, Germany",
    image: "/lovable-uploads/cff828aa-5bb4-4bdd-b226-da4108c92879.png",
    description: "Specialized transport solutions for sensitive industrial equipment across European borders."
  },
  {
    title: "Control System Upgrade",
    location: "Helsinki, Finland",
    image: "/lovable-uploads/69f9e44d-caa4-4361-8d49-190c6120084a.png",
    description: "Complete electrical and automation system upgrade for an aging manufacturing plant."
  }
  */
];
