'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './Portfolio.module.scss';
import AboutMe from './about-me/AboutMe';
import Contact from './contact/Contact';
import Experience from './experience/Experience';
import Projects from './projects/Projects';
import Skills from './skills/Skills';

type Section = 'about' | 'experience' | 'projects' | 'skills' | 'contact';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<Section>('about');

  const sections: { id: Section; label: string; icon: string }[] = [
    { id: 'about', label: 'About Me', icon: '/assets/app-icons/portfolio/portfolio.png' },
    { id: 'experience', label: 'Experience', icon: '/assets/app-icons/portfolio/experience.png' },
    { id: 'projects', label: 'Projects', icon: '/assets/app-icons/portfolio/projects.png' },
    { id: 'skills', label: 'Skills', icon: '/assets/app-icons/portfolio/skills.png' },
    { id: 'contact', label: 'Contact', icon: '/assets/app-icons/portfolio/contact.png' },
  ];

  return (
    <div className={styles.container}>
      {/* Side Panel */}
      <aside className={styles.sidebar}>
        <nav className={styles.navList}>
          {sections.map((section) => (
            <button
              key={section.id}
              className={`${styles.navItem} ${activeSection === section.id ? styles.active : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              <Image
                src={section.icon}
                alt={section.label}
                className={styles.navIcon}
                width={24}
                height={24}
              />
              <span className={styles.navLabel}>{section.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className={styles.content}>
        {activeSection === 'about' && <AboutMe />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'contact' && <Contact />}
      </main>
    </div>
  );
}
