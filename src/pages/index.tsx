import React from 'react';

import { BestCommentary, ReadingBook, MainLayout } from '@/components';
import * as S from './index.styled';

const root = () => {
  return (
    <MainLayout css={S.mainLayout}>
      <ReadingBook />
      <BestCommentary />
    </MainLayout>
  );
};

export default root;
