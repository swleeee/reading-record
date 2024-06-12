import { Suspense } from 'react';

import {
  BestCommentary,
  BestCommentarySkeleton,
  MainLayout,
  ReadingBook,
  ReadingBookSkeleton,
  // PopularBook,
} from '@/components';
import * as S from './index.styled';

const Root = () => {
  return (
    <MainLayout css={S.mainLayout}>
      <Suspense fallback={<ReadingBookSkeleton />}>
        <ReadingBook />
      </Suspense>
      {/* TODO: 추후 기능 도입 예정 */}
      {/* <PopularBook /> */}
      <Suspense fallback={<BestCommentarySkeleton />}>
        <BestCommentary />
      </Suspense>
    </MainLayout>
  );
};

export default Root;
