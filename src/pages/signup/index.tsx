import React from 'react';

import { MainLayout, SignupForm } from '@/components';
import * as S from './index.styled';

const root = () => {
  return (
    <MainLayout css={S.mainLayout}>
      <S.Title>회원가입</S.Title>
      <SignupForm />
    </MainLayout>
  );
};

export default root;
