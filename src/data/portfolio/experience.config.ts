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
    company: 'Keysight Technologies',
    position: 'Senior Software Engineer (Full Stack)',
    location: 'Singapore',
    startDate: 'Apr 2020',
    endDate: 'Present',
    description: [
      'Architected a multi-tenant notification system adopted by 6+ internal apps, significantly reducing integration effort for new products',
      'Designed and implemented AWS AppStream 2.0 virtualization, enabling 300+ engineers to run Windows-based VNA/Infiniium/VSA tools via browser;\
       automated image pipelines cut onboarding time by 50%',
      'Led frontend architecture for Analytics Cygnet 2 using Plotly.js, which is used across 3+ product teams and cut duplicated chart logic 60%',
      'Built reusable visualization components adopted across multiple NPIs (Avionics, DMM, Tacocat), improving feature delivery velocity and UX consistency.',
      'Filed 4 invention disclosures, including a granted patent for "One-Click Filter Creation for Grouped Data Chart"',
      'Ran cloud training sessions for 8+ engineering cohorts',
    ],
    technologies: [
      'Angular',
      'React',
      'NestJS',
      'Node.js',
      'Plotly.js',
      'D3.js',
      'Jest',
      'Jasmine',
      'PostgreSQL',
      'AWS',
      'Kubernetes',
      'Docker',
      'C#',
      'C++',
      'Electron.js',
    ],
  },
  {
    id: 2,
    company: 'Ox Street',
    position: 'Frontend Web Developer',
    location: 'Singapore (Remote)',
    startDate: 'Aug 2019',
    endDate: 'Feb 2020',
    description: [
      'Developed and maintained customer-facing pages (product listings, product details, profile/account pages',
      'Reworked key admin flows and dashboards, reducing manual sales-ops workload by ~30%',
      'Translated Figma wireframes and design mockups into responsive, pixel-consistent UIs',
      'Implemented reusable UI components (tables, forms, filters, modals) and integrated them with backend APIs for inventory, pricing, and order management',
    ],
    technologies: ['React', 'Ant Design', 'Material UI', 'Styled Components', 'Redux'],
  },
  {
    id: 3,
    company: 'Motorola Solutions',
    position: 'Software Engineer',
    location: 'Penang, Malaysia',
    startDate: 'Jul 2019',
    endDate: 'Feb 2020',
    description: [
      'Developed and debugged embedded firmware for LTE radios in C/C++, following object-oriented design and coding standards',
      'Wrote unit tests and API documentation to make the firmware easier to integrate, debug, and maintain for other teams',
      'Created a LabVIEW-based calibration automation tool that reduced radio calibration time by ~50%, significantly increasing test throughput',
    ],
    technologies: ['C', 'C++', 'LabVIEW'],
  },
  {
    id: 4,
    company: 'Motorola Solutions',
    position: 'Electrical Engineer',
    location: 'Penang, Malaysia',
    startDate: 'Aug 2017',
    endDate: 'Feb 2019',
    description: [
      'Performed RF and hardware validation for APX8000 All-Band P25 portable radios, including bench measurements,\
      signal integrity checks, and power performance analysis',
      'Used oscilloscopes, spectrum analyzers, and other lab equipment to debug board-level issues and verify hardware against design specs.',
      'Improve radio battery life performance by optimizing transmit current drain, measured using a 5-5-90 10-10-80 duty cycle profile',
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
