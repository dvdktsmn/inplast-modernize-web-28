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
      "/lovable-uploads/5cc7a08c-15b8-4d95-a48a-44ee3df7c131.png",
      "/lovable-uploads/a453142d-4a12-4724-8048-1a974eeb6afd.png",
      "/lovable-uploads/6c03b2cb-d423-44fb-8c08-cd82cc7d2874.png",
      "/lovable-uploads/65ca602a-1750-4ffd-a59b-1ee3e00a89db.png",
      "/lovable-uploads/9239700b-95fc-4884-a3b8-b246f905dcf4.png"
    ]
  },
  {
    id: "relocation",
    title: "Equipment Relocation",
    description: "We specialize in the safe and efficient dismantling of industrial equipment, including full production lines. Our global project experience ensures your assets arrive safely at their new location.",
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
      "/lovable-uploads/c22e4bb3-b9fb-43cd-b0f2-550573a5f443.png",
      "/lovable-uploads/66647945-3588-4d51-9ca0-452fc17469df.png",
      "/lovable-uploads/768a2ff2-bf72-42c2-84f9-bce62a9cdc34.png",
      "/lovable-uploads/3d1a36d3-0355-4c6f-bc11-bc36b4d54a2a.png",
      "/lovable-uploads/0e072492-f758-4d94-8516-a3df563c55d4.png"
    ]
  },
  {
    id: "overhaul",
    title: "Complete Equipment Overhaul",
    description: "Restore and modernize your assets. We perform full equipment overhauls to increase longevity, energy efficiency, and operational performance—bringing outdated systems up to today's standards.",
    fullDescription: [
      "Maximize the value and performance of your existing assets with our comprehensive equipment overhaul and upgrade services. We help you extend equipment lifespan, improve operational efficiency, and meet current production standards without the need for full replacement. Our approach combines deep technical expertise with a structured process to minimize downtime and ensure consistent results.",
      /*"Our Complete Equipment Overhaul services extend the life of your valuable machinery while introducing modern features and improved efficiency.",
      */"We combine deep mechanical expertise with advanced engineering capabilities to thoroughly assess, repair, refurbish, and upgrade your production equipment.",
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
