export type Experience = {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  logo?: string;
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Apple',
    position: 'Full Stack Engineer (Contractor)',
    location: 'Singapore',
    startDate: 'Feb 2026',
    endDate: 'Present',
    description: [
      'Architected and deployed an internal launch planning web application (POA Tracker) using Angular and NestJS, replacing a manual process of tracking launches across multiple spreadsheets and chasing team members over Slack—saving an estimated 12 manual tracking and data-entry hours per launch.',
      'Engineered a custom timeline UI featuring dynamic horizontal Gantt grids, draggable dependencies, and state-synchronized filters to coordinate complex launch activities.',
      'Built real-time UI synchronization using Server-Sent Events (SSE) to display task updates dynamically on the dashboard as they are submitted by team members.',
      'Constructed asynchronous background workers using BullMQ and Redis to process and aggregate system change-logs.',
      'Implemented plan-level access control with multi-user collaborator management, and column-level AES-256 field encryption for sensitive product data and user PII with in-memory decryption caching.',
      'Designed a full audit trail system with publish/revision workflow, optimistic locking, and per-mutation change logs across all entities.',
      'Reduced backend XML data-processing latency by 96% (from 17.5 seconds down to 694ms) by converting an O(N²) nested lookup algorithm into an O(1) hash map, migrating to gzip-compressed S3 archive streams, and bypassing redundant database schema validations.',
      'Interfaced directly with business stakeholders across 10+ alignment sessions to refine user flows, translate loose requirements into clear database schemas, and map out the core dependency hierarchy.'
    ],
    technologies: [
      'Angular',
      'NestJS',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'PostgreSQL',
      'TypeORM',
      'Server-Sent Events (SSE)',
      'BullMQ',
      'Redis',
      'AWS S3',
      'Docker',
      'Kubernetes',
    ],
  },
  {
    id: 2,
    company: 'Keysight Technologies',
    position: 'R&D Software Engineer 3',
    location: 'Singapore',
    startDate: 'Apr 2020',
    endDate: 'Feb 2026',
    description: [
      'Designed and established the architecture of a high-impact, npm-distributed visual component library containing custom SVG path generators and automatic scale calculation algorithms, decreasing frontend development effort by 40% across 3 distinct hardware product lines (Oscilloscopes, Power Supplies, and Digital Multimeters).',
      'Maintained clean rendering performance on large-scale datasets by optimizing Plotly.js plotting layers, bypassing browser DOM limitations under heavy state updates.',
      'Engineered a multi-tenant client-side notification engine integrated with a NATS-over-WebSocket pub/sub stream, implementing JWT-based client-side authentication to serve 6 internal services.',
      'Pioneered cloud migration of legacy Windows desktop applications using AWS AppStream 2.0 streaming nodes, configuring Keycloak SAML/OIDC federated auth, and writing custom Node.js wrappers to manage session lifecycles.',
      'Invented an automated calibration routing system; submitted invention disclosure selected for formal patent-track documentation by Keysight\'s technical review board.',
      'Promoted to Software Engineer Grade 3 and awarded Restricted Stock Units (RSUs) for outstanding technical contribution and success in standardizing core visualization libraries across hardware divisions.',
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'NgRx',
      'Plotly.js',
      'D3.js',
      'Node.js',
      'NATS',
      'WebSocket',
      'AWS AppStream 2.0',
      'Keycloak',
      'SAML/OIDC',
      'PostgreSQL',
      'Kubernetes',
      'Docker',
      'Jenkins',
    ],
  },
  {
    id: 3,
    company: 'Ox Street',
    position: 'Frontend Web Developer (Concurrent)',
    location: 'Singapore',
    startDate: 'Aug 2019',
    endDate: 'Feb 2020',
    description: [
      'Developed customer-facing responsive commerce features (Product Discovery, Detail Pages, and User Portals) using React, TypeScript, and stateful client-side router hooks.',
      'Created reusable atomic components (tables, compound filters, modal flows) using Ant Design and Material UI, standardizing API integration patterns and styling rules.',
      'Refactored backend administration panels, reducing manual operational processing time by 30%.',
    ],
    technologies: ['React', 'TypeScript', 'Ant Design', 'Material UI', 'Redux'],
  },
  {
    id: 4,
    company: 'Motorola Solutions',
    position: 'Software Engineer (Concurrent)',
    location: 'Penang, Malaysia',
    startDate: 'Jul 2019',
    endDate: 'Feb 2020',
    description: [
      'Programmed embedded firmware for LTE terminal devices using C/C++ and Google Test, delivering the trunked talk-group dispatch feature 20% ahead of the product roadmap schedule.',
      'Wrote an automated calibration and measurement suite in LabVIEW, reducing radio assembly line test time by 50% and doubling testing capacity.',
    ],
    technologies: ['C', 'C++', 'LabVIEW', 'Google Test'],
  },
  {
    id: 5,
    company: 'Motorola Solutions',
    position: 'Electrical Engineer',
    location: 'Penang, Malaysia',
    startDate: 'Aug 2017',
    endDate: 'Jun 2019',
    description: [
      'Conducted RF validation and signal integrity analysis for multi-band portable transceivers using spectrum analyzers and power meters.',
      'Improved device operating hours by optimizing transmit current drain across 5-5-90 and 10-10-80 transmit-receive-standby profiles.',
    ],
    technologies: [
      'Lean Six Sigma',
      'Soldering',
      'Radio transmitter',
      'PSA Spectrum Analyzer',
      'Oscilloscope',
      'ADS (Advanced Design System)',
      'RF Circuit Tuning',
    ],
  },
];
