import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { useUser } from '@/shared/lib';
import { deviceState } from '@/shared/stores';
import { PATH } from '@/shared/constants';
import { Header, MobileHeader } from '../../header';
import { Footer } from '../../footer';
import * as S from './Layout.styled';

interface LayoutProps {
  className?: string;
  children: React.ReactNode;
  isAuth?: boolean;
}

export const Layout = ({
  className,
  children,
  isAuth = false,
}: LayoutProps) => {
  const location = useLocation();

  const device = useRecoilValue(deviceState);

  const { isInitializing, user } = useUser();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isInitializing) return null;
  if (!user && isAuth) return <Navigate to={PATH.LOGIN} />;

  return (
    <>
      {device === 'mobile' ? <MobileHeader /> : <Header />}
      <S.Main className={className}>{children}</S.Main>
      <Footer />
    </>
  );
};

export default Layout;
