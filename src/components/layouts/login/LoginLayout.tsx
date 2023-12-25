import React from 'react';

import { AuthNavigation, LoginForm, SocialLogin } from '@/components';
import * as S from './LoginLayout.styled';

const LoginLayout = () => {
  return (
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
