// Define the type for the project data
export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  location: string;
  images: string[];
}

export const featuredProjectsData: FeaturedProject[] = [
  {
    id: "bopp-line",
    title: "BOPP Line Relocation",
    description: "Complete relocation and modernization of a BOPP production line from Europe to Asia, including dismantling, shipping, and recommissioning.",
    location: "Seoul, South Korea",
    images: [
      "/lovable-uploads/1dc4c4dc-881f-465a-b970-fd69ac5845e2.png",
      "/lovable-uploads/1fa7f7db-cd38-45f3-ae7f-b5bd8eaadfbc.png",
      "/lovable-uploads/22b5021e-4336-432d-88c2-bf9cb164f91e.png",
      "/lovable-uploads/238aaba2-eeb1-4d52-ba98-2cca0d50ae40.png",
      "/lovable-uploads/2d246b46-3ba2-4cdb-bca5-1e159a6ec659.png",
      "/lovable-uploads/2d5b85a9-b9b4-4e9a-bc12-88a3fcb6cd5b.png",
    ],
  },
  {
    id: "factory-modernization",
    title: "Factory Modernization",
    description: "Comprehensive upgrade of a legacy manufacturing facility to implement Industry 4.0 standards, improving efficiency by 35%.",
    location: "Detroit, United States",
    images: [
      "/lovable-uploads/f8e1cb0f-f78d-4b8d-af60-0b3975a34974.png",
      "/lovable-uploads/65ca602a-1750-4ffd-a59b-1ee3e00a89db.png",
      "/lovable-uploads/5cc7a08c-15b8-4d95-a48a-44ee3df7c131.png",
      "/lovable-uploads/7559cfc1-a938-4092-b12b-10a9bbfbf6b1.png",
      "/lovable-uploads/9ce0fd86-9dce-439d-acea-50311e1d8369.png",
      "/lovable-uploads/8d75fba7-0633-4b04-a60c-dc13f97ebcbe.png",
    ],
  },
  {
    id: "chemical-plant-upgrade",
    title: "Chemical Plant Upgrade",
    description: "Revamping of a specialty chemical plant to enhance production capacity and reduce environmental impact.",
    location: "Rotterdam, Netherlands",
    images: [
      "/lovable-uploads/4179795f-684d-4379-8631-45991844263f.png",
      "/lovable-uploads/43654991-7641-4407-894f-49e44a345899.png",
      "/lovable-uploads/4444318f-97c5-4c4c-a531-5c1408c5309c.png",
      "/lovable-uploads/4613909b-5991-449c-b9e9-507a9905751d.png",
      "/lovable-uploads/47189954-c941-4a69-8a9b-305013684199.png",
      "/lovable-uploads/48139999-7919-494a-a89d-945997a4792a.png",
    ],
  },
  {
    id: "pharmaceutical-facility",
    title: "Pharmaceutical Facility Expansion",
    description: "Expansion of a pharmaceutical manufacturing plant to meet growing demand for innovative drug therapies.",
    location: "Basel, Switzerland",
    images: [
      "/lovable-uploads/50934954-9493-4199-a958-a9917d951e79.png",
      "/lovable-uploads/51923333-3499-4499-b999-999233331292.png",
      "/lovable-uploads/52985555-5555-4555-b555-555555550555.png",
      "/lovable-uploads/53999999-9999-4999-b999-999999999933.png",
      "/lovable-uploads/54322222-2222-4222-b222-222222222222.png",
      "/lovable-uploads/55999999-9999-4999-b999-999999999999.png",
    ],
  },
];
