
export interface ServiceDetails {
  id: string;
  title: string;
  description: string;
  fullDescription: string[];
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
  images: string[];
}

export const serviceDetails: ServiceDetails[] = [
  {
    id: "installation",
    title: "Installation and Commissioning",
    description: "Ensure seamless operation from day one. Our experts manage the installation and commissioning process end-to-end, offering localized support and global experience.",
    fullDescription: [
      "Our Installation and Commissioning services provide end-to-end solutions for integrating new equipment into your existing operations. From initial planning to final handover, we manage every aspect of the process.",
      "With a team of expert engineers and technicians, we ensure your equipment is installed correctly, operates efficiently, and meets all regulatory requirements and industry standards.",
      "We understand the complexities of industrial installations and provide tailored solutions that minimize disruption to your operations while maximizing productivity."
    ],
    benefits: [
      "Reduced downtime and faster time to production",
      "Expert handling of complex integration challenges",
      "Comprehensive testing and validation protocols",
      "Full documentation and operator training",
      "Post-installation support and troubleshooting"
    ],
    process: [
      {
        title: "Site Assessment",
        description: "Comprehensive evaluation of installation location, infrastructure requirements, and potential challenges."
      },
      {
        title: "Installation Planning",
        description: "Detailed planning of equipment placement, utility connections, and integration with existing systems."
      },
      {
        title: "Equipment Installation",
        description: "Precision placement and assembly of all components according to manufacturer specifications."
      },
      {
        title: "System Integration",
        description: "Seamless integration with existing production systems and infrastructure."
      },
      {
        title: "Testing & Commissioning",
        description: "Rigorous testing of all functions and gradual commissioning to ensure optimal performance."
      },
      {
        title: "Training & Handover",
        description: "Comprehensive training for operators and maintenance staff, followed by formal handover."
      }
    ],
    images: [
      "/lovable-uploads/11e7e270-577f-48ad-b96c-d2396dcd6bc8.png",
      "/lovable-uploads/69f9e44d-caa4-4361-8d49-190c6120084a.png",
      "/lovable-uploads/143d0504-0382-4d33-a174-3bb4928f22d5.png"
    ]
  },
  {
    id: "relocation",
    title: "Equipment Relocation",
    description: "We specialize in the safe and efficient dismantling of industrial equipment, including full production lines. Our global project experience ensures your assets arrive safely at their new location.",
    fullDescription: [
      "Our Equipment Relocation services provide comprehensive solutions for moving industrial machinery and entire production lines across facilities, countries, or continents.",
      "We handle every aspect of the relocation process, from initial planning and dismantling to transportation logistics, reinstallation, and commissioning at the new location.",
      "With decades of experience in global relocations, we understand the complex challenges involved and have developed proven methodologies to ensure successful outcomes."
    ],
    benefits: [
      "Minimized production downtime during transition",
      "Expert handling of complex logistics challenges",
      "Comprehensive project management from start to finish",
      "Preservation of equipment integrity during transport",
      "Improved layout and workflow optimization at the new location"
    ],
    process: [
      {
        title: "Pre-Relocation Assessment",
        description: "Detailed evaluation of equipment condition, documentation requirements, and logistical challenges."
      },
      {
        title: "Planning & Documentation",
        description: "Comprehensive planning of dismantling sequence, labeling systems, and detailed documentation."
      },
      {
        title: "Dismantling & Packaging",
        description: "Methodical disassembly and specialized packaging of components for safe transport."
      },
      {
        title: "Logistics & Transport",
        description: "Coordination of shipping, customs clearance, and specialized transport for oversized components."
      },
      {
        title: "Reinstallation",
        description: "Precision reassembly at the new location, including alignment and calibration."
      },
      {
        title: "Commissioning & Optimization",
        description: "Systematic testing, commissioning, and optimization for peak performance."
      }
    ],
    images: [
      "/lovable-uploads/4c257c37-8c64-4c31-bcea-916d3639fd25.png",
      "/lovable-uploads/cff828aa-5bb4-4bdd-b226-da4108c92879.png",
      "/lovable-uploads/d8c9d55c-2e20-4b44-8d69-cf877a6c22d3.png"
    ]
  },
  {
    id: "overhaul",
    title: "Complete Equipment Overhaul",
    description: "Restore and modernize your assets. We perform full equipment overhauls to increase longevity, energy efficiency, and operational performance—bringing outdated systems up to today's standards.",
    fullDescription: [
      "Our Complete Equipment Overhaul services extend the life of your valuable machinery while introducing modern features and improved efficiency.",
      "We combine deep mechanical expertise with advanced engineering capabilities to thoroughly assess, repair, refurbish, and upgrade your production equipment.",
      "Every overhaul project is customized to address your specific needs, whether it's addressing worn components, upgrading control systems, or improving overall performance metrics."
    ],
    benefits: [
      "Extended equipment lifespan at a fraction of replacement cost",
      "Improved operational reliability and reduced maintenance needs",
      "Enhanced energy efficiency and reduced operational costs",
      "Modernized controls and improved safety features",
      "Minimal disruption compared to complete replacement"
    ],
    process: [
      {
        title: "Condition Assessment",
        description: "Comprehensive evaluation of current equipment condition, performance metrics, and failure points."
      },
      {
        title: "Overhaul Planning",
        description: "Detailed planning of refurbishment scope, upgrade opportunities, and project timeline."
      },
      {
        title: "Disassembly & Inspection",
        description: "Methodical disassembly and detailed inspection of all components and subsystems."
      },
      {
        title: "Refurbishment & Upgrades",
        description: "Precision repair, replacement of worn components, and implementation of approved upgrades."
      },
      {
        title: "Reassembly & Testing",
        description: "Careful reassembly with new components and comprehensive testing of all systems."
      },
      {
        title: "Performance Validation",
        description: "Rigorous validation of performance improvements against baseline metrics and targets."
      }
    ],
    images: [
      "/lovable-uploads/58d6f434-7c79-4e4e-b8c9-e60fad6a246d.png",
      "/lovable-uploads/e42d7b0d-ec79-4a41-82b9-27dafabdfb9a.png",
      "/lovable-uploads/fb4c7c14-fa91-430e-b052-a3ab24cbfa6d.png"
    ]
  },
  {
    id: "engineering",
    title: "Engineering and Control Systems Upgrade",
    description: "From design to deployment, our electrical engineering solutions support the safe, smart, and scalable control of your production infrastructure, enhancing efficiency and reducing downtime.",
    fullDescription: [
      "In today's industrial landscape, performance, reliability, and energy efficiency are critical to staying competitive. Whether you operate in film production, packaging, or other manufacturing sectors, upgrading your engineering and control systems is essential to maximize uptime, optimize processes, and meet modern safety and quality standards.",
      "Our comprehensive Engineering and Control Systems Upgrade services provide complete modernization solutions—from electrical and mechanical upgrades to advanced automation and software development. We partner closely with you to tailor solutions that integrate seamlessly with your existing equipment and operational goals."
    ],
    benefits: [
      "Improved process control and production consistency",
      "Enhanced data collection and performance analytics",
      "Reduced downtime through predictive maintenance capabilities",
      "Simplified operator interfaces and improved troubleshooting",
      "Scalable architecture that supports future expansion"
    ],
    process: [
      {
        title: "Electrical Cabinet Design and Assembly",
        description: "Custom electrical cabinet design and professional assembly for your specific control requirements."
      },
      {
        title: "Control Systems Integration",
        description: "Seamless integration of control systems with existing equipment and infrastructure."
      },
      {
        title: "Mechanical Systems Upgrades",
        description: "Enhancement of mechanical components for improved performance and reliability."
      },
      {
        title: "Motion Control Solutions",
        description: "Precision motion control implementations for better accuracy and speed."
      },
      {
        title: "Custom Software Development",
        description: "Tailored software solutions designed for your specific operational needs."
      },
      {
        title: "SCADA & HMI Systems",
        description: "Advanced monitoring and control interfaces for improved operator efficiency."
      },
      {
        title: "Energy Efficiency Monitoring and Control",
        description: "Systems to track and optimize energy usage across your production environment."
      }
    ],
    images: [
      "/lovable-uploads/69f9e44d-caa4-4361-8d49-190c6120084a.png",
      "/lovable-uploads/6075f730-5298-4a9d-a8ae-c4f2a49a4896.png",
      "/lovable-uploads/6a2dbc80-9d7f-4543-91be-9b69ad67abb0.png"
    ]
  }
];
