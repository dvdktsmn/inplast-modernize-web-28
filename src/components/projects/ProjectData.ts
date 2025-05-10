
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
  },
  {
    title: "Extruder Retrofit",
    location: "Manufacturing Facility",
    image: "/lovable-uploads/2343d9d3-823a-459d-8eca-893ffd5bf54b.png",
    description: "Complete overhaul of heating, cooling, and lubrication systems for a polypropylene extruder.",
    beforeImages: [
      "/lovable-uploads/2343d9d3-823a-459d-8eca-893ffd5bf54b.png"
    ],
    afterImages: [
      "/lovable-uploads/d4c61cfb-8c3b-4d89-a1af-4caf655311eb.png"
    ]
  },
  {
    title: "Electrical System Upgrade",
    location: "Production Plant",
    image: "/lovable-uploads/bc259862-7ad5-4230-863a-71c8c4aace70.png",
    description: "Complete electrical system upgrade for a BOPP line: installation of new motors, drives, control and SCADA systems.",
    beforeImages: [
      "/lovable-uploads/bc259862-7ad5-4230-863a-71c8c4aace70.png",
      "/lovable-uploads/a3939ff9-7351-4e7a-9f54-d3b8acc18320.png",
      "/lovable-uploads/73452c3d-0601-4271-a578-a4059ce5af93.png",
      "/lovable-uploads/a02aa896-9a40-425b-9813-d14d8b5720b9.png",
      "/lovable-uploads/6b991abd-6698-4364-b070-9fe35422ba6e.png",
      "/lovable-uploads/57ebdda8-422f-46a7-bb74-ae6ad1e940f7.png",
      "/lovable-uploads/fea4cdb8-01d5-46f6-8ee8-9be97cdd8184.png"
    ],
    afterImages: [
      "/lovable-uploads/181cb4de-b07e-4ac1-b737-1e767ca94fb7.png",
      "/lovable-uploads/8c3f7074-b3d0-4eea-8cae-bd97537b13a5.png",
      "/lovable-uploads/1a3bdb23-45e2-43a6-82e4-dd2ebf315b75.png",
      "/lovable-uploads/ad21568c-10c9-46f9-8658-20dd9c5dede2.png",
      "/lovable-uploads/6e6803fc-3f60-4df7-9db8-f7cf179a94fc.png",
      "/lovable-uploads/bdf20c7c-6682-41b9-80aa-adda947bb1a0.png",
      "/lovable-uploads/02a2595d-0ab8-4df3-a949-351409012367.png",
      "/lovable-uploads/0bff3f54-2418-4b73-b300-7e3b546e7a92.png",
      "/lovable-uploads/ea8a40f8-9ac1-4cde-a4e0-4a686270b924.png",
      "/lovable-uploads/42e7695d-2f90-4d7b-aa52-8fc531da42f5.png",
      "/lovable-uploads/efd9635c-cf5a-4363-b31d-2378a7734e9c.png",
      "/lovable-uploads/64e4688a-3a3d-4594-b340-dca52ca7d05f.png",
      "/lovable-uploads/e830958e-663c-4452-a371-42ac95ab0e1d.png"
    ]
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
    description: "Complete electrical and control system upgrade for an aging manufacturing plant."
  }
  */
];
