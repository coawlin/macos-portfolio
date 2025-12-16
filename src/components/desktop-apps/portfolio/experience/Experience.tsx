'use client';

import { experiences } from '@/data/portfolio/experience.config';
import React, { useRef, useState } from 'react';
import styles from './Experience.module.scss';

export default function Experience() {
  const [selectedId, setSelectedId] = useState<number | null>(experiences[0]?.id || null);
  const [timelineHeight, setTimelineHeight] = useState<number>(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  const selectedExperience = experiences.find((exp) => exp.id === selectedId);

  // Calculate timeline height
  const updateTimelineHeight = () => {
    if (timelineRef.current) {
      setTimelineHeight(timelineRef.current.scrollHeight);
    }
  };

  React.useEffect(() => {
    updateTimelineHeight();
    window.addEventListener('resize', updateTimelineHeight);
    return () => window.removeEventListener('resize', updateTimelineHeight);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.timeline} ref={timelineRef}>
        <div className={styles.timelineLine} style={{ height: `${timelineHeight}px` }}></div>
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className={`${styles.timelineItem} ${selectedId === exp.id ? styles.active : ''}`}
            onClick={() => setSelectedId(exp.id)}
          >
            <div className={styles.timelineDot}>
              <div className={styles.dotInner}></div>
            </div>
            <div className={styles.timelineCard}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.position}>{exp.position}</h3>
                  <p className={styles.company}>{exp.company}</p>
                </div>
                <div className={styles.dateRange}>
                  <span className={styles.date}>
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedExperience && (
        <div className={styles.detailsPanel}>
          <div className={styles.detailsHeader}>
            <div>
              <h2 className={styles.detailsPosition}>{selectedExperience.position}</h2>
              <p className={styles.detailsCompany}>
                {selectedExperience.company} • {selectedExperience.location}
              </p>
              <p className={styles.detailsDate}>
                {selectedExperience.startDate} - {selectedExperience.endDate}
              </p>
            </div>
          </div>

          <div className={styles.detailsContent}>
            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Key Achievements</h4>
              <ul className={styles.achievements}>
                {selectedExperience.description.map((item, idx) => (
                  <li key={idx} className={styles.achievementItem}>
                    <span className={styles.bullet}>▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Technologies</h4>
              <div className={styles.technologies}>
                {selectedExperience.technologies.map((tech, idx) => (
                  <span key={idx} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
