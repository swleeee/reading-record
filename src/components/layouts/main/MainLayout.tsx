import React from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { useUser } from '@/contexts';
import { Footer, Header, MobileHeader } from '@/components';
import { deviceState } from '@/stores';
import * as S from './MainLayout.styled';

interface MainLayoutProps {
  className?: string;
  children: React.ReactNode;
  isAuth?: boolean;
}

const MainLayout = ({
  className,
  children,
  isAuth = false,
}: MainLayoutProps) => {
  const device = useRecoilValue(deviceState);

  const { isInitializing, user } = useUser();

  if (isInitializing) return null;
  if (!user && isAuth) return <Navigate to="/login" />;

  return (
    <>
      {device === 'mobile' ? <MobileHeader /> : <Header />}
      <S.Main className={className}>{children}</S.Main>
      <Footer />
    </>
  );
};

export default MainLayout;
