import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';

import {
  BestCommentary,
  ReadingBook,
  MainLayout,
  PopularBook,
  BestCommentaryMobileSkeleton,
  BestCommentaryDesktopSkeleton,
  ReadingBookMobileSkeleton,
  ReadingBookDesktopSkeleton,
} from '@/components';
import { deviceState } from '@/stores';
import * as S from './index.styled';

const root = () => {
  const device = useRecoilValue(deviceState);

  return (
    <MainLayout css={S.mainLayout}>
      <Suspense
        fallback={
          device === 'mobile' ? (
            <ReadingBookMobileSkeleton />
          ) : (
            <ReadingBookDesktopSkeleton />
          )
        }
      >
        <ReadingBook />
      </Suspense>
      <PopularBook />
      <Suspense
        fallback={
          device === 'mobile' ? (
            <BestCommentaryMobileSkeleton />
          ) : (
            <BestCommentaryDesktopSkeleton />
          )
        }
      >
        <BestCommentary />
      </Suspense>
    </MainLayout>
  );
};

export default root;
