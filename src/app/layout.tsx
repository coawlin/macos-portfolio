import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

import './css/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://coawlin.dev'),
  title: 'macOS Web Portfolio',
  description: 'macOS themed developer portfolio showcasing projects, skills, and experience',
  keywords: [
    'portfolio',
    'developer',
    'macos',
    'web developer',
    'react',
    'next.js',
    'typescript',
    'full-stack',
  ],
  authors: [{ name: 'Coaw Lin' }],
  openGraph: {
    title: 'macOS Web Portfolio',
    description: 'macOS themed developer portfolio showcasing projects, skills, and experience',
    images: ['/assets/app-icons/portfolio/portfolio.png'],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'macOS Web Portfolio',
    description: 'macOS themed developer portfolio showcasing projects, skills, and experience',
    images: ['/assets/app-icons/portfolio/portfolio.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Coaw Lin',
    jobTitle: 'Full Stack Software Engineer',
    url: 'https://coawlin.dev',
    description: 'Full Stack Software Engineer specializing in React, Next.js, and TypeScript',
    sameAs: ['https://github.com/coawlin', 'https://linkedin.com/in/coawlin'],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
