import React, { Suspense } from 'react';

import { BookList, BookSearch, MainLayout } from '@/components';
import * as S from './index.styled';

const root = () => {
  return (
    <MainLayout css={S.mainLayout}>
      <BookSearch />
      {/* TODO: 스켈레톤 UI 제작 예정 */}
      <Suspense fallback={<></>}>
        <BookList />
      </Suspense>
    </MainLayout>
  );
};

export default root;
