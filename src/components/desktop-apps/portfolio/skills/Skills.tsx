'use client';

import { categories, categoryIcons, skills } from '@/data/portfolio/skills.config';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Skills.module.scss';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filteredSkills = selectedCategory
    ? skills.filter((s) => s.category === selectedCategory)
    : skills;

  const totalSkills = skills.length;

  return (
    <div className={styles.container}>
      {/* Skills Display */}
      <div className={styles.skillsSection}>
        <div className={styles.categoryFilter}>
          <button
            className={`${styles.categoryBtn} ${!selectedCategory ? styles.active : ''}`}
            onClick={() => setSelectedCategory(null)}
          >
            All ({totalSkills})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.categoryBtn} ${selectedCategory === cat ? styles.active : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat} ({skills.filter((s) => s.category === cat).length})
            </button>
          ))}
        </div>
        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill, idx) => (
            <div
              key={skill.name}
              className={styles.skillCard}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <h4 className={styles.skillName}>{skill.name}</h4>
              {skill.icon ? (
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  className={styles.skillIcon}
                  width={48}
                  height={48}
                />
              ) : (
                <span className={styles.skillIcon}>{categoryIcons[skill.category] || '📦'}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
