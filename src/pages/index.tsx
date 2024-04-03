import React from 'react';

import { BestCommentary, CurrentBook, MainLayout } from '@/components';
import * as S from './index.styled';

const root = () => {
  return (
    <MainLayout css={S.mainLayout}>
      <CurrentBook />
      <BestCommentary />
    </MainLayout>
  );
};

export default root;
