export type Highlight = {
  icon: string;
  label: string;
  value: string;
};

export const highlights: Highlight[] = [
  { icon: '💼', label: 'Experience', value: '5+ Years' },
  { icon: '🏢', label: 'Current', value: 'Keysight Technologies' },
  { icon: '🎓', label: 'Role', value: 'Senior Full Stack Software Engineer' },
  { icon: '📍', label: 'Location', value: 'Singapore' },
];

export const aboutMeConfig = {
  name: 'Coaw Lin',
  title: 'Building scalable web applications & cloud services',
  paragraphs: [
    `With 5+ years of experience, I build UI-heavy, data-driven web applications and cloud services. 
    I specialize in frontend architecture, reusable component systems, and high-performance
    data visualization (D3/Plotly) used across internal products.`,
    `On the backend, I've delivered multi-tenant services (Node.js/NestJS, NATS, PostgreSQL, Kubernetes) and
    event-driven services on AWS. My work focuses on scalability, performance optimization, and creating 
    exceptional developer experiences.`,
    `I'm also a patent holder for "One-Click Filter Creation for Grouped Data Chart", a feature that 
    revolutionized how users interact with complex data visualizations.`,
  ],
};
