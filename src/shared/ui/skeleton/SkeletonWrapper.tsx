import { ReactNode } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import { useThemeMode } from '@/shared/lib';

interface SkeletonWrapperProps {
  children: ReactNode;
}

export const SkeletonWrapper = ({ children }: SkeletonWrapperProps) => {
  const { themeMode } = useThemeMode();

  const baseColor = themeMode === 'dark' ? '#333' : undefined;
  const highlightColor = themeMode === 'dark' ? '#555' : undefined;

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      {children}
    </SkeletonTheme>
  );
};
