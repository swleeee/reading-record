import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '@/contexts';
import { AuthNavigation, LoginForm, SocialLogin } from '@/components';
import * as S from './LoginLayout.styled';

const LoginLayout = () => {
  const navigate = useNavigate();

  const { isInitializing, user } = useUser();

  useEffect(() => {
    if (!user || isInitializing) return;

    navigate('/');
  }, [isInitializing, user]);

  return user ? null : (
    <S.LoginLayout>
      <S.Logo>READING-RECORD</S.Logo>
      <S.LoginContents>
        <LoginForm />
        <AuthNavigation />
        <SocialLogin />
      </S.LoginContents>
    </S.LoginLayout>
  );
};

export default LoginLayout;
