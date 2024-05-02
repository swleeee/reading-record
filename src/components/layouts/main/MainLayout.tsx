import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { useUser } from '@/contexts';
import { Header, MobileHeader } from '@/components';
import { useToast } from '@/hooks';
import { deviceState } from '@/stores';
import { TOAST_MESSAGE } from '@/constants';
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
  const navigate = useNavigate();

  const device = useRecoilValue(deviceState);

  const { isInitializing, user } = useUser();
  const { addToast } = useToast();

  // NOTE: 로그인하지 않고 로그인이 필요한 페이지에 접근했을 경우 로그인 페이지로 라우팅 및 토스트 알림 처리
  useEffect(() => {
    if (isAuth && !user && !isInitializing) {
      addToast(TOAST_MESSAGE.INFO.LOGIN);
      navigate('/login');
    }
  }, [isAuth, isInitializing, user]);

  if (isInitializing) return null;

  return (
    <>
      {device === 'mobile' ? <MobileHeader /> : <Header />}
      <S.Main className={className}>{children}</S.Main>
    </>
  );
};

export default MainLayout;
