export type Highlight = {
  icon: string;
  label: string;
  value: string;
};

export const highlights: Highlight[] = [
  { icon: '💼', label: 'Experience', value: '6+ Years' },
  { icon: '🏢', label: 'Current', value: 'Apple' },
  { icon: '🎓', label: 'Role', value: 'Full Stack Engineer' },
  { icon: '📍', label: 'Location', value: 'Singapore' },
];

export const aboutMeConfig = {
  name: 'Coaw Lin',
  title: 'Engineering high-performance UI and collaborative enterprise systems',
  paragraphs: [
    `I am a Full Stack Engineer with 6+ years of experience specialized in building highly interactive, 
    high-performance web applications and scalable backend APIs. Currently contracting at Apple, I architect 
    enterprise internal tools that automate complex operational workflows and replace manual data-tracking systems. 
    I focus on bridging the gap between sophisticated business logic and elegant, intuitive user interfaces.`,
    `My technical expertise spans modern frontend frameworks (Angular, React) and robust backend environments 
    (Node.js, NestJS, PostgreSQL). I specialize in performance engineering, including client-side optimization 
    (handling dense real-time data visualisations) and backend tuning (such as converting complex parser algorithms 
    to achieve a 96% reduction in payload processing latency).`,
    `I have a strong track record of engineering reusable visual libraries and scalable component architectures 
    distributed across product teams. Driven by developer experience and technical excellence, I have authored 
    multiple invention disclosures, with one selected for formal patent-track documentation by Keysight's 
    technical review board.`,
  ],
};
