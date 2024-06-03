import { Suspense } from 'react';

import {
  BookList,
  BookListSkeleton,
  BookSearch,
  MainLayout,
} from '@/components';
import * as S from './index.styled';

const root = () => {
  return (
    <MainLayout css={S.mainLayout} isAuth>
      <BookSearch />
      <Suspense fallback={<BookListSkeleton />}>
        <BookList />
      </Suspense>
    </MainLayout>
  );
};

export default root;
