import { Suspense } from 'react';

import { Layout } from '@/widgets/layout';
import {
  CurrentReadingBook,
  CurrentReadingBookSkeleton,
} from '@/widgets/currentReadingBook';
import {
  BestCommentary,
  BestCommentarySkeleton,
} from '@/widgets/bestCommentary';
// import { PopularBook } from '@/widgets/popularBook';
import * as S from './Page.styled';

export const MainPage = () => {
  return (
    <Layout css={S.layoutStyle}>
      <Suspense fallback={<CurrentReadingBookSkeleton />}>
        <CurrentReadingBook />
      </Suspense>
      {/* TODO: 추후 기능 도입 예정 */}
      {/* <PopularBook /> */}
      <Suspense fallback={<BestCommentarySkeleton />}>
        <BestCommentary />
      </Suspense>
    </Layout>
  );
};
