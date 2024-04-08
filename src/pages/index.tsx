import React from 'react';

import {
  BestCommentary,
  ReadingBook,
  MainLayout,
  PopularBook,
} from '@/components';
import * as S from './index.styled';

const root = () => {
  return (
    <MainLayout css={S.mainLayout}>
      <ReadingBook />
      <PopularBook />
      <BestCommentary />
    </MainLayout>
  );
};

export default root;
