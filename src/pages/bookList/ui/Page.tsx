import { Suspense } from 'react';

import { Layout } from '@/widgets/layout';
import { BookSearch } from '@/widgets/bookSearch';
import { BookList, BookListSkeleton } from '@/widgets/bookList';
import * as S from './Page.styled';

export const BookListPage = () => {
  return (
    <Layout css={S.layoutStyle} isAuth>
      <BookSearch />
      <Suspense fallback={<BookListSkeleton />}>
        <BookList />
      </Suspense>
    </Layout>
  );
};
