import { useThemeContext } from '@/providers/theme-provider';

export const useTheme = () => {
  const { theme, setTheme } = useThemeContext();

  return [theme, setTheme] as const;
};
