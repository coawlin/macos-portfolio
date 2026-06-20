export type Project = {
  id: number;
  title: string;
  company: string;
  description: string;
  role: string;
  techStack: string[];
  category: string;
  image?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Plan of Action (POA) Tracker',
    company: 'Apple',
    description:
      'A collaborative launch planning and operational tracking system replacing manual spreadsheet workflows with dynamic horizontal Gantt grids, inline draggable dependencies, and state-synchronized filters.',
    role: 'Lead Full Stack Engineer',
    techStack: [
      'Angular',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'TypeORM',
      'Server-Sent Events (SSE)',
      'BullMQ',
      'Redis',
      'AWS S3',
      'Kubernetes',
      'Docker',
    ],
    category: 'Web Application',
  },
  {
    id: 2,
    title: 'Multi-Tenant Notification Platform',
    company: 'Keysight Technologies',
    description:
      'Built a unified, event-driven notification platform to support multiple PathWave Cloud applications.',
    role: 'System Architect, Lead Full Stack Developer',
    techStack: [
      'NestJS',
      'NATS',
      'PostgreSQL',
      'Angular',
      'TypeScript',
      'Docker',
      'Kubernetes',
      'Helm',
      'ArgoCD',
    ],
    category: 'Microservices with UI Library',
  },
  {
    id: 3,
    title: 'Desktop App in Cloud (AWS AppStream Virtualization)',
    company: 'Keysight Technologies',
    description:
      'Enable engineering teams to run Windows-based desktop tools entirely in the browser with zero local installation and scalable enterprise authentication.',
    role: 'Developer, DevOps Engineer',
    techStack: [
      'AWS AppStream 2.0',
      'Keycloak (SAML/OIDC)',
      'WebDAV',
      'CI/CD (Jenkins)',
      'TypeScript',
      'Bash',
      'Kubernetes',
      'Docker',
    ],
    category: 'Desktop Virtualization',
  },
  {
    id: 4,
    title: 'Analytics App',
    company: 'Keysight Technologies',
    description:
      'Enable faster, more accurate engineering analysis by delivering a unified visualization framework capable of handling large datasets, complex interactions, and diverse analytics workflows.',
    role: 'Lead Frontend Developer',
    techStack: ['Angular', 'TypeScript', 'Plotly.js', 'RxJS', 'NgRx', 'REST APIs'],
    category: 'Web Application',
  },
  {
    id: 5,
    title: 'Cloud License Server',
    company: 'Keysight Technologies',
    description:
      'Provide enterprise-grade license pool management, tenant access control, usage insights, and admin workflows for cloud-based licensing.',
    role: 'Frontend Developer',
    techStack: ['Angular', 'TypeScript', 'REST APIs'],
    category: 'Web Application',
  },
  {
    id: 6,
    title: 'PathWave BenchVue AC Source Avionics',
    company: 'Keysight Technologies',
    description:
      'Provide a complete instrument control and automation solution for avionics AC Source testing: enabling engineers to configure test sequences, execute measurements, visualize live waveforms & data in real-time, log results and generate consolidated reports — replacing manual workflows with a unified, software-driven test platform.',
    role: 'Frontend Developer',
    techStack: ['Angular', 'TypeScript', 'D3.js', 'REST APIs'],
    category: 'Web Application',
  },
  {
    id: 7,
    title: 'Internal NES Firmware Update Tool',
    company: 'Keysight Technologies',
    description:
      "Designed to provide a unified workflow for managing firmware updates, installer packages, and configuration tasks across multiple microservices within Keysight's wireless and UXM ecosystems.",
    role: 'Frontend Developer',
    techStack: ['React.js', 'Redux', '.Net Core', 'C#'],
    category: 'Web Application',
  },
  {
    id: 8,
    title: 'E-commerce Platform',
    company: 'Ox Street',
    description:
      'Platform for buyers and sellers to trade authenticated sneakers and streetwear items in the secondhand market.',
    role: 'Frontend Developer',
    techStack: ['React.js', 'Redux', 'TypeScript', 'Styled-Components', 'Ant Design'],
    category: 'Web Application',
  },
];

export const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

// Get all unique tech stack items
export const allTechStacks = Array.from(new Set(projects.flatMap((p) => p.techStack))).sort();
