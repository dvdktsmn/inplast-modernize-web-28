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
    ],
    images: [
      "/lovable-uploads/ddac229c-45ea-423a-96fb-5faedf762f2e.png",
      "/lovable-uploads/f2ff3edd-250c-48e5-a3b2-86ff136b2a51.png",
      "/lovable-uploads/4c257c37-8c64-4c31-bcea-916d3639fd25.png",
      "/lovable-uploads/22b5021e-4336-432d-88c2-bf9cb164f91e.png",
      "/lovable-uploads/6075f730-5298-4a9d-a8ae-c4f2a49a4896.png",
      "/lovable-uploads/f4facf59-8aa8-44a8-a2f3-45407f7dfc4f.png"
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
      "/lovable-uploads/cff828aa-5bb4-4bdd-b226-da4108c92879.png",
      "/lovable-uploads/1cd4d9cf-1717-4710-a49b-4b41fc973da6.png",
      "/lovable-uploads/d8c9d55c-2e20-4b44-8d69-cf877a6c22d3.png",
      "/lovable-uploads/3c54f29a-ceed-4622-a80e-6ae838235b8f.png",
      "/lovable-uploads/fbb89a5f-8378-4330-8177-3469398d8d52.png"
    ]
  }
];
