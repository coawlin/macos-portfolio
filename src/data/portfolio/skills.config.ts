export type CategorySkill = {
  name: string;
  icon?: string;
};

export type Skill = CategorySkill & {
  category: string;
};

export const frontendSkills: CategorySkill[] = [
  { name: 'Angular', icon: '/assets/tech-stack-icons/angular.svg' },
  { name: 'React', icon: '/assets/tech-stack-icons/react.svg' },
  { name: 'Javascript', icon: '/assets/tech-stack-icons/javascript.svg' },
  { name: 'TypeScript', icon: '/assets/tech-stack-icons/typescript.svg' },
  { name: 'Next.js', icon: '/assets/tech-stack-icons/nextjs.svg' },
  { name: 'D3.js', icon: '/assets/tech-stack-icons/d3js.svg' },
  { name: 'RxJs', icon: '/assets/tech-stack-icons/rxjs.svg' },
  { name: 'Plotly.js', icon: '/assets/tech-stack-icons/plotlyjs.svg' },
  { name: 'HTML5', icon: '/assets/tech-stack-icons/html5.svg' },
  { name: 'CSS3', icon: '/assets/tech-stack-icons/css3.svg' },
  { name: 'Sass/SCSS', icon: '/assets/tech-stack-icons/sass.svg' },
  { name: 'Redux', icon: '/assets/tech-stack-icons/redux.svg' },
  { name: 'Material UI', icon: '/assets/tech-stack-icons/material-ui.svg' },
  { name: 'Ant Design', icon: '/assets/tech-stack-icons/ant-design.svg' },
];

export const backendSkills: CategorySkill[] = [
  { name: 'Node.js', icon: '/assets/tech-stack-icons/nodejs.svg' },
  { name: 'NestJS', icon: '/assets/tech-stack-icons/nestjs.svg' },
  { name: 'C#', icon: '/assets/tech-stack-icons/csharp.svg' },
];

export const systemProgrammingSkills: CategorySkill[] = [
  { name: 'C', icon: '/assets/tech-stack-icons/c.svg' },
  { name: 'C++', icon: '/assets/tech-stack-icons/cpp.svg' },
];

export const devOpsSkills: CategorySkill[] = [
  { name: 'Docker', icon: '/assets/tech-stack-icons/docker.svg' },
  { name: 'Kubernetes', icon: '/assets/tech-stack-icons/kubernetes.svg' },
  { name: 'Jenkins', icon: '/assets/tech-stack-icons/jenkins.svg' },
];

export const databaseSkills: CategorySkill[] = [
  { name: 'PostgreSQL', icon: '/assets/tech-stack-icons/postgresql.svg' },
];

export const testingToolsSkills: CategorySkill[] = [
  { name: 'Jest', icon: '/assets/tech-stack-icons/jest.svg' },
  { name: 'Jasmine', icon: '/assets/tech-stack-icons/jasmine.svg' },
];

export const skills: Skill[] = [
  ...frontendSkills.map((s) => ({ ...s, category: 'Frontend' })),
  ...backendSkills.map((s) => ({ ...s, category: 'Backend' })),
  ...systemProgrammingSkills.map((s) => ({ ...s, category: 'System Programming' })),
  ...databaseSkills.map((s) => ({ ...s, category: 'Database' })),
  ...devOpsSkills.map((s) => ({ ...s, category: 'DevOps' })),
  ...testingToolsSkills.map((s) => ({ ...s, category: 'Testing Tools' })),
];

export const categories = Array.from(new Set(skills.map((s) => s.category)));

// Category icon mapping
export const categoryIcons: Record<string, string> = {
  Frontend: '🎨',
  Backend: '⚙️',
  Database: '🗄️',
  DevOps: '🚀',
  Testing: '🧪',
  Tools: '🔧',
};
