export const getInitialThemeMode = () => {
  const localStorageTheme = localStorage.getItem('theme');
  const initialThemeMode =
    localStorageTheme === 'dark' ||
    (!localStorageTheme &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? 'dark'
      : 'light';

  return initialThemeMode;
};
