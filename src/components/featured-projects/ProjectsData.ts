
export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  location: string;
  isLarge?: boolean; // Added isLarge property
  details?: {
    client?: string;
    location?: string;
    date?: string;
    services?: string[];
  };
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  featured: boolean;
  details?: {
    client?: string;
    location?: string;
    date?: string;
    services?: string[];
  };
  content?: {
    overview?: string;
    challenge?: string;
    solution?: string;
    results?: string;
  };
  gallery?: string[];
  beforeAfterGallery?: {
    before: string;
    after: string;
    caption?: string;
  }[];
  nextProjectId?: string;
  prevProjectId?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "biax-film-machine-upgrade",
    title: "Biax Film Machine Upgrade",
    category: "Electrical Engineering",
    description: "Complete electrical system replacement of a Biaxially-Oriented film production line.",
    location: "Central Europe",
    isLarge: true, // This is a large project
    images: [
      "/lovable-uploads/e0de7c2b-622d-4eb7-8caf-74469d4e733b.png",
      "/lovable-uploads/53726012-eb6d-4113-a052-78a0952b83e9.png",
      "/lovable-uploads/bc1579f4-de79-45ae-a4c4-ec4693e5c62a.png",
    ],
    details: {
      client: "European Film Producer",
      location: "Central Europe",
      date: "2022",
      services: ["Electrical Engineering", "PLC Programming", "Installation", "Commissioning"]
    }
  },
  {
    id: "thermoforming-line-installation",
    title: "Thermoforming Line Installation",
    category: "Installation & Commissioning",
    description: "Installation and start-up of a complete thermoforming production line.",
    location: "Eastern Europe",
    isLarge: true, // This is a large project
    images: [
      "/lovable-uploads/6a402cc3-f2e6-4dcf-aac5-98513623017f.png",
      "/lovable-uploads/650e8d7b-abac-4081-b625-0dbc92db7f3b.png",
      "/lovable-uploads/91e587fb-4c00-46b1-80d1-bd90c401bc95.png",
    ],
    details: {
      client: "Packaging Manufacturer",
      location: "Eastern Europe",
      date: "2023",
      services: ["Installation Supervision", "Commissioning", "Operator Training"]
    }
  }
];
