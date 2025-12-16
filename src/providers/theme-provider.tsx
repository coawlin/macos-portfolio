'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  // Load theme preference and update DOM
  useEffect(() => {
    // This runs only once after mount
    const savedTheme = localStorage.getItem('theme') as Theme;
    const initialTheme =
      savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    // Update state and DOM together to avoid hydration issues
    if (initialTheme !== theme) {
      setTheme(initialTheme);
    }

    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${initialTheme}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update body class and localStorage when theme changes after initialization
  useEffect(() => {
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}
