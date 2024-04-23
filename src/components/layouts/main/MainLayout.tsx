import React from 'react';
import { useRecoilValue } from 'recoil';

import { Header, MobileHeader } from '@/components';
import { deviceState } from '@/stores';
import * as S from './MainLayout.styled';

interface MainLayoutProps {
  className?: string;
  children: React.ReactNode;
}

const MainLayout = ({ className, children }: MainLayoutProps) => {
  const device = useRecoilValue(deviceState);

  return (
    <>
      {device === 'mobile' ? <MobileHeader /> : <Header />}
      <S.Main className={className}>{children}</S.Main>
    </>
  );
};

export default MainLayout;
