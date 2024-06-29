import { ReactNode, useContext } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import { ThemeContext } from '@/shared/context';

interface SkeletonWrapperProps {
  children: ReactNode;
}

export const SkeletonWrapper = ({ children }: SkeletonWrapperProps) => {
  const { themeMode } = useContext(ThemeContext);

  const baseColor = themeMode === 'dark' ? '#333' : undefined;
  const highlightColor = themeMode === 'dark' ? '#555' : undefined;

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      {children}
    </SkeletonTheme>
  );
};
