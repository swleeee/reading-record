import React from 'react';

import * as S from './LoginLayout.styled';

interface LoginLayoutProps {
  children: React.ReactNode;
}

const LoginLayout = () => {
  return (
    <S.LoginLayout>
      <S.LoginLabel>안녕하세요 ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.LoginLabel>
      <S.LoginLabel2>안녕하세요 ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.LoginLabel2>
    </S.LoginLayout>
  );
};

export default LoginLayout;
