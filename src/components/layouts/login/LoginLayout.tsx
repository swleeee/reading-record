import React from 'react';

import * as S from './LoginLayout.styled';

interface LoginLayoutProps {
  children: React.ReactNode;
}

const LoginLayout = () => {
  return (
    <div>
      <S.LoginLabel>안녕하세요 ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.LoginLabel>
      <S.LoginLabel2>안녕하세요 ABCDEFGHIJKLMNOPQRSTUVWXYZ</S.LoginLabel2>
    </div>
  );
};

export default LoginLayout;
