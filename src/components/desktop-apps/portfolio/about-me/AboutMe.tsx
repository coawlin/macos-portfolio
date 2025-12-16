'use client';

import { aboutMeConfig, highlights } from '@/data/portfolio/about-me.config';
import styles from './AboutMe.module.scss';

export default function AboutMe() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.name}>{aboutMeConfig.name}</h1>
        <p className={styles.title}>{aboutMeConfig.title}</p>
      </div>

      {/* Highlights Grid */}
      <div className={styles.highlightsGrid}>
        {highlights.map((item, index) => (
          <div key={index} className={styles.highlightCard}>
            <span className={styles.highlightIcon}>{item.icon}</span>
            <div className={styles.highlightInfo}>
              <span className={styles.highlightLabel}>{item.label}</span>
              <span className={styles.highlightValue}>{item.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className={styles.aboutSection}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.aboutContent}>
          {aboutMeConfig.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
