import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';

import {
  BestCommentary,
  ReadingBook,
  MainLayout,
  PopularBook,
  BestCommentaryMobileSkeleton,
  BestCommentaryDesktopSkeleton,
} from '@/components';
import { deviceState } from '@/stores';
import * as S from './index.styled';

const root = () => {
  const device = useRecoilValue(deviceState);

  return (
    <MainLayout css={S.mainLayout}>
      <ReadingBook />
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
