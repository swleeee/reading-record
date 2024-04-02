import React from 'react';

import { BestCommentary, MainLayout } from '@/components';
import * as S from './index.styled';

const root = () => {
  return (
    <MainLayout css={S.mainLayout}>
      <BestCommentary />
    </MainLayout>
  );
};

export default root;
