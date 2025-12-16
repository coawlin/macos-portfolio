export type ContactIcon = {
  light: string;
  dark: string;
};

export type ContactItem = {
  icon: ContactIcon;
  label: string;
  value: string;
  href: string;
  description: string;
};

export const contacts: ContactItem[] = [
  {
    icon: {
      light: '/assets/app-icons/portfolio/mail-light.svg',
      dark: '/assets/app-icons/portfolio/mail-dark.svg',
    },
    label: 'Email',
    value: 'coawlin@hotmail.com',
    href: 'mailto:coawlin@hotmail.com',
    description: 'Send me an email for any inquiries or opportunities',
  },
  {
    icon: {
      light: '/assets/app-icons/portfolio/linkedin.png',
      dark: '/assets/app-icons/portfolio/linkedin.png',
    },
    label: 'LinkedIn',
    value: 'linkedin.com/in/coawlin',
    href: 'https://www.linkedin.com/in/coawlin',
    description: 'Connect with me on LinkedIn for professional networking',
  },
];

export const contactConfig = {
  title: 'Get In Touch',
  subtitle:
    "I'm always open to discussing new projects, opportunities, or just having a chat about technology.",
  cta: {
    title: "Let's Work Together",
    text: `Whether you have a project in mind, need technical consultation, or just want to connect, 
    feel free to reach out through any of the channels above.`,
  },
};
