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
      "Successful industrial operations depend on the flawless installation and commissioning of equipment and systems. We provide comprehensive turnkey solutions—from full project design and planning to equipment overhaul and final commissioning—ensuring your operations are running at peak performance from day one.",
      "Our experience across industries allows us to deliver seamless project execution with minimal disruption to your business.",
      "From start to finish, we deliver reliable installation and commissioning services designed to optimize your production capabilities and support long-term operational excellence."
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
        title: "Turnkey Project Execution",
        description: "We manage every stage of your project, from initial concept and engineering to complete installation and operational handover."
      },
      {
        title: "Full System Design and Engineering",
        description: "Our experts design fully customized system layouts, electrical and mechanical schematics, and control architectures to meet your unique operational requirements."
      },
      {
        title: "Equipment Installation",
        description: "Precise mechanical and electrical installation of all machinery and support systems, carried out to international safety and quality standards."
      },
      {
        title: "Control System Integration",
        description: "We integrate advanced control and automation systems to ensure optimal machine performance and smooth coordination across your production lines."
      },
      {
        title: "Equipment Overhaul and Upgrades",
        description: "Our team refurbishes, upgrades, or retrofits your existing equipment to extend its lifespan, improve reliability, and adapt to new production demands."
      },
      {
        title: "Commissioning and Operator Training",
        description: "We carry out thorough functional testing, calibration, and system verification, and provide comprehensive training to your personnel for safe and efficient operation."
      }
    ],
    images: [
      "/lovable-uploads/8527f32f-6f15-4f6b-9bb2-baec7fd5b497.png",
      "/lovable-uploads/2cbd6041-5819-4f3c-afe9-162b2080c7b7.png",
      "/lovable-uploads/e41d37fe-a111-4f09-9d3f-81b90123a72a.png",
      "/lovable-uploads/50beace4-a86d-4334-ac2b-c04ba9b9b231.png",
      "/lovable-uploads/d23db893-c5a3-4dc1-8eba-2a6ce3c7ceba.png"
    ]
  },
  {
    id: "relocation",
    title: "Equipment Relocation",
    description: "We specialize in the safe and efficient dismantling, relocation and assembly of industrial equipment, including full production lines. Our global project experience ensures your assets arrive safely at their new location.",
    fullDescription: [
      "Relocating industrial equipment demands precision, expertise, and meticulous planning. Our comprehensive equipment relocation services ensure minimal downtime and maximum efficiency, whether you're moving a single machine or an entire facility."
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
        title: "Dismantling",
        description: "Expert disassembly of machinery and equipment, ensuring safe handling and preparation for transport."
      },
      {
        title: "Seaworthy Packaging",
        description: "Robust packaging solutions that protect your equipment against environmental factors during maritime transit."
      },
      {
        title: "Oversized Equipment Handling",
        description: "Specialized techniques and equipment to manage the relocation of large or heavy machinery safely and efficiently."
      },
      {
        title: "Transportation Logistics",
        description: "Coordinated logistics planning to ensure timely and secure delivery of equipment to its new location."
      },
      {
        title: "Reassembly and Alignment at New Location",
        description: "Comprehensive reassembly of machinery by experienced technicians, including mechanical, electrical, and control system reconnections, precision alignment, and functional testing to ensure full operational readiness."
      },
      {
        title: "Installation and Commissioning",
        description: "Final setup and fine-tuning of systems so your equipment is fully integrated and ready for immediate production."
      }
    ],
    images: [
      "/lovable-uploads/d2d69cd4-0766-4486-9a80-b60fc87beae6.png",
      "/lovable-uploads/d27b654c-f8b6-42c5-8da0-f6b4f1162ccb.png",
      "/lovable-uploads/37477ea0-fd08-4236-a799-d4edb282d744.png",
      "/lovable-uploads/af4043e2-9028-40ad-a179-44747b766517.png",
      "/lovable-uploads/600c531c-712d-49aa-82cc-ca5fba294e27.png",
      "/lovable-uploads/6ac5fc62-9f37-48a2-b672-80f564889cc5.png",
      "/lovable-uploads/4f8a911d-51d1-44fc-a9d3-b22163157dbf.png"
    ]
  },
  {
    id: "overhaul",
    title: "Complete Equipment Overhaul",
    description: "Restore and modernize your assets. We perform full equipment overhauls to increase longevity, energy efficiency, and operational performance—bringing outdated systems up to today's standards.",
    fullDescription: [
      "Maximize the value and performance of your existing assets with our comprehensive equipment overhaul and upgrade services. We help you extend equipment lifespan, improve operational efficiency, and meet current production standards without the need for full replacement. Our approach combines deep technical expertise with a structured process to minimize downtime and ensure consistent results.",
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
        title: "Condition Assessment and Diagnostics",
        description: "Comprehensive evaluation of current equipment condition, performance metrics, and failure points."
      },
      {
        title: "Disassembly & Inspection",
        description: "Methodical disassembly and detailed inspection of all components and subsystems."
      },
      {
        title: "Retrofitting and Modernization",
        description: "Precision repair, replacement of worn components, and implementation of approved upgrades."
      },
      {
        title: "Reassembly & Testing",
        description: "Careful reassembly with new components and comprehensive testing of all systems."
      },
      {
        title: "Performance Validation",
        description: "Rigorous validation of performance improvements against baseline metrics and targets."
      },
      {
        title :"Ongoing Support and Optimization",
        description: "We offer continued technical support, preventive maintenance recommendations, and process optimization services to maintain peak performance over time."
      }
    ],
    images: [
      "/lovable-uploads/68cc1f5f-3a69-40a0-a103-867399eed289.png",
      "/lovable-uploads/3b0653b5-eb67-44fb-9ccf-b7d0fe8f77d0.png",
      "/lovable-uploads/8ed38d79-1922-40dd-96e8-e399790a3d96.png",
      "/lovable-uploads/419a4706-4c5f-4192-866c-44fe76de2ff9.png",
      "/lovable-uploads/e52ddccb-3501-42dc-a65a-40e7ac740632.png",
      "/lovable-uploads/c2fc1549-81c9-4c4e-8b4c-f964b765911d.png",
      "/lovable-uploads/a357439d-7cc2-4384-917a-b9ff4fee2569.png",
      "/lovable-uploads/5adfd9c1-78e7-46bb-9fcc-614cb352da4b.png"
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
        description: "We integrate modern PLCs and automation technologies to streamline and enhance your production processes."
      },
      {
        title: "Mechanical Systems Upgrades",
        description: "Upgrade and retrofit mechanical components to improve equipment reliability and performance."
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
        description: "We design advanced monitoring and control interfaces for improved operator efficiency."
      },
      {
        title: "Energy Efficiency Monitoring and Control",
        description: "Systems to track and optimize energy usage across your production environment."
      }
    ],
    images: [
      "/lovable-uploads/1dc4c4dc-881f-465a-b970-fd69ac5845e2.png",
      "/lovable-uploads/5726c4a7-6f1a-44a2-8387-c6c8f4507772.png",
      "/lovable-uploads/99933b14-caab-4d71-8acb-e9670b38d1cf.png",
      "/lovable-uploads/2d246b46-3ba2-4cdb-bca5-1e159a6ec659.png",
      "/lovable-uploads/ce79528d-6a07-4b95-a327-f26d29ae5163.png"
    ]
  }
];
