import { ReactNode, useCallback, useEffect, useState } from 'react';

import { ThemeContext } from '@/shared/context';
import { getInitialThemeMode } from '@/shared/lib';
import { type ThemeModeType } from '@/shared/model';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeModeType>(
    getInitialThemeMode(),
  );

  const toggleThemeMode = useCallback(() => {
    const nextThemeMode = themeMode === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', nextThemeMode);
    setThemeMode(nextThemeMode);
  }, [themeMode]);

  useEffect(() => {
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeMode]);

  const value = { themeMode, toggleThemeMode };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
