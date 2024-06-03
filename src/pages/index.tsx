import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';

import {
  BestCommentary,
  ReadingBook,
  MainLayout,
  // PopularBook,
  BestCommentaryMobileSkeleton,
  BestCommentaryDesktopSkeleton,
  ReadingBookMobileSkeleton,
  ReadingBookDesktopSkeleton,
} from '@/components';
import { deviceState } from '@/stores';
import * as S from './index.styled';

const Root = () => {
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
      {/* TODO: 추후 기능 도입 예정 */}
      {/* <PopularBook /> */}
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

export default Root;
