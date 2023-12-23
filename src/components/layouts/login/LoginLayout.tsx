import React from 'react';

import { AuthNavigation, LoginForm } from '@/components';
import * as S from './LoginLayout.styled';

const LoginLayout = () => {
  return (
    <S.LoginLayout>
      <S.Logo>READING-RECORD</S.Logo>
      <S.LoginContents>
        <LoginForm />
        <AuthNavigation />
      </S.LoginContents>
    </S.LoginLayout>
  );
};

export default LoginLayout;
