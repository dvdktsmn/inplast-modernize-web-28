
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
      "/lovable-uploads/d8c9d55c-2e20-4b44-8d69-cf877a6c22d3.png", 
      "/lovable-uploads/22b5021e-4336-432d-88c2-bf9cb164f91e.png", 
      "/lovable-uploads/1cd4d9cf-1717-4710-a49b-4b41fc973da6.png"
    ],
    afterImages: [
      "/lovable-uploads/e42d7b0d-ec79-4a41-82b9-27dafabdfb9a.png", 
      "/lovable-uploads/fb4c7c14-fa91-430e-b052-a3ab24cbfa6d.png", 
      "/lovable-uploads/ddac229c-45ea-423a-96fb-5faedf762f2e.png"
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
