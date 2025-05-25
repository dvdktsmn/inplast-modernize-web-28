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
    location: "From China to Europe",
    image: "/lovable-uploads/4c257c37-8c64-4c31-bcea-916d3639fd25.png",
    description: "Complete disassembly, transportation, refurbishment and reinstallation of a large-scale BOPP production line across continents.",
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
    location: "Poland",
    image: "/lovable-uploads/58d6f434-7c79-4e4e-b8c9-e60fad6a246d.png",
    description: "Full overhaul and modernization of outdated equipment to increase production efficiency.",
    galleryImages: [
      "/lovable-uploads/9f927459-d47b-40a5-bdac-57a022b86652.png",
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
      
      "/lovable-uploads/a60bbd12-1131-48e2-82f5-a4b6baaacb8a.png",
      "/lovable-uploads/ec183a71-991a-4061-8ef2-6ca5e274ed93.png",
      "/lovable-uploads/82c95d55-6eff-4522-b34d-24ca97e04e03.png",
      "/lovable-uploads/3b7f8553-3c14-42a7-972b-0af6e4e520d5.png",
      "/lovable-uploads/744937aa-c05a-41f4-a826-b8375f3641e7.png",
      "/lovable-uploads/74e8f240-e481-4082-b9a5-7a91b20df85e.png",
      "/lovable-uploads/a678a1b6-cfd8-4473-91fe-a5a91d9265ba.png",
      "/lovable-uploads/1e5f3b8c-5b87-4db5-a288-82ab5a568a47.png"
    ]
  },
  // Added small projects from featuredProjectsData
  {
    title: "Extruder Retrofitting",
    location: "",
    image: "/lovable-uploads/6a402cc3-f2e6-4dcf-aac5-98513623017f.png",
    description: "Complete overhaul of heating, cooling, and lubrication systems for a polypropylene extruder.",
    galleryImages: [
      "/lovable-uploads/6a402cc3-f2e6-4dcf-aac5-98513623017f.png",
      "/lovable-uploads/ff1b2119-4abb-48ea-ad6a-b913342ae6eb.png"
    ]
  },
  {
    title: "Electrical System Upgrade",
    location: "",
    image: "/lovable-uploads/7559cfc1-a938-4092-b12b-10a9bbfbf6b1.png",
    description: "Implementation of new high-efficiency motors and drives, control and SCADA systems.",
    galleryImages: [
      "/lovable-uploads/7559cfc1-a938-4092-b12b-10a9bbfbf6b1.png",
      "/lovable-uploads/53726012-eb6d-4113-a052-78a0952b83e9.png",
      "/lovable-uploads/6864dcf5-bd5d-4ad8-b67c-35a2ef6b4492.png",
      "/lovable-uploads/f0d79ea5-1ec0-4fa1-a72a-8cac6dd293c8.png"
    ]
  },
  {
    title: "Chill Roll Retrofit",
    location: "",
    image: "/lovable-uploads/f8e1cb0f-f78d-4b8d-af60-0b3975a34974.png",
    description: "Replacement of conventional gearmotor with direct torque motor.",
    galleryImages: [
      "/lovable-uploads/f8e1cb0f-f78d-4b8d-af60-0b3975a34974.png",
      "/lovable-uploads/9ce0fd86-9dce-439d-acea-50311e1d8369.png"
    ]
  },
  {
    title: "Metalliser Revamp",
    location: "",
    image: "/lovable-uploads/010293e4-1059-43b2-8a41-b7f56abd0649.png",
    description: "Comprehensive revitalization of an aging metalliser.",
    galleryImages: [
      "/lovable-uploads/010293e4-1059-43b2-8a41-b7f56abd0649.png", 
      "/lovable-uploads/af6834c7-d129-43ce-845a-fb3d8e2734c9.png"
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
    description: "Complete electrical and automation system upgrade for an aging manufacturing plant."
  }
  */
];
