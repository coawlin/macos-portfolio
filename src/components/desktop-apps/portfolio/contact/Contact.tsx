'use client';

import { contactConfig, contacts } from '@/data/portfolio/contact.config';
import { useTheme } from '@/hooks';
import Image from 'next/image';
import styles from './Contact.module.scss';

export default function Contact() {
  const [theme] = useTheme();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{contactConfig.title}</h1>
        <p className={styles.subtitle}>{contactConfig.subtitle}</p>
      </div>

      <div className={styles.contactGrid}>
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <div className={styles.iconWrapper}>
              <Image
                key={`${contact.label}-${theme}`}
                src={theme === 'dark' ? contact.icon.dark : contact.icon.light}
                alt={`${contact.label} icon`}
                className={styles.icon}
                width={32}
                height={32}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardLabel}>{contact.label}</h3>
              <p className={styles.cardValue}>{contact.value}</p>
              <p className={styles.cardDescription}>{contact.description}</p>
            </div>
            <div className={styles.arrow}>→</div>
          </a>
        ))}
      </div>

      <div className={styles.callToAction}>
        <h2 className={styles.ctaTitle}>{contactConfig.cta.title}</h2>
        <p className={styles.ctaText}>{contactConfig.cta.text}</p>
      </div>
    </div>
  );
}
