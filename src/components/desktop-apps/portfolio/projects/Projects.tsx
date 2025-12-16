'use client';

import {
  allTechStacks,
  categories,
  projects,
  type Project,
} from '@/data/portfolio/projects.config';
import { useOutsideClick } from '@/hooks/use-click-outside';
import { useRef, useState } from 'react';
import styles from './Projects.module.scss';

export default function Projects() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterType, setFilterType] = useState<'category' | 'tech'>('category');
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(dropdownRef as React.RefObject<HTMLDivElement>, () => setIsFilterOpen(false));

  // Filter by both category and tech stack
  const filteredProjects = projects.filter((p) => {
    const categoryMatch =
      selectedCategories.length === 0 || selectedCategories.includes(p.category);
    const techMatch =
      selectedTechs.length === 0 || selectedTechs.some((tech) => p.techStack.includes(tech));
    return categoryMatch && techMatch;
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedTechs([]);
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedTechs.length > 0;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.filterControls}>
          <div className={styles.filterIconWrapper} ref={dropdownRef}>
            <button
              className={`${styles.filterIcon} ${hasActiveFilters ? styles.active : ''}`}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              aria-label="Filter projects"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M2 4h16M5 10h10M8 16h4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              {hasActiveFilters && (
                <span className={styles.filterBadge}>
                  {selectedCategories.length + selectedTechs.length}
                </span>
              )}
            </button>

            {isFilterOpen && (
              <div className={styles.filterDropdown}>
                <div className={styles.dropdownHeader}>
                  <div className={styles.filterTabs}>
                    <button
                      className={`${styles.filterTab} ${filterType === 'category' ? styles.active : ''}`}
                      onClick={() => setFilterType('category')}
                    >
                      Category
                      {selectedCategories.length > 0 && (
                        <span className={styles.tabBadge}>{selectedCategories.length}</span>
                      )}
                    </button>
                    <button
                      className={`${styles.filterTab} ${filterType === 'tech' ? styles.active : ''}`}
                      onClick={() => setFilterType('tech')}
                    >
                      Tech Stack
                      {selectedTechs.length > 0 && (
                        <span className={styles.tabBadge}>{selectedTechs.length}</span>
                      )}
                    </button>
                  </div>
                  {hasActiveFilters && (
                    <button className={styles.clearAll} onClick={clearFilters}>
                      Clear All
                    </button>
                  )}
                </div>

                <div className={styles.dropdownContent}>
                  {filterType === 'category' && (
                    <div className={styles.filterOptions}>
                      {categories
                        .filter((c) => c !== 'All')
                        .map((category) => (
                          <label key={category} className={styles.filterOption}>
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(category)}
                              onChange={() => toggleCategory(category)}
                              className={styles.checkbox}
                            />
                            <span className={styles.optionLabel}>{category}</span>
                            <span className={styles.optionCount}>
                              {projects.filter((p) => p.category === category).length}
                            </span>
                          </label>
                        ))}
                    </div>
                  )}

                  {filterType === 'tech' && (
                    <div className={styles.filterOptions}>
                      {allTechStacks.map((tech) => (
                        <label key={tech} className={styles.filterOption}>
                          <input
                            type="checkbox"
                            checked={selectedTechs.includes(tech)}
                            onChange={() => toggleTech(tech)}
                            className={styles.checkbox}
                          />
                          <span className={styles.optionLabel}>{tech}</span>
                          <span className={styles.optionCount}>
                            {projects.filter((p) => p.techStack.includes(tech)).length}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {hasActiveFilters && (
          <div className={styles.activeFilters}>
            {selectedCategories.map((category) => (
              <span key={category} className={styles.activeFilterTag}>
                {category}
                <button
                  className={styles.removeFilter}
                  onClick={() => toggleCategory(category)}
                  aria-label={`Remove ${category} filter`}
                >
                  ✕
                </button>
              </span>
            ))}
            {selectedTechs.map((tech) => (
              <span key={tech} className={styles.activeFilterTag}>
                {tech}
                <button
                  className={styles.removeFilter}
                  onClick={() => toggleTech(tech)}
                  aria-label={`Remove ${tech} filter`}
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`${styles.projectCard} ${hoveredId === project.id ? styles.hovered : ''}`}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => setSelectedProject(project)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.categoryBadge}>{project.category}</div>
            </div>

            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.company}>{project.company}</p>

            <p className={styles.description}>{project.description.slice(0, 120)}...</p>

            <div className={styles.cardFooter}>
              <div className={styles.role}>{project.role}</div>
              <div className={styles.techCount}>{project.techStack.length} technologies</div>
            </div>

            <div className={styles.hoverOverlay}>
              <span className={styles.viewDetails}>View Details →</span>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className={styles.modal} onClick={() => setSelectedProject(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedProject(null)}>
              ✕
            </button>

            <div className={styles.modalHeader}>
              <div className={styles.modalBadges}>
                <span className={styles.modalCategory}>{selectedProject.category}</span>
              </div>
              <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
              <p className={styles.modalCompany}>{selectedProject.company}</p>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalSection}>
                <h4 className={styles.modalSectionTitle}>Role</h4>
                <p className={styles.modalRole}>{selectedProject.role}</p>
              </div>

              <div className={styles.modalSection}>
                <h4 className={styles.modalSectionTitle}>Description</h4>
                <p className={styles.modalDescription}>{selectedProject.description}</p>
              </div>

              <div className={styles.modalSection}>
                <h4 className={styles.modalSectionTitle}>Tech Stack</h4>
                <div className={styles.techStack}>
                  {selectedProject.techStack.map((tech, idx) => (
                    <span key={idx} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
