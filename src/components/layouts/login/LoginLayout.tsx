import React from 'react';

import { LoginForm } from '@/components';
import * as S from './LoginLayout.styled';

const LoginLayout = () => {
  return (
    <S.LoginLayout>
      <S.Logo>READING-RECORD</S.Logo>
      <LoginForm />
      <S.LoginLabel>안녕하세요 ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.LoginLabel>
      <S.LoginLabel2>안녕하세요 ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.LoginLabel2>
    </S.LoginLayout>
  );
};

export default LoginLayout;
