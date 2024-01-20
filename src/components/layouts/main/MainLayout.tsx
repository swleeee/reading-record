import React from 'react';
import { useRecoilValue } from 'recoil';

import { deviceState } from '@/stores';
import { Header, MobileHeader } from '@/components';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const device = useRecoilValue(deviceState);

  return (
    <>
      {device === 'mobile' ? <MobileHeader /> : <Header />}
      {children}
    </>
  );
};

export default MainLayout;
