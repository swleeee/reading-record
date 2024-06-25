import { useState, useEffect } from 'react';

export const useThemeMode = () => {
  const localStorageTheme = localStorage.getItem('theme');
  const initialThemeMode =
    localStorageTheme === 'dark' ||
    (!localStorageTheme &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? 'dark'
      : 'light';

  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(
    initialThemeMode,
  );

  const toggleThemeMode = () => {
    const nextThemeMode = themeMode === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', nextThemeMode);
    setThemeMode(nextThemeMode);
  };

  useEffect(() => {
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeMode]);

  return { themeMode, toggleThemeMode };
};
