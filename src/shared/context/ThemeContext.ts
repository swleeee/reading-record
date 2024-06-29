import { createContext } from 'react';

import { getInitialThemeMode } from '../lib';
import { type ThemeModeType } from '../model';

export const ThemeContext = createContext<{
  themeMode: ThemeModeType;
  toggleThemeMode: () => void;
}>({
  themeMode: getInitialThemeMode(),
  toggleThemeMode: () => {},
});
