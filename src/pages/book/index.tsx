import React from 'react';

import { BookList, BookSearch, MainLayout } from '@/components';
import * as S from './index.styled';

const root = () => {
  return (
    <MainLayout css={S.mainLayout}>
      <BookSearch />
      <BookList />
    </MainLayout>
  );
};

export default root;
