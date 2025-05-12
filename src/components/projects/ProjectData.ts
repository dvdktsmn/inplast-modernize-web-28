
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
    description: "Complete disassembly, relocation and refurbishment of a large-scale BOPP production line across continents.",
    galleryImages: ["/lovable-uploads/1578a116-7962-49ae-a3ad-3f09928ab06b.png",
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
      "/lovable-uploads/25b7ff67-2316-4830-9bea-17c18382f88f.png"]
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
