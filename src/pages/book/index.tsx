import React from 'react';

import { BookSearch, MainLayout } from '@/components';
import * as S from './index.styled';

const root = () => {
  return (
    <MainLayout css={S.mainLayout}>
      <BookSearch />
    </MainLayout>
  );
};

export default root;
